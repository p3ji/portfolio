#!/usr/bin/env node

/**
 * sync-from-vault.js
 * Copies portfolio.md from Obsidian vault to portfolio repo _content/
 *
 * Usage: node _scripts/sync-from-vault.js
 */

const fs = require('fs');
const path = require('path');

const VAULT_SOURCE = 'H:\\My Drive\\Brain2\\Projects\\portfolio.md';
const REPO_DEST = path.join(__dirname, '..', '_content', 'portfolio.md');

// Ensure _content directory exists
const contentDir = path.dirname(REPO_DEST);
if (!fs.existsSync(contentDir)) {
  fs.mkdirSync(contentDir, { recursive: true });
  console.log(`✓ Created ${contentDir}`);
}

try {
  // Read from vault
  if (!fs.existsSync(VAULT_SOURCE)) {
    throw new Error(`Vault source not found: ${VAULT_SOURCE}`);
  }

  const content = fs.readFileSync(VAULT_SOURCE, 'utf8');

  // Write to repo
  fs.writeFileSync(REPO_DEST, content, 'utf8');
  console.log(`✓ Synced portfolio.md from vault to ${REPO_DEST}`);
  process.exit(0);
} catch (err) {
  console.error(`✗ Sync failed: ${err.message}`);
  process.exit(1);
}
