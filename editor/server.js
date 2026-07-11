import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Paths to data files
const DATA_DIR = path.join(__dirname, '..', '_data');
const TIMELINE_FILE = path.join(DATA_DIR, 'timeline.json');
const SECTIONS_FILE = path.join(DATA_DIR, 'sections.json');
const PROJECTS_FILE = path.join(DATA_DIR, 'projects.json');

// --- Timeline Endpoints ---

app.get('/api/data/timeline', async (req, res) => {
  try {
    const data = await fs.readFile(TIMELINE_FILE, 'utf-8');
    res.json(JSON.parse(data));
  } catch (error) {
    console.error('Error reading timeline.json:', error);
    res.status(500).json({ error: 'Failed to read timeline data' });
  }
});

app.post('/api/data/timeline', async (req, res) => {
  try {
    const data = req.body;
    await fs.writeFile(TIMELINE_FILE, JSON.stringify(data, null, 2));
    res.json({ success: true });
  } catch (error) {
    console.error('Error writing timeline.json:', error);
    res.status(500).json({ error: 'Failed to write timeline data' });
  }
});

// --- Sections Endpoints ---

app.get('/api/data/sections', async (req, res) => {
  try {
    const data = await fs.readFile(SECTIONS_FILE, 'utf-8');
    res.json(JSON.parse(data));
  } catch (error) {
    console.error('Error reading sections.json:', error);
    res.status(500).json({ error: 'Failed to read sections data' });
  }
});

app.post('/api/data/sections', async (req, res) => {
  try {
    const data = req.body;
    await fs.writeFile(SECTIONS_FILE, JSON.stringify(data, null, 2));
    res.json({ success: true });
  } catch (error) {
    console.error('Error writing sections.json:', error);
    res.status(500).json({ error: 'Failed to write sections data' });
  }
});

// --- Projects Endpoints ---

app.get('/api/data/projects', async (req, res) => {
  try {
    const data = await fs.readFile(PROJECTS_FILE, 'utf-8');
    res.json(JSON.parse(data));
  } catch (error) {
    console.error('Error reading projects.json:', error);
    res.status(500).json({ error: 'Failed to read projects data' });
  }
});

app.post('/api/data/projects', async (req, res) => {
  try {
    const data = req.body;
    await fs.writeFile(PROJECTS_FILE, JSON.stringify(data, null, 2));
    res.json({ success: true });
  } catch (error) {
    console.error('Error writing projects.json:', error);
    res.status(500).json({ error: 'Failed to write projects data' });
  }
});

// --- Diff API ---
async function getHeadFile(file) {
  try {
    const { stdout } = await execAsync(`git show HEAD:_data/${file}`, { cwd: path.join(__dirname, '..') });
    return JSON.parse(stdout);
  } catch (e) {
    return null;
  }
}

app.get('/api/diff', async (req, res) => {
  try {
    let changes = [];
    
    // Timeline
    const currentTimelineStr = await fs.readFile(TIMELINE_FILE, 'utf-8').catch(() => '[]');
    const currentTimeline = JSON.parse(currentTimelineStr);
    const headTimeline = await getHeadFile('timeline.json') || [];
    
    const headTimelineMap = new Map(headTimeline.map(e => [e.title, e]));
    currentTimeline.forEach(entry => {
      const headEntry = headTimelineMap.get(entry.title);
      if (!headEntry) {
        changes.push(`Added timeline entry: "${entry.title}"`);
      } else if (JSON.stringify(entry) !== JSON.stringify(headEntry)) {
        changes.push(`Modified timeline entry: "${entry.title}"`);
      }
      headTimelineMap.delete(entry.title);
    });
    headTimelineMap.forEach(entry => changes.push(`Deleted timeline entry: "${entry.title}"`));

    // Projects
    const currentProjectsStr = await fs.readFile(PROJECTS_FILE, 'utf-8').catch(() => '[]');
    const currentProjects = JSON.parse(currentProjectsStr);
    const headProjects = await getHeadFile('projects.json') || [];
    
    const headProjectsMap = new Map(headProjects.map(e => [e.id, e]));
    currentProjects.forEach(entry => {
      const headEntry = headProjectsMap.get(entry.id);
      if (!headEntry) {
        changes.push(`Added project: "${entry.title}"`);
      } else if (JSON.stringify(entry) !== JSON.stringify(headEntry)) {
        changes.push(`Modified project: "${entry.title}"`);
      }
      headProjectsMap.delete(entry.id);
    });
    headProjectsMap.forEach(entry => changes.push(`Deleted project: "${entry.title}"`));

    // Sections
    const currentSectionsStr = await fs.readFile(SECTIONS_FILE, 'utf-8').catch(() => '{}');
    const currentSections = JSON.parse(currentSectionsStr);
    const headSections = await getHeadFile('sections.json') || {};
    
    Object.keys(currentSections).forEach(key => {
      if (headSections[key] === undefined) {
        changes.push(`Added section: "${key}"`);
      } else if (currentSections[key] !== headSections[key]) {
        changes.push(`Modified section: "${key}"`);
      }
      delete headSections[key];
    });
    Object.keys(headSections).forEach(key => changes.push(`Deleted section: "${key}"`));
    
    res.json({ changes });
  } catch (error) {
    console.error('Error generating diff:', error);
    res.status(500).json({ error: 'Failed to generate diff' });
  }
});

// --- Publish Endpoint ---

app.post('/api/publish', async (req, res) => {
  try {
    const repoDir = path.join(__dirname, '..');
    
    // --- Update index.html metrics before publishing ---
    const projectsStr = await fs.readFile(PROJECTS_FILE, 'utf-8');
    const projects = JSON.parse(projectsStr);
    const prototypesCount = projects.filter(p => p.stage === 'prototype').length;
    const conceptsCount = projects.filter(p => p.stage === 'concept').length;
    const gamesCount = projects.filter(p => p.stage === 'game').length;

    const indexPath = path.join(repoDir, 'index.html');
    let indexHtml = await fs.readFile(indexPath, 'utf-8');

    // Update prototypes
    indexHtml = indexHtml.replace(
      /(<span class="stat-number">\s*)\d+(\s*<\/span>\s*<span class="stat-label">\s*Functional Prototypes\s*<\/span>)/i,
      `$1${prototypesCount}$2`
    );

    // Update concepts
    indexHtml = indexHtml.replace(
      /(<span class="stat-number">\s*)\d+(\s*<\/span>\s*<span class="stat-label">\s*Concepts\s*<\/span>)/i,
      `$1${conceptsCount}$2`
    );

    // Update games
    indexHtml = indexHtml.replace(
      /(<span class="stat-number">\s*)\d+(\s*<\/span>\s*<span class="stat-label">\s*Games\s*<\/span>)/i,
      `$1${gamesCount}$2`
    );

    // Update last GitHub update date to today (so it's hardcoded and fast)
    const dateObj = new Date();
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    const dateStr = dateObj.toLocaleDateString('en-US', options);
    indexHtml = indexHtml.replace(
      /(<span class="visual-stat-value" id="github-update-date">\s*)[^<]+?(\s*<\/span>)/i,
      `$1${dateStr}$2`
    );

    await fs.writeFile(indexPath, indexHtml);
    // ----------------------------------------------------

    // Add _data directory and index.html
    await execAsync('git add _data/ index.html', { cwd: repoDir });
    
    // Commit the changes
    // Note: if there's nothing to commit, git throws an error which we catch
    await execAsync('git commit -m "CMS: Published content updates"', { cwd: repoDir });
    
    // Push to GitHub
    await execAsync('git push', { cwd: repoDir });
    
    res.json({ success: true });
  } catch (error) {
    // Check if the error is just because there's nothing to commit
    if (error.stdout && error.stdout.includes('nothing to commit')) {
      return res.json({ success: true, message: 'No changes to publish' });
    }
    
    console.error('Git publish error:', error);
    res.status(500).json({ error: 'Failed to publish to GitHub', details: error.message });
  }
});

app.listen(port, () => {
  console.log(`Editor backend running at http://localhost:${port}`);
});
