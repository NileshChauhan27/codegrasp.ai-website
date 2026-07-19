# DAMS 3-Minute Video Walkthrough Script
### Target Audience: Microsoft Startup Credits Reviewers (High-Impact Walkthrough)

This script outlines the video clips to record in OBS Studio, fast-paced 3-minute timings, and exact text files for the AI Voiceover.

---

## 🎬 Video Overview & Timing Structure

| Section | Timing | Visual Action (OBS Studio Clips) | Narrative Theme |
| :--- | :--- | :--- | :--- |
| **Intro** | 0:00 - 0:30 | DAMS Web UI Dashboard (Dark Mode). Toggle between Kanban board, Research tab, and Safety Audits. | Introducing DAMS: local-first defensive context system for vibe-coding. |
| **Step 1** | 0:30 - 1:10 | VS Code terminal inside dev container: run `dams init` (choosing `CBM.md`). Show empty Kanban board, run `dams import-tasks tasks.json` and watch the board populate. | Project initialization, container isolation, and PRD task atomization. |
| **Step 2** | 1:10 - 1:50 | Click a task on the Kanban board (e.g. `TASK-003: Implement task filtering`), click **Generate Queries**. Redirect to the Research tab, showing the queries loaded in the textarea. | Grounding queries in PRD specs using LLM analysis. |
| **Step 3** | 1:50 - 2:30 | Click **🔥 Warm SQLite Cache**. Show the progress bar. Show a split-screen terminal of the background SQLite ledger database caching files and graph dependencies. | Chunkhound semantic search, Graphify depth-2 expansion, and O(1) SQLite caching. |
| **Step 4** | 2:30 - 3:00 | Click **Copy Prompt** on the task dashboard (running `dams next` & `dams recompile`). Switch to Claude Code / Cline. Paste prompt, show grep intercepted/blocked by shims, and run `git commit` running `dams check`. | Steered agent coding with search shims and safety gates. |

---

## 🎙️ AI Voiceover Script

### 1. Introduction: What is DAMS? (0:00 - 0:30)

**[Visual Action: Start on the DAMS Web UI Dashboard in Dark Mode. Scroll through the Kanban Board, click on the Research tab, showing the AST dependency tree column, and then the Safety Audits tab.]**

> **AI Voiceover:**
> "Deep vibe-coding with AI has revolutionized development, but it introduces a critical challenge: context decay. In long projects, agents write code they eventually forget, waste tokens on blind directory scans, and repeat past errors.
> 
> DAMS—the Defensive Agentic Memory System—solves this. Running completely local-first inside a Docker devcontainer, DAMS compiles architectural decisions, safety contracts, and regression traps into a dynamically updated context steering file, giving your AI agent structural eyes on the codebase. Let’s see it run from PRD to code."

---

### 2. Step 1: Initialize & Atomize PRD (0:30 - 1:10)

**[Visual Action: VS Code terminal: run `git init` and `dams init`, choosing `CBM.md`. Switch to empty Kanban board. Switch to terminal: run `dams import-tasks tasks.json`. Switch back to Kanban board to watch the cards load.]**

> **AI Voiceover:**
> "We initialize DAMS with the command `dams init`, choosing `CBM.md` as our context steering target. Because DAMS is containerized, all background services, local embeddings, and shims run in isolation, leaving your developer host system clean. 
> 
> Next, DAMS atomizes the PRD. Running `dams import-tasks` parses our requirements into granular task cards in our SQLite database, instantly populating the Kanban board. Each card contains exact specs, dependency links, and prompt templates."

---

### 3. Step 2: Generate Search Queries (1:10 - 1:50)

**[Visual Action: Open task modal in Dashboard, click 'Generate Queries'. Watch the UI redirect to the Code Research tab with queries pre-populated in the textarea.]**

> **AI Voiceover:**
> "Before writing code, we must locate the relevant codebase context. Clicking 'Generate Queries' on our task card triggers DAMS's query generation pipeline. 
> 
> The backend analyzes our task requirements, references the compiled `CBM.md` steering file, and outputs 10 targeted semantic queries. These are loaded into the Research tab and saved in `pending_queries.json` to ground our next step."

---

### 4. Step 3: Warm SQLite Cache (1:50 - 2:30)

**[Visual Action: Click the '🔥 Warm SQLite Cache' button. Show the progress bar. Split screen terminal displaying logs: `Warming dependency cache for TASK-003`, querying Chunkhound, and caching to database.]**

> **AI Voiceover:**
> "Now, we click 'Warm SQLite Cache'. DAMS executes our queries through a three-phase pipeline. 
> 
> First, it runs Chunkhound semantic search, saving relevant code blocks to a temporary research scratchpad. 
> 
> Second, DAMS extracts unique file paths from the search results and uses the Graphify knowledge graph to resolve depth-two AST dependency call chains. 
> 
> Finally, it caches these files directly into our SQLite ledger, providing O(1) file access and eliminating vector database retrieval latency."

---

### 5. Step 4: Agent Steering & Safety Gates (2:30 - 3:00)

**[Visual Action: Click 'Copy Prompt' in Dashboard modal. Switch to terminal running Claude Code / Cline. Paste prompt. Agent tries to run `grep -rn "filter"`. Terminal warns the agent and blocks it. Run `git commit` to show `dams check` safety check running.]**

> **AI Voiceover:**
> "Back on the dashboard, we click 'Copy Prompt'. This sets the active task priority, runs `dams recompile`, and copies the prompt to our clipboard. 
> 
> We paste the prompt to our AI coder. If the agent tries to run a raw, brute-force grep scan, DAMS's containerized search shims intercept the call, block it, and redirect the agent to the SQLite cache, saving over 70% in token costs. 
> 
> On commit, DAMS runs `dams check`, verifying our safety contracts before the code ships. DAMS gives vibe coders total control, and gives agents the defensive memory they need to build software reliably."
