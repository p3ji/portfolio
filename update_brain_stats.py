import os
import glob
import json
from datetime import datetime, timedelta
import re

# Auto-sync Substack articles
try:
    import sync_substack
    sync_substack.sync()
except Exception as e:
    print("Warning: Could not sync Substack feed:", e)

vault_path = r"D:\Brain2"
html_path = "journey.html"
history_path = "brain_stats_history.json"

# 1. Count current nodes
md_files = glob.glob(os.path.join(vault_path, "**", "*.md"), recursive=True)
total_nodes = len(md_files)

now = datetime.now()
today_str = now.strftime("%Y-%m-%d")

# 2. Load or initialize history
if os.path.exists(history_path):
    with open(history_path, 'r', encoding='utf-8') as f:
        # Check if file is completely empty (sometimes echo '...' > file leaves extra bytes or is malformed)
        content = f.read().strip()
        if content:
            # Clean up single quotes from echo command if they exist
            if content.startswith("'") and content.endswith("'"):
                content = content[1:-1]
            try:
                history = json.loads(content)
            except json.JSONDecodeError:
                history = {}
        else:
            history = {}
else:
    history = {}

# 3. Save today's count
history[today_str] = total_nodes

with open(history_path, 'w', encoding='utf-8') as f:
    json.dump(history, f, indent=2)

# 4. Calculate net changes
def get_historical_count(days_ago):
    target_date = (now - timedelta(days=days_ago)).strftime("%Y-%m-%d")
    return history.get(target_date)

count_1d = get_historical_count(1)
count_7d = get_historical_count(7)
count_30d = get_historical_count(30)

def format_change(old_count, current_count):
    if old_count is None:
        return None
    net_change = current_count - old_count
    if net_change > 0:
        return f'<span style="color: var(--accent-primary);">+{net_change}</span>'
    elif net_change < 0:
        return f'<span style="color: #ef4444;">{net_change}</span>'
    else:
        return f'<span>0</span>'

additions = []

change_1d = format_change(count_1d, total_nodes)
if change_1d:
    additions.append(f"{change_1d} since 1 day ago")

change_7d = format_change(count_7d, total_nodes)
if change_7d:
    additions.append(f"{change_7d} since 1 week ago")

change_30d = format_change(count_30d, total_nodes)
if change_30d:
    additions.append(f"{change_30d} since 1 month ago")

if additions:
    stats_html = f"Currently: {total_nodes} nodes (" + ", ".join(additions) + ")"
else:
    stats_html = f"Currently: {total_nodes} nodes"

# 5. Inject into HTML
with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

# Build bullets HTML
bullets_html = ""
change_1d = format_change(count_1d, total_nodes)
if change_1d:
    bullets_html += f"\n        <li>{change_1d} since 1 day ago</li>"
change_7d = format_change(count_7d, total_nodes)
if change_7d:
    bullets_html += f"\n        <li>{change_7d} since 1 week ago</li>"
bullets_html += "\n      "

pattern = re.compile(r'(<ul id="brain-bullets"[^>]*>)(.*?)(</ul>)', re.DOTALL)

def repl(match):
    return f"{match.group(1)}{bullets_html}{match.group(3)}"

html = pattern.sub(repl, html)

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(html)

print("Updated journey.html with new stats:", stats_html)

# 5b. Update index.html (Last GitHub Update date & project counts from _data/projects.json)
index_html_path = "index.html"
projects_json_path = "_data/projects.json"

if os.path.exists(index_html_path):
    with open(index_html_path, 'r', encoding='utf-8') as f:
        index_html = f.read()

    # Update Last GitHub Update Date
    date_str = f"{now.strftime('%B')} {now.day}, {now.year}"
    index_html = re.sub(
        r'(<span class="visual-stat-value" id="github-update-date">\s*)[^<]+?(\s*</span>)',
        rf'\g<1>{date_str}\g<2>',
        index_html,
        flags=re.IGNORECASE
    )

    # Update stats counts if projects.json exists
    if os.path.exists(projects_json_path):
        try:
            with open(projects_json_path, 'r', encoding='utf-8') as f:
                projects_data = json.load(f)
            
            prototypes_count = sum(1 for p in projects_data if p.get('stage') == 'prototype')
            concepts_count = sum(1 for p in projects_data if p.get('stage') == 'concept')
            games_count = sum(1 for p in projects_data if p.get('stage') == 'game')

            index_html = re.sub(
                r'(<span class="stat-number">\s*)\d+(\s*</span>\s*<span class="stat-label">\s*Functional Prototypes\s*</span>)',
                rf'\g<1>{prototypes_count}\g<2>',
                index_html,
                flags=re.IGNORECASE
            )
            index_html = re.sub(
                r'(<span class="stat-number">\s*)\d+(\s*</span>\s*<span class="stat-label">\s*Concepts\s*</span>)',
                rf'\g<1>{concepts_count}\g<2>',
                index_html,
                flags=re.IGNORECASE
            )
            index_html = re.sub(
                r'(<span class="stat-number">\s*)\d+(\s*</span>\s*<span class="stat-label">\s*Games\s*</span>)',
                rf'\g<1>{games_count}\g<2>',
                index_html,
                flags=re.IGNORECASE
            )
        except Exception as e:
            print("Warning: Could not read projects.json for stats counts:", e)

    with open(index_html_path, 'w', encoding='utf-8') as f:
        f.write(index_html)
    print("Updated index.html with Last GitHub Update date and project counts.")

# 6. Commit and push changes to GitHub to rebuild the page and update the "Last GitHub Update" date
try:
    import subprocess
    # Check if there are changes to commit
    status_res = subprocess.run(["git", "status", "--porcelain"], capture_output=True, text=True, check=True)
    if status_res.stdout.strip():
        subprocess.run(["git", "add", html_path, history_path, "_data/timeline.json", index_html_path], check=True)
        subprocess.run(["git", "commit", "-m", "chore: update daily PKG node stats and sync timeline"], check=True)
        subprocess.run(["git", "push"], check=True)
        print("Successfully committed and pushed daily stats update to GitHub.")
    else:
        # Check if the branch is ahead (has unpushed commits)
        status_full = subprocess.run(["git", "status"], capture_output=True, text=True, check=True)
        if "ahead" in status_full.stdout:
            subprocess.run(["git", "push"], check=True)
            print("Successfully pushed pending commits to GitHub.")
        else:
            print("No changes to commit or push in portfolio repository.")
except Exception as e:
    print("Failed to commit and push daily stats update:", e)
