#!/usr/bin/env python3
"""
Syncs Digital Brain node stats from ~/Brain2 or portfolio's brain_stats_history.json
into visualportfolio/brain_stats_history.json and updates index.html.
"""
import os
import glob
import json
import re
from datetime import datetime, timedelta

VAULT_PATH = os.environ.get("BRAIN_VAULT_PATH") or os.path.expanduser("~/Brain2")
PORTFOLIO_PATH = os.path.expanduser("~/Documents/Projects/portfolio")
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
HISTORY_PATH = os.path.join(BASE_DIR, "brain_stats_history.json")
INDEX_PATH = os.path.join(BASE_DIR, "index.html")

now = datetime.now()
today_str = now.strftime("%Y-%m-%d")

# 1. Count nodes from vault if exists
total_nodes = None
if os.path.exists(VAULT_PATH):
    md_files = glob.glob(os.path.join(VAULT_PATH, "**", "*.md"), recursive=True)
    total_nodes = len(md_files)

# 2. Load existing history
history = {}
if os.path.exists(HISTORY_PATH):
    try:
        with open(HISTORY_PATH, "r", encoding="utf-8") as f:
            history = json.load(f)
    except Exception:
        history = {}

# Fallback to portfolio's history if needed
portfolio_history_path = os.path.join(PORTFOLIO_PATH, "brain_stats_history.json")
if os.path.exists(portfolio_history_path):
    try:
        with open(portfolio_history_path, "r", encoding="utf-8") as f:
            p_history = json.load(f)
            for k, v in p_history.items():
                if k not in history:
                    history[k] = v
    except Exception:
        pass

if total_nodes is None:
    if history:
        dates = sorted(history.keys())
        total_nodes = history[dates[-1]]
    else:
        total_nodes = 562

history[today_str] = total_nodes

with open(HISTORY_PATH, "w", encoding="utf-8") as f:
    json.dump(history, f, indent=2)

# 3. Calculate 7-day change
dates = sorted(history.keys())
target_date_7d = (now - timedelta(days=7)).strftime("%Y-%m-%d")
count_7d = history.get(target_date_7d)
if count_7d is None:
    for d in reversed(dates):
        if d <= target_date_7d:
            count_7d = history[d]
            break
if count_7d is None and len(dates) > 1:
    count_7d = history[dates[0]]

diff_7d = (total_nodes - count_7d) if count_7d is not None else 0
diff_str = f"+{diff_7d}" if diff_7d >= 0 else f"{diff_7d}"

print(f"Digital Brain: {total_nodes} nodes ({diff_str} this week)")

# 4. Update index.html
if os.path.exists(INDEX_PATH):
    with open(INDEX_PATH, "r", encoding="utf-8") as f:
        html = f.read()

    html = re.sub(
        r'(<span class="pkg-node-count">)\d+(</span>)',
        rf'\g<1>{total_nodes}\g<2>',
        html
    )
    html = re.sub(
        r'(<b class="pkg-node-count">)\d+(</b>)',
        rf'\g<1>{total_nodes}\g<2>',
        html
    )
    html = re.sub(
        r'(<span class="pkg-week-diff">)[^<]+(</span>)',
        rf'\g<1>{diff_str}\g<2>',
        html
    )
    with open(INDEX_PATH, "w", encoding="utf-8") as f:
        f.write(html)
    print("Updated index.html with latest Digital Brain stats.")
