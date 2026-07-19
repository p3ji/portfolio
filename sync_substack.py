import urllib.request
import xml.etree.ElementTree as ET
import json
import re
import os
from datetime import datetime
from email.utils import parsedate_to_datetime

FEED_URL = "https://p3ji.substack.com/feed"
TIMELINE_JSON_PATH = "_data/timeline.json"
VAULT_PORTFOLIO_PATH = r"D:\Brain2\Projects\portfolio.md"

def fetch_rss_feed():
    try:
        req = urllib.request.Request(FEED_URL, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            return response.read()
    except Exception as e:
        print(f"Error fetching Substack feed: {e}")
        return None

def clean_html(text):
    if not text:
        return ""
    # remove HTML tags
    text = re.sub(r'<[^>]+>', '', text)
    # unescape common XML entities
    text = text.replace('&nbsp;', ' ').replace('&amp;', '&').replace('&lt;', '<').replace('&gt;', '>').replace('&quot;', '"')
    return text.strip()

def parse_feed(feed_content):
    if not feed_content:
        return []
    
    root = ET.fromstring(feed_content)
    posts = []
    
    for item in root.findall(".//item"):
        title = item.find("title").text
        link = item.find("link").text
        # strip query parameters from link if any
        if '?' in link:
            link = link.split('?')[0]
        
        description_elem = item.find("description")
        description = clean_html(description_elem.text) if description_elem is not None else ""
        
        # Clean up double spaces or newlines
        description = re.sub(r'\s+', ' ', description)
        
        # Truncate description to first sentence or max 160 chars
        if len(description) > 160:
            first_period = description.find(". ")
            if first_period != -1 and first_period < 200:
                description = description[:first_period+1]
            else:
                description = description[:157] + "..."

        pub_date_str = item.find("pubDate").text
        dt = parsedate_to_datetime(pub_date_str)
        
        # format date as e.g. "July 16, 2026"
        day = dt.day
        month_name = dt.strftime("%B")
        year = dt.year
        formatted_date = f"{month_name} {day}, {year}"
        
        posts.append({
            "date": formatted_date,
            "datetime_obj": dt,
            "type": "blog",
            "title": title,
            "description": description,
            "url": link,
            "tags": ["Substack", "Writing"],
            "links": [
                {
                    "label": "Substack",
                    "href": link
                }
            ]
        })
    return posts

def sync():
    print("Checking Substack for new articles...")
    feed_content = fetch_rss_feed()
    if not feed_content:
        return False
        
    new_posts = parse_feed(feed_content)
    if not new_posts:
        return False
        
    changed = False
    
    # 1. Update _data/timeline.json
    if os.path.exists(TIMELINE_JSON_PATH):
        with open(TIMELINE_JSON_PATH, 'r', encoding='utf-8') as f:
            timeline = json.load(f)
    else:
        timeline = []
        
    existing_urls = {item.get("url") for item in timeline if item.get("url")}
    
    posts_to_add = [p for p in new_posts if p["url"] not in existing_urls]
    
    if posts_to_add:
        # Sort posts_to_add in ascending order by datetime_obj
        posts_to_add.sort(key=lambda x: x["datetime_obj"])
        
        for post in posts_to_add:
            # Clean up the datetime_obj key before inserting
            cleaned_post = {k: v for k, v in post.items() if k != "datetime_obj"}
            post_naive_dt = post["datetime_obj"].replace(tzinfo=None)
            
            # Find the correct insertion point to maintain ascending chronological order
            inserted = False
            for idx, item in enumerate(timeline):
                try:
                    item_dt = datetime.strptime(item["date"], "%B %d, %Y")
                except ValueError:
                    continue
                if post_naive_dt < item_dt:
                    timeline.insert(idx, cleaned_post)
                    inserted = True
                    break
            
            if not inserted:
                timeline.append(cleaned_post)
                
            print(f"Added new Substack article to timeline: {cleaned_post['title']}")
            changed = True
            
        with open(TIMELINE_JSON_PATH, 'w', encoding='utf-8') as f:
            json.dump(timeline, f, indent=2, ensure_ascii=False)
    else:
        print("No new Substack articles found to add to timeline.")
        
    # 2. Update D:\\Brain2\\Projects\\portfolio.md (Obsidian vault file)
    if os.path.exists(VAULT_PORTFOLIO_PATH):
        with open(VAULT_PORTFOLIO_PATH, 'r', encoding='utf-8') as f:
            vault_content = f.read()
            
        pattern = re.compile(r'(```json\s*\n)(.*?)(\n```)', re.DOTALL)
        match = pattern.search(vault_content)
        if match:
            try:
                vault_timeline = json.loads(match.group(2))
                existing_vault_urls = {item.get("url") for item in vault_timeline if item.get("url")}
                vault_posts_to_add = [p for p in new_posts if p["url"] not in existing_vault_urls]
                
                if vault_posts_to_add:
                    vault_posts_to_add.sort(key=lambda x: x["datetime_obj"])
                    for post in vault_posts_to_add:
                        cleaned_post = {k: v for k, v in post.items() if k != "datetime_obj"}
                        post_naive_dt = post["datetime_obj"].replace(tzinfo=None)
                        
                        inserted = False
                        for idx, item in enumerate(vault_timeline):
                            try:
                                item_dt = datetime.strptime(item["date"], "%B %d, %Y")
                            except ValueError:
                                continue
                            if post_naive_dt < item_dt:
                                vault_timeline.insert(idx, cleaned_post)
                                inserted = True
                                break
                        if not inserted:
                            vault_timeline.append(cleaned_post)
                            
                        print(f"Added new Substack article to vault: {cleaned_post['title']}")
                        changed = True
                        
                    new_json_str = json.dumps(vault_timeline, indent=2, ensure_ascii=False)
                    new_vault_content = vault_content[:match.start(2)] + new_json_str + vault_content[match.end(2):]
                    with open(VAULT_PORTFOLIO_PATH, 'w', encoding='utf-8') as f:
                        f.write(new_vault_content)
            except Exception as e:
                print(f"Error updating vault portfolio.md: {e}")
                
    return changed

if __name__ == "__main__":
    sync()
