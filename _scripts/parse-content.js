#!/usr/bin/env node

/**
 * parse-content.js
 * Parses _content/portfolio.md → JSON files in _data/
 *
 * Outputs:
 * - _data/timeline.json (timeline entries array)
 * - _data/sections.json (hero, approach, workflow content)
 *
 * Usage: node _scripts/parse-content.js
 */

const fs = require('fs');
const path = require('path');

const CONTENT_SOURCE = path.join(__dirname, '..', '_content', 'portfolio.md');
const DATA_DIR = path.join(__dirname, '..', '_data');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

/**
 * Parse timeline entries from YAML-like format
 * Format:
 * - date: "..."
 *   type: "..."
 *   title: "..."
 *   description: "..."
 *   tags: [...]
 *   links:
 *     - label: "..."
 *       href: "..."
 */
function parseTimeline(content) {
  const entries = [];

  // Find "## 📅 TIMELINE ENTRIES" section
  const timelineStart = content.indexOf('## 📅 TIMELINE ENTRIES');
  if (timelineStart === -1) return [];

  // Extract content from timeline section to next ## header or end of file
  const timelineSection = content.substring(timelineStart);
  const nextHeaderMatch = timelineSection.match(/\n## /);
  const timelineContent = nextHeaderMatch
    ? timelineSection.substring(0, nextHeaderMatch.index)
    : timelineSection;

  // Split by "- date:" to get individual entries
  const entryMatches = timelineContent.split(/\n- date:/);

  for (let i = 1; i < entryMatches.length; i++) {
    const entryText = '- date:' + entryMatches[i];
    const entry = {};

    // Parse each field
    const dateMatch = entryText.match(/- date:\s*"([^"]*)"/);
    if (dateMatch) entry.date = dateMatch[1];

    const typeMatch = entryText.match(/type:\s*"([^"]*)"/);
    if (typeMatch) entry.type = typeMatch[1];

    const titleMatch = entryText.match(/title:\s*"([^"]*)"/);
    if (titleMatch) entry.title = titleMatch[1];

    const descMatch = entryText.match(/description:\s*"([^"]*)"/);
    if (descMatch) entry.description = descMatch[1];

    // Parse tags array
    const tagsMatch = entryText.match(/tags:\s*\[(.*?)\]/);
    if (tagsMatch) {
      entry.tags = tagsMatch[1]
        .split(',')
        .map(t => t.trim().replace(/^["']|["']$/g, ''))
        .filter(t => t);
    }

    // Parse links array
    const linksMatch = entryText.match(/links:\s*([\s\S]*?)(?=\n### |\n- date:|$)/);
    if (linksMatch) {
      const links = [];
      const linkLines = linksMatch[1].split('\n');
      let currentLink = null;

      for (const line of linkLines) {
        const labelMatch = line.match(/label:\s*"([^"]*)"/);
        const hrefMatch = line.match(/href:\s*"([^"]*)"/);

        if (labelMatch && hrefMatch) {
          links.push({
            label: labelMatch[1],
            href: hrefMatch[1]
          });
        }
      }

      if (links.length > 0) entry.links = links;
    }

    // Only add if we have at least date and type
    if (entry.date && entry.type) {
      entries.push(entry);
    }
  }

  return entries;
}

/**
 * Extract text sections from markdown
 */
function extractSections(content) {
  const sections = {};

  // Extract "My Approach" section
  const approachMatch = content.match(/### My Approach\n([\s\S]*?)(?=###|---)/);
  if (approachMatch) {
    sections.approach = approachMatch[1].trim();
  }

  // Extract "My Workflow" section
  const workflowMatch = content.match(/### My Workflow\n([\s\S]*?)(?=###|---)/);
  if (workflowMatch) {
    sections.workflow = workflowMatch[1].trim();
  }

  // Extract hero tagline
  const heroMatch = content.match(/\*\*tagline:\*\*\s*([^\n]+)/);
  if (heroMatch) {
    sections.heroTagline = heroMatch[1].trim();
  }

  return sections;
}

// Main
try {
  if (!fs.existsSync(CONTENT_SOURCE)) {
    throw new Error(`Content source not found: ${CONTENT_SOURCE}`);
  }

  const content = fs.readFileSync(CONTENT_SOURCE, 'utf8');

  // Parse sections
  const sections = extractSections(content);

  // Parse timeline
  const timeline = parseTimeline(content);

  // Write timeline.json
  fs.writeFileSync(
    path.join(DATA_DIR, 'timeline.json'),
    JSON.stringify(timeline, null, 2),
    'utf8'
  );
  console.log(`✓ Parsed ${timeline.length} timeline entries → _data/timeline.json`);

  // Write sections.json
  fs.writeFileSync(
    path.join(DATA_DIR, 'sections.json'),
    JSON.stringify(sections, null, 2),
    'utf8'
  );
  console.log(`✓ Parsed sections → _data/sections.json`);

  process.exit(0);
} catch (err) {
  console.error(`✗ Parse failed: ${err.message}`);
  console.error(err.stack);
  process.exit(1);
}
