# Eunoia Research Council: Modular Research Assistant Prompt Manager

## Overview
Eunoia Research Council is a modular, version-controlled prompt management system for AI-powered research assistants. It enables the creation, editing, and orchestration of specialized research agents (interviewers, synthesizers, opportunity mappers, etc.) using structured, versioned prompts. This system is designed for UX research, market research, and design discovery workflows, supporting reproducibility, auditability, and iterative improvement.

## How to Run

1. **Create and activate a Python 3.11 virtual environment:**
   ```sh
   python3.11 -m venv venv
   source venv/bin/activate
   ```

2. **Install dependencies:**
   ```sh
   pip install -r requirements.txt
   ```

3. **Set up your `.env` file** (see `.env.example` for structure).

4. **Start the backend:**
   ```sh
   python run_langchain_prompt_manager.py
   ```

5. **Open the UI:**
   - Prompt List: `http://127.0.0.1:5025/prompts/`
   - Prompt View: `http://127.0.0.1:5025/prompts/view/<prompt_id>`
   - Prompt Edit: `http://127.0.0.1:5025/prompts/edit/<prompt_id>`
   - Character Debut Tool: `http://127.0.0.1:5025/static/debug_character_test.html`
   - API Health: `http://127.0.0.1:5025/api/health`

## Troubleshooting
- If you see "port in use" errors, run `lsof -i :5025` and kill the process.
- If the UI says "cannot connect," make sure the backend is running and the ports match.
- Check logs for errors.
- Use the API health route to validate system status.

## Case Study: Building a Modular Research Assistant Prompt Management System

<article class="case-study">
  <!-- Hero Section -->
  <section id="hero" class="hero-section">
    <div class="hero-content">
      <h1>Project Title: Modular Research Assistant Prompt Management</h1>
      <p class="tagline">Enabling scalable, auditable, and collaborative AI research workflows</p>
      <ul class="key-metrics">
        <li>Prompt versioning ↑ 100%</li>
        <li>Research agent onboarding time ↓ 60%</li>
        <li>Timeline: 6-week discovery + 10-week build & iteration</li>
      </ul>
    </div>
  </section>

  <!-- Context & Business Problem -->
  <section id="context" class="section-context">
    <h2>Context & Business Problem</h2>
    <p><strong>Background:</strong> Modern research teams increasingly rely on AI agents for interviewing, synthesis, and insight generation. However, managing the lifecycle of prompts and chaining specialized agents remains a challenge.</p>
    <p><strong>Business Problem:</strong> Existing tools lack structured prompt management, version control, and reproducibility. Manual coordination across tools leads to errors, lost context, and inconsistent research outcomes.</p>
    <p><strong>Success Metrics:</strong> Number of reusable prompt modules, reduction in agent onboarding time, auditability of research sessions.</p>
    <p><strong>Role & Team:</strong> Lead AI Research Engineer; 4-person cross-functional team.</p>
    <p><strong>Timeline:</strong> Discovery (6w), Sprints (10w).</p>
  </section>

  <!-- Discovery Phase -->
  <section id="discovery" class="section-discovery">
    <h2>Discovery Phase</h2>
    <section id="week0" class="subsection">
      <h3>Week 0: Kickoff & Discovery Planning</h3>
      <p>Goals: Map current research workflows, identify pain points in prompt management, and define requirements for modularity and chaining.</p>
    </section>
    <section id="stakeholder-interviews" class="subsection">
      <h3>Stakeholder Interviews & Ambition Statement</h3>
      <p>Interviewed UX researchers, data scientists, and product managers. Main themes: need for prompt versioning, agent chaining, and audit trails.</p>
      <blockquote class="ambition-statement">
        "Ambition Statement: Enable research teams to orchestrate modular AI agents with traceable, versioned prompts for every research session."
      </blockquote>
    </section>
  </section>

  <!-- Personas & Recruitment -->
  <section id="personas" class="section-personas">
    <h2>Defining Target Personas & Recruitment</h2>
    <p>Segments: Research Ops, Lead Researchers, AI Engineers. Key attributes: value reproducibility, need for collaboration, frequent prompt iteration.</p>
  </section>

  <!-- Field Research -->
  <section id="field-research" class="section-research">
    <h2>Field Research</h2>
    <section id="contextual-inquiry" class="subsection">
      <h3>Contextual Inquiries</h3>
      <p>Shadowed research teams using legacy tools. Documented workflow breakdowns and prompt handoff failures.</p>
    </section>
    <section id="interviews" class="subsection">
      <h3>Individual & Group Interviews</h3>
      <p>Key findings: prompt drift, lack of audit trails, and difficulty onboarding new agents.</p>
    </section>
  </section>

  <!-- Synthesis -->
  <section id="synthesis" class="section-synthesis">
    <h2>Synthesis: Modular Prompts & Agent Chaining</h2>
    <section id="persona-cards" class="subsection">
      <h3>Persona Creation</h3>
      <p>Developed archetypes for prompt authors, agent orchestrators, and research ops.</p>
    </section>
    <section id="journey-maps" class="subsection">
      <h3>Journey Mapping</h3>
      <p>Mapped the end-to-end workflow from prompt creation to agent chaining and research output.</p>
    </section>
  </section>

  <!-- Opportunity Identification -->
  <section id="opportunities" class="section-opportunities">
    <h2>Opportunity Identification & Prioritization</h2>
    <section id="debrief-workshop" class="subsection">
      <h3>Discovery Debrief Workshop</h3>
      <p>Ran workshops to prioritize features: prompt forking, lifecycle management, chaining validation, and feedback scoring.</p>
    </section>
    <section id="ideation" class="subsection">
      <h3>Ideation: Modular Prompt System</h3>
      <p>Sketched system architecture for prompt repository, agent orchestration, chaining, and feedback modules.</p>
    </section>
    <section id="prioritization" class="subsection">
      <h3>Prioritization Matrix (Effort vs Impact)</h3>
      <p>Quick wins: prompt versioning and audit logs. Strategic bets: chaining and feedback engine.</p>
    </section>
  </section>

  <!-- Implementation Planning -->
  <section id="implementation" class="section-implementation">
    <h2>From Opportunities to Implementation</h2>
    <section id="epics-stories" class="subsection">
      <h3>Epics & User Stories</h3>
      <p>Backlog included: prompt CRUD, versioning, agent chaining, feedback capture, and audit trail UI.</p>
    </section>
    <section id="design-sprints" class="subsection">
      <h3>Design & Prototyping Sprints</h3>
      <p>Iterative sprints delivered working prompt manager, chaining UI, and feedback dashboard.</p>
    </section>
  </section>

  <!-- Outcome & Impact -->
  <section id="outcome" class="section-outcome">
    <h2>Outcome & Impact</h2>
    <section id="final-solution" class="subsection">
      <h3>Final Solution Overview</h3>
      <p>Launched Eunoia Research Council with modular prompt management, agent chaining, and auditability. Enabled scalable, reproducible research workflows.</p>
    </section>
    <section id="metrics" class="subsection">
      <h3>Quantitative Results</h3>
      <ul>
        <li>Prompt versioning ↑ 100%</li>
        <li>Agent onboarding time ↓ 60%</li>
        <li>Research reproducibility ↑ 80%</li>
      </ul>
    </section>
    <section id="qualitative-feedback" class="subsection">
      <h3>Qualitative Feedback</h3>
      <blockquote>"The modular prompt manager made it easy to experiment, iterate, and scale our research agents."</blockquote>
    </section>
  </section>

  <!-- Reflections & Next Steps -->
  <section id="reflections" class="section-reflections">
    <h2>Reflections & Learnings</h2>
    <h3>What Went Well</h3>
    <ul>
      <li>Prompt versioning and audit logs enabled safe experimentation.</li>
      <li>Agent chaining improved research throughput and insight quality.</li>
    </ul>
    <h3>Challenges & Mitigations</h3>
    <ul>
      <li>Initial complexity in chaining logic—solved with clear JSON handoff formats.</li>
      <li>Feedback engine required iterative tuning for actionable insights.</li>
    </ul>
    <h3>Next Steps</h3>
    <ul>
      <li>Integrate authentication and user roles.</li>
      <li>Expand chaining to support more agent types.</li>
      <li>Monitor prompt performance and iterate on feedback engine.</li>
    </ul>
  </section>
</article>

---

**This directory is a known-good, working version. Use it as your base for Eunoia's research assistant prompt management features!** 