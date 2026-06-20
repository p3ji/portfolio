import os
import glob
import json
from datetime import datetime, timedelta
import re

vault_path = r"H:\My Drive\Brain2"
html_path = "index.html"
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
    stats_html = f"Current nodes of my PKG: {total_nodes} (" + ", ".join(additions) + ")"
else:
    stats_html = f"Current nodes of my PKG: {total_nodes}"

# 5. Inject into HTML
with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

pattern = re.compile(r'(Applying the idea of using a personal knowledge graph \(PKG\) to drive and monitor agentic processes and workflows\.)(.*?)(</p>)', re.DOTALL)

def repl(match):
    return f"{match.group(1)} <br><br>{stats_html}\n          {match.group(3)}"

html = pattern.sub(repl, html)

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(html)

print("Updated index.html with new stats:", stats_html)
