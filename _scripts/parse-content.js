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
 * Parse timeline entries from JSON code block under "### Timeline Data"
 */
function parseTimeline(content) {
  const sectionStart = content.indexOf('### Timeline Data');
  if (sectionStart === -1) return [];

  const afterMarker = content.substring(sectionStart);
  const blockMatch = afterMarker.match(/```json\s*([\s\S]*?)```/);
  if (!blockMatch) return [];

  try {
    return JSON.parse(blockMatch[1].trim());
  } catch (e) {
    console.error('✗ JSON parse error in timeline data:', e.message);
    return [];
  }
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
