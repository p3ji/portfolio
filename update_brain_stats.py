import os
import glob
from datetime import datetime, timedelta
import re

vault_path = r"H:\My Drive\Brain2"
html_path = "index.html"

# Count nodes
md_files = glob.glob(os.path.join(vault_path, "**", "*.md"), recursive=True)
total_nodes = len(md_files)

now = datetime.now()
day_ago = now - timedelta(days=1)
week_ago = now - timedelta(days=7)
month_ago = now - timedelta(days=30)

# We use getmtime or getctime. Since CreationTime was used in PowerShell, let's use ctime (though on Windows it's creation time)
nodes_1d = 0
nodes_1w = 0
nodes_1m = 0

earliest_time = now

for f in md_files:
    ctime = datetime.fromtimestamp(os.path.getctime(f))
    if ctime < earliest_time:
        earliest_time = ctime
    
    if ctime >= day_ago:
        nodes_1d += 1
    if ctime >= week_ago:
        nodes_1w += 1
    if ctime >= month_ago:
        nodes_1m += 1

vault_age_days = (now - earliest_time).days

stats_str = f"Current nodes: {total_nodes}"
additions = []

def format_change(num):
    if num > 0:
        return f'<span style="color: var(--accent-primary);">+{num}</span>'
    elif num < 0:
        return f'<span style="color: #ef4444;">{num}</span>' # red
    else:
        return f'<span>0</span>'

# Only show if the vault has been around long enough
additions.append(f"{format_change(nodes_1d)} since 1 day ago")

if vault_age_days >= 7:
    additions.append(f"{format_change(nodes_1w)} since 1 week ago")

if vault_age_days >= 30:
    additions.append(f"{format_change(nodes_1m)} since 1 month ago")

stats_html = f"Current nodes of my PKG: {total_nodes} (" + ", ".join(additions) + ")"

with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

# We need to replace the old description logic
# Let's use a regex to find the digital brain description and replace it
# Look for: Applying the idea using... </p>
pattern = re.compile(r'(Applying the idea of using a personal knowledge graph \(PKG\) to drive and monitor agentic processes and workflows\.)(.*?)(</p>)', re.DOTALL)

def repl(match):
    return f"{match.group(1)} <br><br>{stats_html}\n          {match.group(3)}"

html = pattern.sub(repl, html)

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(html)

print("Updated index.html with new stats:", stats_html)
