---
tags:
  - project
hub: "[[Sabbatical Hub]]"
status: active
last-updated: "2026-06-27"
local-path: "C:\\Users\\pushp\\Documents\\Projects\\portfolio"
git-remote: "https://github.com/p3ji/portfolio.git"
tech-stack:
  - HTML/CSS/JavaScript
  - Markdown (content)
---

# 💻 portfolio

**Master source of truth for portfolio.p3ji.github.io content.**

See also: `C:\Users\pushp\Documents\Projects\portfolio\AGENTS.md` (dev context)

---

## 📋 Original Requirements

Personal developer portfolio website showcasing educational leave, sabbatical projects (AI + games), and demonstrating hands-on AI learning through built products.

## ➕ Additional Requirements

- Incorporate "1-year journey to get good at using AI" positioning as core service element
- Dynamic node count stats (Brain2 vault size, pulled from `update_brain_stats.py`)
- All content editable from vault (this file)
- Sync mechanism: vault → repo → live

## ♾️ Evergreen Requirements

*Last refreshed: 2026-06-27*

- Homepage reflects **Core Philosophy:** deep exploration of AI as a normal technology, build fluency in using & architecting business solutions
- **Learning by Doing:** showcase examples of (1) building products with AI, (2) building products with AI integration, (3) evolving workflow with agentic loops, (4) new organizational models
- **Study & Reflection:** demonstrate deep dives into AI stack (data/metadata, product design, foundational AI engineering, responsible AI)
- Portfolio link back to active projects in `Projects Hub` so visitors see what's being built

---

## 📄 CONTENT SECTIONS

### Hero Section

**tagline:** Hi, I'm Peter. I'm a sociologist, economist, and manager (on leave) exploring how AI transforms workflows, product and organizational design. Here are some concepts and prototypes I've built during my career break.

**badge:** Exploration • Prototypes

---

### My Approach

#### Dedicated deep exploration of AI

As a sociologist, economist, and on-leave manager in the public service, I am drawn to the enormous transformational potential of AI — as a [normal technology](https://knightcolumbia.org/content/ai-as-normal-technology). Throughout my [career](https://www.linkedin.com/in/petershijiao/), I have been involved in various projects studying the trends and impacts of technology on society and the economy from a statistical and research perspective. For the next year, I will be shifting my focus towards deep exploration of the capabilities, possibilities, and risks of this quickly evolving technology. I want to be able to not only understand the ecosystem that enables this technology, but also to be able to fluently use and architect realistic business solutions with it.

#### ...through learning by doing

Over the next year (and probably longer!), I will be building functional prototypes, experimenting with new workflows, and thinking deeply about how AI can transform organizational strategy and operations. My work will likely fall along several buckets:

a) building products with AI (e.g. old-school app)
b) products with an AI integration component (e.g. LLM API integration or something more local)
c) evolving my workflow to incorporate more agentic loops that change how I work
d) abstracting from these experiments to imagine different organizational models and processes

#### ...as well as study and reflection

As a non-IT professional, there is a lot for me to learn about the technical ecosystem in which AI technologies are embedded. To do this, I am diving deep into the end-to-end AI stack, including but not limited to:

a) data and metadata management (e.g. cloud solutions, local solutions)
b) AI product design
c) foundational AI engineering concepts (see: Chip Huyen's "AI Engineering")
d) responsible AI (e.g. security, ethics)
e) others to add...

#### ...in order to avoid hype and act more effectively

I want to find that middle-ground where I can contribute ambitious, innovative ideas and solutions that are well-thought-out and grounded in technical understanding.

---

### My Workflow

*This diagram maps how I am currently experimenting and developing prototypes. At some point, I may want to separate out the tech stuff from the conceptual layers. However, for now, this offers an idea of the autonomous vs. manual aspects of the decision-making, execution, and delivery parts of my workflow.*

[Mermaid diagram embedded in journey.html — see AGENTS.md for updates]

---

## 📅 TIMELINE ENTRIES

Edit entries below. The parser reads the JSON block under `### Timeline Data` directly.
Types: `study` | `milestone` | `prototype` | `concept` | `blog`
Link labels: `GitHub`, `Live`, or any short label (icon inferred from label).

---

### Timeline Data

```json
[
  {
    "date": "Spring 2026",
    "type": "study",
    "title": "Exploring Foundations",
    "description": "Self-study before the official experimentation phase begins. Working through Chip Huyen's AI Engineering, exploring the LLM ecosystem beyond AI chatbots, and completing Coursera courses.",
    "tags": ["Coursera", "AI Engineering", "Self-study", "LLMs"]
  },
  {
    "date": "June 1, 2026",
    "type": "milestone",
    "title": "Journey Officially Begins",
    "description": "Started a formal one-year exploration dedicated to deep, hands-on experimentation with AI — its capabilities, architectures, and potential for transforming organizations and workflows.",
    "tags": ["Career Break"]
  },
  {
    "date": "Early June 2026",
    "type": "study",
    "title": "Getting the Stack Running",
    "description": "First weeks of hands-on experimentation: set up local dev environment, learned Git workflows, deployed first projects to GitHub Pages, Vercel, and Netlify.",
    "tags": ["Git", "Deployment", "Dev Setup", "HTML/CSS/JS"]
  },
  {
    "date": "June 10, 2026",
    "type": "prototype",
    "title": "Canadian AI Jobs Report",
    "description": "An interactive dashboard analyzing the economic value of Canadian college majors — mapping CIP programs to NOC occupations with AI disruption risk scores, median salaries, and 10-year job growth metrics.",
    "tags": ["Economy", "Data Viz"],
    "links": [
      { "label": "GitHub", "href": "https://github.com/p3ji/occupation_ai" },
      { "label": "Live", "href": "https://occupation-ai.vercel.app/" }
    ]
  },
  {
    "date": "June 11, 2026",
    "type": "prototype",
    "title": "Ottawa Recreation Discovery",
    "description": "A visual discovery tool and interactive map for parents to find municipal recreation facilities and summer camps in Ottawa by proximity, amenities, and geographical sector.",
    "tags": ["Personal Tools", "Maps"],
    "links": [
      { "label": "Live", "href": "https://p3ji-p3ji.hf.space/" }
    ]
  },
  {
    "date": "June 12–13, 2026",
    "type": "prototype",
    "title": "Policy AI Assistants — NIHB + WFA",
    "description": "Two RAG-based policy chatbots grounded in real government documentation: one navigating the Non-Insured Health Benefits program, the other advising on Federal Public Service Work Force Adjustment guidelines.",
    "tags": ["Health", "Work Tools", "RAG", "LLM"],
    "links": [
      { "label": "NIHB", "href": "https://nihbwrap.netlify.app/" },
      { "label": "WFA", "href": "https://wfa-blond.vercel.app/" }
    ]
  },
  {
    "date": "June 17, 2026",
    "type": "milestone",
    "title": "Portfolio Site Launched",
    "description": "Built and deployed this portfolio to document the journey publicly — complete with live GitHub stats, a digital brain expansion tracker, a projects grid with filtering, and a workflow architecture diagram.",
    "links": [
      { "label": "GitHub", "href": "https://github.com/p3ji/portfolio" }
    ]
  },
  {
    "date": "June 18, 2026",
    "type": "prototype",
    "title": "Gmail Cleaner CLI",
    "description": "A Python command-line tool to clean, organize, and label Gmail inboxes via IMAP.",
    "tags": ["Personal Tools", "Python", "CLI"],
    "links": [
      { "label": "GitHub", "href": "https://github.com/p3ji/gmailcleaner" }
    ]
  },
  {
    "date": "June 20, 2026",
    "type": "prototype",
    "title": "Drug Utilization Dashboard + Retirement Calculator",
    "description": "Two analytical tools in quick succession: a monitoring dashboard for drug utilization data in Canada, and a Defined Benefit pension early retirement calculator mapping portfolio and pension timelines.",
    "tags": ["Health", "Economy", "Dashboards"],
    "links": [
      { "label": "Drug", "href": "https://p3ji.github.io/drug/" },
      { "label": "Finance", "href": "https://p3ji.github.io/financialtool/" }
    ]
  },
  {
    "date": "June 21–22, 2026",
    "type": "prototype",
    "title": "Games Sprint — Debate, n-1, WordString",
    "description": "A rapid games sprint building three web apps: a debate facilitator for kids, an anagram word-unscrambling game, and a cozy sewing-themed word puzzle. Complete with high scores synced to Supabase.",
    "tags": ["Games", "PWA", "Mobile", "Web Audio"],
    "links": [
      { "label": "Debate", "href": "https://p3ji.github.io/debate_game/" },
      { "label": "n-1", "href": "https://n-1game.vercel.app/" },
      { "label": "WordString", "href": "https://p3ji.github.io/wordstring/" }
    ]
  },
  {
    "date": "June 24, 2026",
    "type": "prototype",
    "title": "Mobile Survey Builder — Now Live",
    "description": "A DDI-compliant, mobile-first survey design and EQ authoring tool — featuring re-usable metadata components, nested rosters, complex skip logic, bilingual support, and WCAG accessibility.",
    "tags": ["Work Tools", "DDI", "Mobile", "Accessibility"],
    "links": [
      { "label": "GitHub", "href": "https://github.com/p3ji/mobilesurvey" },
      { "label": "Live", "href": "https://p3ji.github.io/mobilesurvey/" }
    ]
  },
  {
    "date": "June 26, 2026",
    "type": "prototype",
    "title": "Modular Survey Tools — Analytics & Collection Dashboard",
    "description": "Significant expansion: rebranded to Modular Survey Tools and added several new modular tools — Collector (manage surveys and monitor real-time KPIs), Searcher (discover metadata), Migrator (import external surveys into Designer), and the first video in the Training Hub.",
    "tags": ["Work Tools", "Analytics", "Dashboards", "Paradata"],
    "links": [
      { "label": "GitHub", "href": "https://github.com/p3ji/mobilesurvey" },
      { "label": "Live", "href": "https://p3ji.github.io/mobilesurvey/" }
    ]
  }
]
```

---

## 🚀 Next Steps

- [ ] Create sync script: vault → repo `_content/portfolio.md`
- [ ] Create parse script: markdown → JSON in `_data/`
- [ ] Update journey.html and index.html to read from JSON
- [ ] Test content updates flow end-to-end

## 🐛 Observed Issues

*(None logged yet)*

---

## 📝 Log

- (2026-06-27) Created comprehensive vault-synced content structure
- (2026-06-26) Added Modular Survey Tools analytics update to timeline
- (2026-06-24) Created AI Journey page with timeline
- (2026-06-19) Pivot sabbatical positioning toward deep AI exploration + hands-on learning
