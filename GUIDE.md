# The Recruiter's Guide to Vibe Code Their First Project
### From zero to deployed, ready to share

**By Jamie Lyons** — Recruiter & TA Leader | Co-written with Luke Morton — Software Engineer

---

## Ignore the Noise — You're Not Behind

If LinkedIn is making you feel like you're already behind on AI — relax. You're not. The posts make it sound like everyone's building apps and automating their workflows, but the reality is most people are still just chatting to ChatGPT about dinner recipes. Only around 14% of UK adults even pay for an AI subscription. A fraction of those have tried vibe coding. And an even smaller fraction have actually deployed something live. This project takes a few hours — and by the end of it, you'll be in that tiny percentile of people who've actually built and shipped something with AI.

You're not late. You're early. And we're going to build something genuinely cool.

## Why Your CV Is the Perfect First Project

Every recruiter has a CV. Most of us hate ours. The format has barely changed since the 1950s — a flat document listing jobs in reverse order. It's awkward to write, boring to read, and impossible to show personality through. It sits in a folder until you're job hunting, gets reluctantly updated, and goes back in the folder. That's exactly what makes it the perfect first project — not to land a job, but as a low-pressure excuse to actually *learn* these tools by making something real out of something overdue a reinvention.

- **You already have the content.** No need to invent a project — your career data is right there.
- **Zero commercial risk.** No GDPR, no client data, no stakeholders. If it breaks, nobody cares.
- **It's a document you're fed up with.** Turning something boring into something you're proud of beats a to-do app tutorial.
- **You'll genuinely learn AI.** Prompting, iteration, where it's brilliant and where it falls over — by building, not reading LinkedIn posts.
- **It's surprisingly cathartic.** Structuring your career into data forces you to reflect on what you've actually done.
- **It's fun.** Watching a chat prompt turn into a live website in a few hours makes you want to build more.

The side effect is you'll stand out too — but that's the bonus. The real point is giving yourself permission to play. This guide takes you from zero to a deployed site. If you've used ChatGPT, you have enough AI experience to do this.

---

## What You'll End Up With

A live website (like [The New CV](https://github.com/R9JJAYL/The-New-CV)) — a single-page React app with:

- Tabbed navigation (Career / Projects / Personal)
- Animated stat counters
- Expandable role cards with achievements
- Project showcases with embedded demos
- Recommendations section
- Smooth scroll animations
- A warm, professional design

All hosted for free, updating automatically when you make changes.

---

## What It'll Cost

Let's be upfront:

| Tool | Cost | Notes |
|------|------|-------|
| **Claude.ai** (chat) | Free tier available | Used for initial prototype. Free plan works fine. |
| **Claude Code** (CLI) | **~$5–20/session** | This is the main cost. Claude Code uses API credits. A heavy building session can use $5–15. You can set spending limits. |
| **GitHub** | Free | Where your code lives. Free for public repos. |
| **Vercel** | Free | Hosts your site. Free tier is generous for personal projects. |
| **VS Code** | Free | Code editor (optional — Claude Code works in terminal). |

**The honest truth:** Claude Code is the only thing that'll cost you money. GitHub and Vercel are completely free for this kind of project. If you're careful with your prompting (more on that later), you can build the whole thing for under $20.

---

## Part 1: Create Your Prototype in Claude.ai

Before touching any code tools, start in regular Claude chat. This is where you'll design what your CV looks like.

### Step 1: Write Your Prompt

The trick is giving Claude enough context to build something good on the first try. A vague prompt gives you a vague result.

Here's an example prompt you can adapt:

> *"I'm a recruiter with 8 years of experience. I want to build an interactive digital CV as a single-page React app. Here's what I want:*
>
> *— A warm, professional design (think cream/terracotta tones, not corporate blue)*
> *— Three tabs: My Career, My Projects, My Personal Life*
> *— My Career should have: a headline with my name and title, a short summary paragraph, animated stats (e.g. '300+ career hires'), and expandable role cards for each position showing company, dates, my role context, and key achievements*
> *— My Projects should showcase 3-4 things I've built or led*
> *— My Personal Life should be light and human — hobbies, values, a bit of personality*
>
> *Here's my career data:*
> *[paste your roles, achievements, stats here]*
>
> *Build it as a single JSX component. Use inline styles (no CSS files). Include smooth animations and hover effects. Make it feel premium but approachable."*

### Tips for Better Prompts

- **Be specific about design.** "Warm tones" is better than "make it look nice." Give examples: "like a Notion page" or "cream background, terracotta accents."
- **Include your actual data.** Don't say "add my roles" — paste them in. The more real content Claude has, the better the output.
- **Specify the tech.** Saying "single JSX component with inline styles" avoids Claude splitting things across 10 files you'll struggle to manage.
- **Describe interactions.** "Expandable cards that reveal achievements on click" is better than "interactive role section."

### Step 2: Use the Artifact

Claude.ai will generate a React component as an artifact. You can preview it right there in the chat. Click through, check the layout, see if it feels right.

**This won't be perfect.** That's fine. The goal is a solid starting point — maybe 70% of what you want. You'll refine it later with Claude Code.

### Step 3: Iterate in Chat

Ask Claude to adjust things:

- *"Make the stat counters animate when they scroll into view"*
- *"Add a chevron arrow that shows when you hover over a role card"*
- *"The company pills should be smaller and more subtle"*

Get it to about 80% in chat before moving on. Each change in Claude Code costs API credits, so the more you nail in the free chat, the better.

### Step 4: Copy Your Code

Once you're happy with the prototype, copy the full JSX code from the artifact. You'll paste this into your project files shortly.

---

## Part 2: Set Up Your Tools

You need three things installed on your computer. If you've never done anything like this, don't panic — each step has one command or one download.

### Install Node.js

Node.js lets you run JavaScript on your computer (which is what React needs).

1. Go to [nodejs.org](https://nodejs.org)
2. Download the **LTS** version (the one that says "Recommended")
3. Run the installer, click Next through everything
4. Verify it worked — open your terminal and type:

```
node --version
```

You should see something like `v22.x.x`. If you do, you're good.

**What's a terminal?**
- **Mac:** Open the app called "Terminal" (search for it in Spotlight with Cmd+Space)
- **Windows:** Open "Command Prompt" or "PowerShell" (search in Start menu)

### Install Claude Code

Claude Code is a command-line tool that lets Claude directly edit your project files, run your dev server, and see what your site looks like — all from your terminal.

```
npm install -g @anthropic-ai/claude-code
```

Then authenticate:

```
claude
```

It'll open a browser window to log in with your Anthropic account. Follow the prompts to connect.

**Important:** Claude Code uses API credits. You'll want to set up a spending limit at [console.anthropic.com](https://console.anthropic.com) so you don't get surprised. Start with a $20 limit — that's plenty for this project.

### Install Git

Git tracks changes to your code (like "save points" in a video game). You'll need it to push your code to GitHub.

- **Mac:** It's probably already installed. Type `git --version` in terminal. If it asks to install Xcode tools, say yes.
- **Windows:** Download from [git-scm.com](https://git-scm.com), run the installer with default settings.

### Create a GitHub Account

Go to [github.com](https://github.com) and sign up. It's free. This is where your code will live online.

---

## Part 3: Create Your Project

### Step 1: Scaffold with Vite

Vite is the tool that bundles your React code into a website. Run this in your terminal:

```
npm create vite@latest my-cv -- --template react
```

This creates a folder called `my-cv` with everything set up. Now:

```
cd my-cv
npm install
```

### Step 2: Paste Your Prototype

Remember the code you copied from Claude.ai? Now it's time to use it.

1. Open the file `src/App.jsx` in any text editor (or VS Code if you installed it)
2. Delete everything in it
3. Paste your Claude-generated component
4. Make sure the file exports your component as default, e.g.:

```jsx
export default function RecruiterCV() {
  // ... your component code
}
```

### Step 3: Check It Works

Start the dev server:

```
npm run dev
```

Open the URL it shows (usually `http://localhost:5173`) in your browser. You should see your CV. It might have issues — that's what Part 4 is for.

---

## Part 4: Refine with Claude Code

This is where the magic happens. Claude Code can see your files, edit them, run your dev server, and even take screenshots to check its own work.

### Start Claude Code

In your terminal, navigate to your project folder and run:

```
cd my-cv
claude
```

You're now in an interactive session with Claude. It can see all your project files.

### How to Give Good Instructions

Be specific and visual. Instead of:

> *"Make it look better"*

Say:

> *"The role cards look flat. Add a subtle border, a hover effect that lifts the card slightly, and a warm box-shadow on hover. Keep the cream/terracotta colour scheme."*

Instead of:

> *"Fix the layout"*

Say:

> *"The stat counters should be in a 4-column grid on desktop. On mobile they should stack to 2 columns. Add some spacing between them."*

### Using Previews

Claude Code has a built-in preview system that's a game-changer for design work. When you start your dev server through Claude Code, it can:

- Take screenshots of your site and see exactly what you see
- Inspect specific CSS values (colours, fonts, spacing) directly
- Click buttons and scroll the page to test interactions
- Check mobile layouts by resizing the viewport

This means Claude can edit your code, check the result, and fix issues — all without you having to describe what went wrong. Just say:

> *"Start the dev server and take a screenshot. Then fix anything that looks off."*

### Select Element: Point at What You Want to Change

This is the feature that makes design iteration feel like magic. Claude Code's preview has a **select element** tool — you can literally point at something on the page and say what you want changed about it.

Instead of trying to describe which element you mean in words ("the third box in the stats section, the one with the border..."), you just:

1. Ask Claude to take a screenshot of your site
2. Point at the element you want to change (Claude can identify it from coordinates or descriptions)
3. Tell it what to do: *"make this text bigger"*, *"change this background to cream"*, *"add more padding here"*

This is incredibly useful when you don't know CSS or design terminology. You don't need to say "increase the font-size to 16px and add 12px of padding-bottom." You can just say:

> *"This heading feels cramped. Give it more breathing room and make it slightly larger."*

Claude will inspect the element, figure out the current styles, and make sensible adjustments. It's the closest thing to pointing at your screen and saying "fix that bit."

### Design Without Knowing Design

You don't need to know what looks good — you just need to know what *doesn't* look right. Some prompts that work well:

- *"Something feels off about the spacing on these cards. Can you check the screenshot and tighten it up?"*
- *"The colours feel too cold. Make it warmer — think cream, terracotta, soft browns."*
- *"This section looks flat and boring. Add some depth — maybe subtle shadows or a background tint."*
- *"It looks good on desktop but check what it looks like on mobile and fix anything that's broken."*
- *"The role cards need more visual hierarchy. The title should feel more important than the description."*

You're art-directing, not coding. Tell Claude what *feels* wrong and let it figure out the CSS. That's the whole point.

### Check It on Mobile and Desktop

Your CV will get shared as a link — and people will open it on their phone as often as their laptop. Claude Code's preview can resize the viewport to simulate different devices, so you can check both without leaving your terminal.

> *"Resize the preview to mobile and take a screenshot. Fix anything that's broken or hard to read."*

Then switch back:

> *"Now check desktop. Make sure the layout uses the full width properly."*

Things that commonly break on mobile: multi-column grids squashing together, text overflowing its container, buttons too small to tap, and horizontal scrolling where there shouldn't be any. Claude will spot and fix these if you ask it to check.

### Go Wild: Try Something Ridiculous

Here's where it gets fun. You've been making sensible refinements — now try something completely daft.

Ask Claude Code:

> *"Retheme my entire CV to look like it belongs on the Nike website. Use their colour scheme, fonts, and visual style. Here's their site for reference: nike.com"*

Sit back and watch. In about 60 seconds, your warm cream CV will transform into a bold, black-and-white, swoosh-energy version of itself. It'll look completely different. It might look amazing. It might look absurd. Either way, you'll get a visceral sense of just how capable and flexible this is.

Now here's the important bit — undoing it:

> *"That was fun but undo all of that. Take it back to how it was before."*

And just like that, it's back. If you committed before the experiment (which you should — see Part 5), you've always got that save point to return to. This is the safety net that makes experimentation free.

Try it with any brand you like — Spotify, Apple, your own company. The point isn't to keep the result. The point is to see that the AI can completely reshape your project in seconds, and you can always walk it back. Once that clicks, you stop being precious about your code and start being creative with it. That's when vibe coding gets really fun.

### Common Refinements You'll Want

Here are specific prompts that worked well during the build of the example CV:

- *"Add scroll-triggered animations so elements fade in as you scroll down"*
- *"Make the role cards expandable — click to show achievements, click again to collapse"*
- *"Add a tabbed navigation at the top that switches between Career, Projects, and Personal"*
- *"Add a connector line between the role cards so it looks like a timeline"*
- *"The header area of each card should have a subtle grey background to separate it from the body"*

### Watch Your Spend

Each back-and-forth with Claude Code uses API credits. Some tips:

- **Batch your requests.** Instead of 5 separate messages asking for 5 small changes, combine them into one: *"Make these changes: 1) increase font to 13px, 2) add hover shadow, 3) remove the skill pills, 4) rename 'Work history' to 'Work experience'."*
- **Be precise.** Vague instructions lead to Claude trying things, checking, adjusting — that's more API calls. Specific instructions get it right faster.
- **Use Claude.ai for design decisions.** If you're not sure what you want, brainstorm in the free chat first. Only use Claude Code when you know what change you need made.

---

## Part 5: Version Control with Git

### What Is Version Control?

Think of Git as an unlimited undo system for your entire project. Every time you "commit," you're saving a snapshot. If you mess something up, you can always go back.

**Key terms:**
- **Repository (repo):** Your project folder, tracked by Git
- **Commit:** A saved snapshot with a description of what changed
- **Push:** Uploading your commits to GitHub
- **Branch:** A separate line of work (you probably won't need this yet)

### Step 1: Initialize Git

In your project folder:

```
git init
git add .
git commit -m "Initial commit: my digital CV"
```

### Step 2: Create a GitHub Repository

1. Go to [github.com](https://github.com) and click the **+** button → **New repository**
2. Name it something like `my-digital-cv`
3. Keep it **Public** (needed for free Vercel hosting)
4. **Don't** add a README or .gitignore (you already have these)
5. Click **Create repository**

GitHub will show you commands. Run these:

```
git remote add origin https://github.com/YOUR-USERNAME/my-digital-cv.git
git branch -M main
git push -u origin main
```

### Step 3: Making Changes Going Forward

Every time you make changes you're happy with:

```
git add .
git commit -m "Short description of what changed"
git push
```

**Claude Code and Git:** When you're using Claude Code, you can ask it to commit for you. It'll show you what's changed and ask you to approve the commit message before doing anything. This is safe — Claude Code won't push to GitHub without your explicit permission.

### What to Approve vs. What to Be Careful With

When Claude Code suggests actions, here's a quick guide:

| Action | Risk Level | Notes |
|--------|-----------|-------|
| Editing files | Low | This is what it's for. Always reviewable. |
| Running dev server | Low | Just starts a local preview. |
| `git add` + `git commit` | Low | Saves a snapshot. Easily undone. |
| `git push` | Medium | Sends code to GitHub. Confirm you're happy first. |
| Installing packages (`npm install ...`) | Medium | Adds dependencies. Check what it's installing. |
| Deleting files | Medium | Make sure you've committed first. |
| `git push --force` | **High** | Can overwrite history. Almost never needed. |
| Anything with `rm -rf` | **High** | Permanent deletion. Ask why. |

**Rule of thumb:** If Claude Code asks to do something you don't understand, say no and ask it to explain. It won't be offended.

---

## Part 6: Deploy to Vercel

This is the exciting bit — making your CV live on the internet.

### Step 1: Sign Up for Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **Sign Up**
3. Choose **Continue with GitHub** (this connects your accounts)

### Step 2: Import Your Project

1. Once logged in, click **Add New → Project**
2. You'll see your GitHub repos listed. Find `my-digital-cv` and click **Import**
3. Vercel will auto-detect that it's a Vite project
4. Leave all the default settings as they are
5. Click **Deploy**

Wait about 60 seconds. That's it. Your CV is live.

Vercel will give you a URL like `my-digital-cv.vercel.app`. That's your live site. Share it anywhere.

### Step 3: Automatic Deployments

Here's the best part: every time you push to GitHub, Vercel automatically rebuilds and deploys your site. The workflow becomes:

1. Make changes with Claude Code
2. Commit and push to GitHub
3. Vercel deploys automatically in ~60 seconds
4. Your live site is updated

No servers to manage. No deployment scripts. Just push and it's live.

### Custom Domain (Optional)

If you own a domain (e.g., `jamielyons.com`), you can connect it in Vercel's project settings under **Domains**. Vercel handles SSL certificates automatically. This costs whatever your domain registration is (usually ~$10/year) but the hosting itself stays free.

---

## Part 7: Common Mistakes & How to Avoid Them

These are lessons from building the example project. Learn from them so you don't have to learn the hard way.

### 1. Being Too Vague with Claude

**Bad:** *"Make the design better."*
**Good:** *"Add a 1px border in #EDE9E3 to the role cards, increase the border-radius to 10px, and add a subtle box-shadow on hover: 0 8px 28px rgba(196,112,75,0.13)."*

The more specific you are, the fewer iterations (and API credits) you'll burn.

### 2. Not Committing Often Enough

Commit after every change that works. If you make 10 changes and something breaks, you'll wish you could go back to change 7. With Git, you can — but only if you committed at change 7.

A good rhythm: make a change → check it works → commit → move on.

### 3. Trying to Do Too Much at Once

Don't ask Claude Code to "build the whole CV" in one go. Break it into pieces:
- First get the layout working
- Then add the data
- Then add animations
- Then polish the design

Each piece is easier to review and fix.

### 4. Ignoring the Preview

Claude Code can take screenshots and check its own work. If you notice something looks wrong, tell it to screenshot and fix it. Don't try to describe visual bugs in words when Claude can literally see the page.

### 5. Over-Engineering

You're building a personal CV, not a SaaS product. You don't need:
- A database
- User authentication
- A backend server
- TypeScript (plain JavaScript is fine)
- 10 different files (one component file works great)

Keep it simple. One React component with inline styles is perfectly fine for this. The example CV is a single 850-line file and it works beautifully.

### 6. Forgetting to Set a Spending Limit

Set your API spending limit at [console.anthropic.com](https://console.anthropic.com) *before* you start building. Start with $20. You can always increase it later. Getting a surprise bill is not fun.

### 7. Not Checking Mobile

Your CV will probably be viewed on phones. Periodically ask Claude Code to check the mobile layout. Most things work fine, but grids and side-by-side layouts often need adjusting for small screens.

---

## Quick Reference: The Full Workflow

Here's the entire process at a glance:

```
1. DESIGN      → Claude.ai chat (free) → get a prototype artifact
2. SCAFFOLD    → npm create vite@latest my-cv -- --template react
3. PASTE       → Copy prototype into src/App.jsx
4. REFINE      → claude (Claude Code) → iterate on design & features
5. COMMIT      → git add . && git commit -m "description"
6. PUSH        → git push
7. DEPLOY      → Connect GitHub to Vercel → automatic deploys
8. ITERATE     → Repeat steps 4-6 as needed
```

---

## Honourable Mentions: Things Worth Knowing

These didn't fit neatly into the build steps, but they're worth knowing about once you're up and running.

### CLAUDE.md — Give Claude a Memory

Every time you start a new Claude Code session, Claude doesn't remember what you told it last time. It reads your files, but it doesn't know your preferences, your design decisions, or the context behind your project.

That's what a `CLAUDE.md` file is for. Drop one in the root of your project and Claude will read it at the start of every session. Think of it as a brief for Claude — persistent instructions that carry over between conversations.

For a CV project, yours might look something like:

```
# Project context
This is a personal digital CV built with React + Vite.
Single-page app, one main component in src/RecruiterCV.jsx.

# Design
- Warm colour palette: cream (#FAF9F7), terracotta (#C4704B)
- Georgia for body text, Helvetica Neue for UI elements
- Inline styles only — no CSS files
- Subtle animations, nothing flashy

# Preferences
- Keep everything in one file — don't split into components
- British English spelling
- Commit messages should be concise, present tense
```

This saves you repeating yourself every session. Instead of explaining the colour scheme for the fifth time, Claude just reads the file and knows.

### Skills — Reusable Slash Commands

Claude Code supports **skills** — custom slash commands you can install or create. They're like saved prompts that run specific workflows.

For example, you could have a `/commit` skill that stages changes, writes a commit message in your preferred style, and pushes to GitHub. Or a `/check-mobile` skill that resizes the preview, takes a screenshot, and reports back.

You don't need these to build your CV — they're a rabbit hole for later. But if you find yourself repeating the same instructions over and over, that's a sign something could be a skill. You can browse community skills or write your own once you're comfortable.

### Markdown Files (.md)

You'll see `.md` files everywhere in code projects — `README.md`, `CLAUDE.md`, this guide started as one. Markdown is a simple way to write formatted text using plain characters:

```
# Heading
## Smaller heading
**Bold text**
*Italic text*
- Bullet point
[Link text](https://url.com)
`inline code`
```

GitHub renders markdown files beautifully, so your `README.md` becomes the front page of your project. It's worth writing a decent one — even just a few lines explaining what the project is and linking to the live site. It's the first thing anyone sees if they find your repo.

---

## Glossary

If you hit a term you don't know:

| Term | What It Means |
|------|--------------|
| **React** | A JavaScript library for building user interfaces. Your CV is a React app. |
| **JSX** | A way to write HTML-like code inside JavaScript. It's what React components are made of. |
| **Vite** | A build tool that bundles your code and runs a development server. Think of it as the engine. |
| **Node.js** | JavaScript runtime for your computer. Needed to run Vite and other tools. |
| **npm** | Node Package Manager. Installs libraries and runs scripts. Comes with Node.js. |
| **Git** | Version control system. Tracks changes to your files like unlimited undo. |
| **GitHub** | A website that hosts Git repositories. Where your code lives online. |
| **Vercel** | A hosting platform. Takes your GitHub code and makes it a live website. |
| **Component** | A reusable piece of UI. Your whole CV might be one component. |
| **Inline styles** | CSS written directly in your JavaScript, rather than in a separate .css file. |
| **Dev server** | A local web server that shows your site while you're building it. |
| **Deploy** | Making your code available on the internet as a live website. |
| **CLI** | Command Line Interface. A text-based way to interact with tools (like Claude Code). |
| **API credits** | What Claude Code charges. Each message/action uses some credits. |
| **HMR** | Hot Module Replacement. When you save a file, the browser updates instantly without refreshing. |

---

## What's Next?

Once your CV is live, you've got options:

- **Add a custom domain** — Buy a cheap domain and point it at your Vercel project
- **Add more sections** — Blog posts, case studies, testimonials
- **Build something else** — A sourcing tool, a job board, a hiring dashboard. The skills transfer directly
- **Share your journey** — Write about what you built on LinkedIn. Recruiters building things gets attention

The whole point is that you've now got a working mental model of how AI-assisted development works. You've gone from prompt to prototype to production. That's not a small thing.

Good luck building.

---

*Built with [Claude](https://claude.ai) and [Claude Code](https://claude.ai/claude-code) | Hosted on [Vercel](https://vercel.com) | Source on [GitHub](https://github.com/R9JJAYL/The-New-CV)*
