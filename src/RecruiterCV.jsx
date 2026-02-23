import { useState, useEffect, useRef } from "react";
const TABS = ["My Career", "My Projects", "My Personal Life"];
const T = {
  bg: "#FAF9F7",
  card: "#FFFFFF",
  cardBorder: "#EDE9E3",
  text: "#2D2B28",
  textMid: "#6B6560",
  textLight: "#9C9590",
  textFaint: "#C4BEB8",
  accent: "#C4704B",
  accentLight: "#E8A47A",
  accentBg: "#FDF3ED",
  accentBorder: "#F0D4C3",
  green: "#5B8C6A",
  blue: "#5B7FA6",
  amber: "#B8863B",
  red: "#B85B5B",
  purple: "#8B6BAD",
  tagBg: "#F3F0EC",
  warm1: "#F5E6D3",
  warm2: "#E8D5C4",
};
const ROLES = [
  {
    title: "Head of Talent Acquisition",
    company: "Vantage Health",
    companyDesc: "Series B health-tech. £45m raise, 140 employees at hire. Operating in the £350bn global digital health market. Hiring across engineering, product, design, and commercial.",
    companyPills: ["£45m Series B", "Health-Tech", "140 Employees"],
    roleContext: "Hired to build and own the TA function from scratch, reporting directly to the CPO. Inherited zero processes, one agency relationship, and a hiring plan of 80+ roles across engineering, product, design, and GTM. Built the full recruitment infrastructure including ATS setup, interview frameworks, scorecards, and hiring manager training. Promoted to Head of TA after 10 months.",
    duration: "1y 5m",
    period: "Sep 2023 — Present",
    type: "In-House",
    color: T.blue,
    logo: "https://logo.clearbit.com/vantagehealth.com",
    logoFallback: "VH",
    highlights: [
      "Scaled company from 140 to 310 employees in 18 months with a 3-person TA team.",
      "Reduced average time-to-offer from 38 days to 19 days by redesigning the interview framework.",
      "Personally sourced and closed 12 senior/staff-level engineers after 6+ months of failed agency searches.",
      "Launched a referral programme generating 30% of all hires — highest in the company's history.",
      "Introduced structured scorecards across 18 hiring managers — 90% adoption within 6 weeks.",
      "Built real-time hiring dashboards in Google Sheets, replacing £16k/year in ATS analytics tooling.",
      "Negotiated 80+ offers with a 95% acceptance rate.",
    ],
    progression: "Senior TA Partner → Head of Talent Acquisition (promoted after 10 months)",
  },
  {
    title: "Senior Talent Partner",
    company: "Nexus Bank",
    companyDesc: "Series F digital bank. £4.5bn valuation, 2,500+ employees. 70% of headcount in engineering. FCA-regulated, UK and European markets.",
    companyPills: ["£4.5bn Series F", "Fintech", "2,500 Employees"],
    roleContext: "Embedded in the engineering org as the sole recruiter covering backend, platform, and infrastructure across 4 squads. Partnered with 11 hiring managers on role scoping, market mapping, and offer strategy. Managed the full cycle from sourcing through to close, with a focus on reducing time-to-offer and eliminating agency dependency entirely.",
    duration: "2y 8m",
    period: "Jan 2021 — Aug 2023",
    type: "In-House",
    color: T.green,
    logo: "https://logo.clearbit.com/nexusbank.com",
    logoFallback: "NB",
    highlights: [
      "Hired 75 engineers in 2.5 years — 65% sourced directly, zero through agencies.",
      "93% 12-month retention rate across all hires, beating the company average by 10 points.",
      "Eliminated agency dependency for the engineering org — saving an estimated £350k+ in fees.",
      "Designed and delivered the company's first internal sourcing bootcamp — trained 6 new recruiters.",
      "Led hiring for a brand new platform team from 0 to 14 engineers in 5 months.",
      "Rebuilt the candidate experience survey — NPS jumped from 64 to 86 company-wide.",
    ],
    progression: "Talent Partner → Senior Talent Partner (promoted after 12 months)",
    leaving: "Headhunted by Vantage Health to build their TA function from scratch.",
  },
  {
    title: "Embedded Senior Recruiter",
    company: "Harmon Search",
    companyDesc: "Boutique RPO and embedded recruitment provider, Shoreditch. 25 consultants. Series A to Series C clients across London. Engineering and product placements.",
    companyPills: ["Embedded RPO", "Series A-C Clients", "25 Employees"],
    roleContext: "Placed inside VC-backed startups as an extension of their internal TA teams, working on-site and operating as if in-house. Managed the full recruitment cycle for software engineering roles, from intake and sourcing through to offer negotiation. Built candidate pipelines, ran stakeholder calibration sessions, and trained junior consultants across multiple client accounts.",
    duration: "2y 10m",
    period: "Mar 2018 — Dec 2020",
    type: "Embedded RPO",
    color: T.amber,
    logo: "https://logo.clearbit.com/harmonsearch.com",
    logoFallback: "HS",
    highlights: [
      "Billed £480k+ over 2.5 years — top biller 7 out of 10 quarters.",
      "Placed 105+ candidates with a 92% retention rate at 12 months.",
      "Won 18 new client accounts through candidate referrals alone — zero cold outreach.",
      "Ran a 12-hire embedded project for a Series A fintech — completed 2 weeks ahead of schedule.",
      "Built a candidate community of 2,000+ engineers through events, dinners, and content.",
      "Mentored 3 junior consultants — all hit target within their first 6 months.",
    ],
    progression: "Consultant → Senior Consultant → offered Team Lead (declined to move in-house)",
    leaving: "Wanted to be part of the teams I was hiring for. Made the jump to in-house.",
  },
  {
    title: "Recruitment Consultant",
    company: "Sterling Recruitment",
    companyDesc: "Global recruitment firm, £1.5bn revenue. Technology division, London. 5,000+ employees across 30 countries.",
    companyPills: ["£1.5bn Revenue", "Global Agency", "5,000 Employees"],
    roleContext: "Graduate entry into high-volume agency recruitment, covering contract and permanent technology roles across the South East. 80+ calls a day from week one, managing the full cycle from business development and job qualification through to sourcing, interviewing, and closing. Learned the fundamentals of sales, negotiation, and candidate management at pace.",
    duration: "1y 8m",
    period: "Jul 2016 — Feb 2018",
    type: "Agency",
    color: T.red,
    logo: "https://logo.clearbit.com/sterlingrecruitment.com",
    logoFallback: "SR",
    highlights: [
      "Billed £190k in second year — 115% of target, up from 65% in year one.",
      "Fastest in the cohort to make a placement (19 days from desk start).",
      "Placed 45 candidates across contract and permanent roles.",
      "Built an early specialism in DevOps and cloud infrastructure before most agencies had a dedicated desk.",
    ],
    progression: "Trainee → Recruitment Consultant (promoted in 11 months — fastest in the division)",
    leaving: "Outgrew the big-firm model. Wanted a smaller team where I could own the full desk.",
  },
];
const RECOMMENDATIONS = [
  { name: "Priya Sharma", role: "VP Engineering, Vantage Health", text: "Phil pushed back on my job specs and was right every time. Helped me figure out what I actually needed, then found exactly those people.", relation: "Hiring manager @ Vantage Health" },
  { name: "Marcus Chen", role: "Staff Engineer, Nexus Bank", text: "Phil sent me two sentences about why I'd be a good fit, both specific to things on my profile nobody else had noticed. Three years later I'm still here.", relation: "Candidate @ Nexus Bank" },
  { name: "Tom Okafor", role: "CPO, Vantage Health", text: "Phil built a function, not just a pipeline. Designed the processes, trained hiring managers, hired 170 people. When he's not here the system still runs.", relation: "Manager @ Vantage Health" },
  { name: "Lucy Ward", role: "Recruitment Consultant, Harmon Search", text: "Phil trained me when I joined and he's the reason I'm still in recruitment. I hit target in my first 6 months because of how he set me up.", relation: "Direct report @ Harmon Search" },
];
const BUILD_TILES = [
  { category: "Agents", title: "Prospect Research Agent", desc: "Feed it a company URL. It scrapes careers pages, detects the ATS, maps hiring patterns, and returns a structured outreach brief.", type: "AI Agent", icon: "🔍", color: T.blue, url: "#", linkLabel: "Coming soon", tags: ["Claude Code", "Web Scraping", "Supabase", "Vercel"] },
  { category: "Agents", title: "CV Invaders", desc: "Agency vs in-house. 60 seconds. Protect the ATS from evil bots. Built for fun, shared for laughs.", type: "Arcade Game", icon: "👾", color: T.purple, url: "https://cv-invaders.vercel.app/", linkLabel: "Play", tags: ["Claude Code", "Supabase", "Vercel", "JavaScript", "React"] },
  { category: "Builds & Automation", title: "Why I Build Things", desc: "I learn by making. Most of what's here started as a problem I had at work that no tool quite solved. This CV included.", type: "Manifesto", icon: "🛠️", color: T.accent, url: "#", linkLabel: "", tags: ["Claude Code", "GitHub", "Vercel", "JavaScript"] },
  { category: "Builds & Automation", title: "KPI Tracker Rebuild", desc: "Took a broken spreadsheet and turned it into a proper tracking system. Daily, weekly, and individual views. 40% faster data entry.", type: "Automation", icon: "📊", color: T.green, modal: "sheets", linkLabel: "View project", tags: ["Process Redesign", "Google Sheets", "KPI Analysis", "Automation"] },
  { category: "Articles", title: "Investor Data Pack", desc: "SQL analysis on traffic, conversions, and growth to arm the C-suite for a fundraise pitch.", type: "Data Analysis", icon: "🧮", color: T.amber, modal: "sql", linkLabel: "View project", tags: ["SQL", "Data Analysis", "Investor Reporting", "CTR / CVR"] },
  { category: "Articles", title: "The Truth About D&I", desc: "What actually works in diversity hiring, what doesn't, and why most companies are getting it wrong.", type: "Long-form Article", icon: "✍️", color: T.blue, url: "https://www.linkedin.com/pulse/truth-diversity-inclusion-jamie-lyons/", linkLabel: "Read", tags: ["D&I", "LinkedIn", "Recruitment", "Opinion"] },
];
const STATS = [
  { value: 300, suffix: "+", label: "Career Hires", prefix: "" },
  { value: 19, suffix: "d", label: "Avg Time-to-Offer", prefix: "" },
  { value: 93, suffix: "%", label: "Retention Rate", prefix: "" },
  { value: "Series A - F", label: "Companies Scaled", isText: true },
];
function useInView(ref, threshold = 0.1) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return inView;
}
function AnimNum({ value, suffix, prefix, delay }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref);
  const done = useRef(false);
  useEffect(() => {
    if (!inView || done.current) return;
    done.current = true;
    const start = performance.now();
    setTimeout(() => {
      const tick = (now) => {
        const t = Math.min((now - start - delay) / 1000, 1);
        if (t < 0) { requestAnimationFrame(tick); return; }
        setCount(Math.round(value * (1 - Math.pow(1 - t, 3))));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay);
  }, [inView, value, delay]);
  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}
function SeriesAnim({ value, delay }) {
  const letters = ["A", "B", "C", "D", "E", "F"];
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref);
  const started = useRef(false);
  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    let i = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        if (i >= letters.length) { clearInterval(interval); setDone(true); return; }
        setIndex(i);
      }, 180);
    }, delay);
    return () => clearTimeout(timer);
  }, [inView, delay]);
  return <span ref={ref}>{done ? value : `Series ${letters[index]}`}</span>;
}
function RoleCard({ role, index, isLast }) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <div style={{ position: "relative" }}>
      {/* Card */}
      <div ref={ref} onClick={() => setOpen(!open)}
        onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
        style={{
        position: "relative", cursor: "pointer",
        borderRadius: 10, overflow: "hidden",
        border: `1px solid ${open ? T.accentBorder : hovered ? T.accent + "40" : T.cardBorder}`,
        transition: `all 0.4s ease ${index * 60}ms`,
        opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(18px)",
        boxShadow: open ? "0 4px 20px rgba(196,112,75,0.08)" : hovered ? "0 2px 12px rgba(0,0,0,0.06)" : "0 1px 4px rgba(0,0,0,0.03)",
      }}>
        {/* Grey header */}
        <div style={{ background: T.tagBg, padding: "12px 22px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, margin: 0, color: T.text, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>{role.title} <span style={{ color: T.textLight, fontWeight: 500 }}>@</span> <span style={{ color: T.textMid, fontWeight: 600 }}>{role.company}</span></h3>
          <div style={{ flexShrink: 0 }}>
            <span style={{ fontSize: 11, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", padding: "4px 10px", background: T.card, color: T.textLight, borderRadius: 6, border: `1px solid ${T.cardBorder}`, whiteSpace: "nowrap" }}>
              {role.period}{role.duration && ` (${role.duration})`}
            </span>
          </div>
        </div>
        {/* White body */}
        <div style={{ background: T.card, padding: "14px 22px 14px", position: "relative" }}>
          {role.roleContext && <p style={{ fontSize: 12, color: T.textMid, margin: "0 0 0", lineHeight: 1.55 }}><span style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: 10, color: T.accent, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px" }}>My role: </span>{role.roleContext}</p>}
          {/* Logo, pills, and see more row */}
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 10 }}>
            <div style={{
              width: 28, height: 28, borderRadius: 10,
              background: role.color + "08", border: `1px solid ${role.color}12`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 9, fontWeight: 800, color: role.color, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              overflow: "hidden", opacity: 0.7, flexShrink: 0,
            }}>
              <img src={role.logo} alt={role.company}
                style={{ width: "100%", height: "100%", objectFit: "contain", padding: 3 }}
                onError={e => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }}
              />
              <span style={{ display: "none", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>{role.logoFallback}</span>
            </div>
            {role.companyPills && (
              <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                {role.companyPills.map((pill, i) => (
                  <span key={i} style={{ fontSize: 10, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", padding: "3px 7px", background: T.tagBg, color: T.textLight, borderRadius: 6, border: `1px solid ${T.cardBorder}`, whiteSpace: "nowrap" }}>{pill}</span>
                ))}
              </div>
            )}
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" style={{ marginLeft: "auto", flexShrink: 0, transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease, opacity 0.2s ease", opacity: hovered || open ? 1 : 0 }}>
              <path d="M1 1L8 8L15 1" stroke={T.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          {/* Expanded content */}
          <div style={{ maxHeight: open ? 800 : 0, overflow: "hidden", transition: "max-height 0.5s ease, opacity 0.35s ease", opacity: open ? 1 : 0 }}>
            <div style={{ paddingTop: 6, marginTop: 6 }}>
              <h4 style={{ fontSize: 10, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", color: T.accent, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 10, fontWeight: 700 }}>Achievements</h4>
              {role.highlights.map((h, i) => (
                <div key={i} style={{ fontSize: 13, color: T.textMid, lineHeight: 1.65, marginBottom: 8, paddingLeft: 14, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, top: 9, width: 5, height: 5, borderRadius: "50%", background: role.color, opacity: 0.45 }} />
                  {h}
                </div>
              ))}
              {role.clients && (
                <div style={{ marginTop: 10, padding: "8px 12px", background: T.tagBg, borderRadius: 10, fontSize: 11, color: T.textLight }}>
                  <span style={{ color: T.textFaint, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: 9, textTransform: "uppercase", letterSpacing: "0.5px" }}>Clients: </span>{role.clients}
                </div>
              )}
              {role.progression && (
                <div style={{ fontSize: 13, color: T.textMid, lineHeight: 1.65, marginBottom: 8, paddingLeft: 14, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, top: 9, width: 5, height: 5, borderRadius: "50%", background: role.color, opacity: 0.45 }} />
                  {role.progression}
                </div>
              )}
              {role.leaving && (
                <div style={{ marginTop: 8, fontSize: 11, color: T.textFaint, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontStyle: "italic" }}>Reason for leaving: {role.leaving}</div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Connector */}
      {!isLast && (
        <div style={{ display: "flex", justifyContent: "center", height: 28, margin: "4px 0" }}>
          <div style={{ width: 1, height: "100%", background: T.cardBorder }} />
        </div>
      )}
    </div>
  );
}
function SheetsModal({ onClose }) {
  const steps = [
    {
      num: "01",
      title: "The Problem",
      body: "KPI tracking was scattered across disconnected sheets with no consistency. Senior leads were spending 45+ minutes a week on admin just keeping numbers up to date. The team didn't fully understand how their KPIs were calculated, and there was no easy way to analyse individual or team performance at review time.",
      color: T.red,
    },
    {
      num: "02",
      title: "Sheet 1: Daily KPI Tracker",
      body: "A redesigned daily tracker with cleaner data entry, conditional formatting for instant visual feedback, and automated calculations. Removed manual steps, added error handling with IFERROR functions, and protected the structure so nobody could accidentally break formulas.",
      color: T.blue,
      embed: "https://docs.google.com/spreadsheets/d/12UYoobccjtrzmX9VEOjLgQRXTRxT5DqF53Tcoq6xgPc/preview?gid=586722786",
    },
    {
      num: "03",
      title: "Sheet 2: Weekly KPI Tracker",
      body: "A weekly rollup pulling directly from the daily sheet. Week-on-week comparisons, team-level summaries, and friendly competition between teams built in. Designed so leadership could get what they needed in seconds, not minutes.",
      color: T.green,
      embed: "https://docs.google.com/spreadsheets/d/1RHCckzmudOT8LLC4-JD13LPP3P84e2TD1u69RtysiUY/preview?gid=703124017",
    },
    {
      num: "04",
      title: "Sheet 3: Individual Performance",
      body: "A personal tracker for each team member showing their own numbers, targets, and progress. Built so 1:1s could focus on coaching, not 'let me find your stats'. Also used to support people during annual reviews with clear, data-backed performance summaries.",
      color: T.amber,
      embed: "https://docs.google.com/spreadsheets/d/1rfP_tJNh8LbF-j1aH9_0qBCXw05aR7iilbucGfGgMgM/preview?gid=1413052365",
    },
  ];
  const results = [
    { stat: "45+", label: "minutes saved per week for senior leads" },
    { stat: "15%+", label: "improvement in main KPI scores" },
    { stat: "2+ yrs", label: "sheets still in use after leaving" },
  ];
  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, zIndex: 100,
      background: "rgba(0,0,0,0.5)", backdropFilter: "blur(6px)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: 20, animation: "fadeIn 0.2s ease",
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: T.bg, borderRadius: 10, maxWidth: 640, width: "100%",
        maxHeight: "85vh", overflowY: "auto", padding: "32px 28px",
        border: `1px solid ${T.cardBorder}`, boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
      }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <span style={{ fontSize: 24 }}>📊</span>
              <span style={{ fontSize: 9, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", padding: "3px 8px", background: T.green + "12", color: T.green, borderRadius: 6, letterSpacing: "0.5px", textTransform: "uppercase", fontWeight: 600 }}>Process Improvement</span>
            </div>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: T.text, margin: 0, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>Google Sheets KPI Redesign</h2>
            <p style={{ fontSize: 12, color: T.textLight, marginTop: 4, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>TalentLoop · 2021</p>
          </div>
          <button onClick={onClose} style={{
            width: 32, height: 32, borderRadius: 10, border: `1px solid ${T.cardBorder}`,
            background: T.card, color: T.textLight, fontSize: 16, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>×</button>
        </div>
        {/* Result stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginBottom: 20 }}>
          {results.map((r, i) => (
            <div key={i} style={{ textAlign: "center", padding: "12px 8px", background: T.card, borderRadius: 10, border: `1px solid ${T.cardBorder}` }}>
              <div style={{ fontSize: 20, fontWeight: 800, color: T.accent, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>{r.stat}</div>
              <div style={{ fontSize: 9, color: T.textLight, marginTop: 2, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", textTransform: "uppercase", letterSpacing: "0.3px", lineHeight: 1.3 }}>{r.label}</div>
            </div>
          ))}
        </div>
        {/* Steps */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {steps.map((step, i) => (
            <div key={i} style={{
              padding: "16px 18px", background: T.card, border: `1px solid ${T.cardBorder}`,
              borderRadius: 10, borderLeft: `3px solid ${step.color}`,
              boxShadow: "0 1px 4px rgba(0,0,0,0.02)",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 5 }}>
                <span style={{ fontSize: 11, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", color: step.color, fontWeight: 700 }}>{step.num}</span>
                <span style={{ fontSize: 14, fontWeight: 700, color: T.text }}>{step.title}</span>
              </div>
              <p style={{ fontSize: 13, color: T.textMid, lineHeight: 1.65, margin: 0 }}>{step.body}</p>
              {step.embed && (
                <div style={{ marginTop: 10, borderRadius: 10, overflow: "hidden", border: `1px solid ${T.cardBorder}`, background: "#fff" }}>
                  <iframe
                    src={step.embed}
                    style={{ width: "100%", height: 200, border: "none", display: "block" }}
                    title={step.title}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Skills */}
        <div style={{ marginTop: 16, padding: "12px 16px", background: T.tagBg, borderRadius: 10 }}>
          <div style={{ fontSize: 9, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", color: T.textFaint, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 6 }}>Skills used</div>
          <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
            {["Process Automation", "Stakeholder Management", "Performance Analysis", "UI Design", "Conditional Formatting", "Sheet Protection", "IFERROR / Functions"].map(s => (
              <span key={s} style={{ padding: "3px 8px", borderRadius: 6, fontSize: 10, background: T.card, color: T.textMid, border: `1px solid ${T.cardBorder}` }}>{s}</span>
            ))}
          </div>
        </div>
        {/* Footer link */}
        <div style={{ marginTop: 16, textAlign: "center" }}>
          <a href="https://github.com/R9JJAYL/Google-Sheets-Process-Improvement" target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} style={{
            fontSize: 12, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", color: T.green, fontWeight: 600, textDecoration: "none",
          }}>
            Full breakdown on GitHub →
          </a>
        </div>
      </div>
    </div>
  );
}
function SQLModal({ onClose }) {
  const steps = [
    {
      num: "01",
      title: "The Brief",
      body: "The business was preparing for a round of fundraising and needed a clear picture of how the online side had performed over time. The C-suite needed data they could put in front of investors — not raw tables, but a story backed by numbers.",
      color: T.red,
    },
    {
      num: "02",
      title: "Traffic & Source Analysis",
      body: "Broke down website traffic by source (organic, paid, direct, referral) across multiple years to show growth trends. Used CASE pivots to restructure the data so each traffic source sat in its own column — much easier for leadership to scan than stacked rows.",
      color: T.blue,
      code: "SELECT\n  year,\n  SUM(CASE WHEN source = 'organic' THEN sessions END) AS organic,\n  SUM(CASE WHEN source = 'paid' THEN sessions END) AS paid\nFROM traffic\nGROUP BY year",
    },
    {
      num: "03",
      title: "Conversion & Click-Through Rates",
      body: "Calculated conversion rates and CTRs across time periods, identifying when product changes and website updates had a measurable impact. Used subqueries and temporary tables to keep the logic clean and the output readable.",
      color: T.green,
      code: "SELECT\n  period,\n  ROUND(conversions * 100.0 / sessions, 2) AS conversion_rate,\n  ROUND(clicks * 100.0 / impressions, 2) AS ctr\nFROM metrics\nORDER BY period",
    },
    {
      num: "04",
      title: "Business Growth Over Time",
      body: "Produced year-on-year comparisons showing how key metrics trended. Referenced known events (website redesigns, product launches) to explain the data rather than just presenting it. The final output was a PDF report combining queries with their results, ready for the investor deck.",
      color: T.amber,
    },
  ];
  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, zIndex: 100,
      background: "rgba(0,0,0,0.5)", backdropFilter: "blur(6px)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: 20, animation: "fadeIn 0.2s ease",
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: T.bg, borderRadius: 10, maxWidth: 640, width: "100%",
        maxHeight: "85vh", overflowY: "auto", padding: "32px 28px",
        border: `1px solid ${T.cardBorder}`, boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
      }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <span style={{ fontSize: 24 }}>🧮</span>
              <span style={{ fontSize: 9, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", padding: "3px 8px", background: T.amber + "12", color: T.amber, borderRadius: 6, letterSpacing: "0.5px", textTransform: "uppercase", fontWeight: 600 }}>SQL & Data Analysis</span>
            </div>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: T.text, margin: 0, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>SQL Analysis for Fund Raise</h2>
            <p style={{ fontSize: 12, color: T.textLight, marginTop: 4, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>Investor preparation · SQL · PDF report</p>
          </div>
          <button onClick={onClose} style={{
            width: 32, height: 32, borderRadius: 10, border: `1px solid ${T.cardBorder}`,
            background: T.card, color: T.textLight, fontSize: 16, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>×</button>
        </div>
        {/* Steps */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {steps.map((step, i) => (
            <div key={i} style={{
              padding: "16px 18px", background: T.card, border: `1px solid ${T.cardBorder}`,
              borderRadius: 10, borderLeft: `3px solid ${step.color}`,
              boxShadow: "0 1px 4px rgba(0,0,0,0.02)",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 5 }}>
                <span style={{ fontSize: 11, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", color: step.color, fontWeight: 700 }}>{step.num}</span>
                <span style={{ fontSize: 14, fontWeight: 700, color: T.text }}>{step.title}</span>
              </div>
              <p style={{ fontSize: 13, color: T.textMid, lineHeight: 1.65, margin: 0 }}>{step.body}</p>
              {step.code && (
                <pre style={{
                  marginTop: 10, padding: "12px 14px", borderRadius: 10,
                  background: "#1e1e1e", color: "#d4d4d4", fontSize: 11,
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", lineHeight: 1.5,
                  overflowX: "auto", border: `1px solid ${T.cardBorder}`,
                }}>{step.code}</pre>
              )}
            </div>
          ))}
        </div>
        {/* Skills */}
        <div style={{ marginTop: 16, padding: "12px 16px", background: T.tagBg, borderRadius: 10 }}>
          <div style={{ fontSize: 9, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", color: T.textFaint, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 6 }}>Skills used</div>
          <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
            {["SQL", "CASE Pivots", "Subqueries", "Temporary Tables", "JOINs", "Data Trends", "Stakeholder Reporting"].map(s => (
              <span key={s} style={{ padding: "3px 8px", borderRadius: 6, fontSize: 10, background: T.card, color: T.textMid, border: `1px solid ${T.cardBorder}` }}>{s}</span>
            ))}
          </div>
        </div>
        {/* Footer links */}
        <div style={{ marginTop: 16, display: "flex", justifyContent: "center", gap: 16 }}>
          <a href="https://github.com/R9JJAYL/SQLAnalysisForFundRaise/blob/main/FundRaiseAnalysisReport.pdf" target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} style={{
            fontSize: 12, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", color: T.amber, fontWeight: 600, textDecoration: "none",
          }}>
            View full report (PDF) →
          </a>
          <a href="https://github.com/R9JJAYL/SQLAnalysisForFundRaise/blob/main/FundRaiseAnalysisCode.sql" target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} style={{
            fontSize: 12, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", color: T.textLight, fontWeight: 600, textDecoration: "none",
          }}>
            View SQL code →
          </a>
        </div>
      </div>
    </div>
  );
}
function BuildTile({ build, index, onModalOpen }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  const isModal = build.modal;
  const Tag = isModal ? "div" : "a";
  const linkProps = isModal ? { onClick: () => onModalOpen && onModalOpen(build.modal) } : { href: build.url, target: "_blank", rel: "noopener noreferrer" };
  return (
    <Tag ref={ref} {...linkProps} style={{
      display: "flex", flexDirection: "column", textDecoration: "none", color: "inherit", cursor: "pointer",
      background: `linear-gradient(135deg, ${build.color}06 0%, ${T.card} 60%)`, border: `1px solid ${T.cardBorder}`,
      borderRadius: 10, padding: "24px 24px 20px",
      position: "relative", overflow: "hidden", height: "100%",
      transition: `all 0.5s ease ${index * 80}ms`,
      opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(18px)",
      boxShadow: "0 1px 6px rgba(0,0,0,0.03)",
    }}
    onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 8px 24px ${build.color}15`; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.borderColor = build.color + "35"; }}
    onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 1px 6px rgba(0,0,0,0.03)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = T.cardBorder; }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
          <div style={{ width: 40, height: 40, borderRadius: 10, background: build.color + "10", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>{build.icon}</div>
          <div>
            <h3 style={{ fontSize: 15, fontWeight: 700, margin: 0, color: T.text, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>{build.title}</h3>
            <span style={{ fontSize: 9, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", color: build.color, textTransform: "uppercase", letterSpacing: 0.5, fontWeight: 600 }}>{build.type}</span>
          </div>
      </div>
      <p style={{ fontSize: 13, color: T.textLight, lineHeight: 1.6, margin: "0 0 12px", flex: 1 }}>{build.desc}</p>
      {build.tags && (
        <div style={{ display: "flex", gap: 4, flexWrap: "wrap", marginBottom: 14 }}>
          {build.tags.map(tag => (
            <span key={tag} style={{ padding: "3px 7px", borderRadius: 6, fontSize: 10, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", background: build.color + "10", color: build.color, border: `1px solid ${build.color}20`, letterSpacing: "0.2px" }}>{tag}</span>
          ))}
        </div>
      )}
    </Tag>
  );
}
function RecCard({ rec, index }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <div ref={ref} style={{
      padding: "20px 22px", background: T.card, border: `1px solid ${T.cardBorder}`,
      borderRadius: 10, boxShadow: "0 1px 6px rgba(0,0,0,0.02)",
      transition: `all 0.5s ease ${index * 80}ms`,
      opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(14px)",
      position: "relative",
    }}>
      <div style={{ fontSize: 13, color: T.textMid, lineHeight: 1.7, marginBottom: 14, fontStyle: "italic", position: "relative", zIndex: 1 }}>"{rec.text}"</div>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        {/* Avatar circle */}
        <div style={{ width: 32, height: 32, borderRadius: "50%", background: `linear-gradient(135deg, ${T.warm1}, ${T.accentLight})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: T.accent }}>{rec.name.split(" ").map(n => n[0]).join("")}</div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: T.text }}>{rec.name}</div>
          <div style={{ fontSize: 11, color: T.textLight }}>{rec.role}</div>
        </div>
      </div>
      <div style={{ marginTop: 8 }}>
        <span style={{ fontSize: 9, color: T.textFaint, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", textTransform: "uppercase", letterSpacing: 0.5, padding: "2px 7px", background: T.tagBg, borderRadius: 6 }}>{rec.relation}</span>
      </div>
    </div>
  );
}
export default function RecruiterCV() {
  const [tab, setTab] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [modal, setModal] = useState(null);
  const [containerH, setContainerH] = useState("auto");
  const panelRefs = [useRef(null), useRef(null), useRef(null)];
  useEffect(() => { setLoaded(true); }, []);
  useEffect(() => {
    const el = panelRefs[tab]?.current;
    if (el) {
      const update = () => setContainerH(el.scrollHeight);
      update();
      const ro = new ResizeObserver(update);
      ro.observe(el);
      return () => ro.disconnect();
    }
  }, [tab]);
  return (
    <div style={{ background: "#E8E4DE", color: T.text, minHeight: "100vh", fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", overflowX: "hidden", position: "relative", padding: "40px 24px" }}>

      {/* CV Paper Container */}
      <div style={{
        position: "relative", maxWidth: 960, margin: "0 auto",
        background: T.bg, borderRadius: 16,
        border: `1px solid ${T.cardBorder}`,
        boxShadow: "0 4px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)",
        padding: "0 40px 32px",
        minHeight: 0,
      }}>
        {/* Subtle warm radial glow behind header */}
        <div style={{ position: "absolute", top: -60, right: -60, width: 400, height: 400, borderRadius: "50%", background: `radial-gradient(circle, ${T.accentBg} 0%, transparent 70%)`, opacity: 0.4, pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 200, left: -100, width: 300, height: 300, borderRadius: "50%", background: `radial-gradient(circle, ${T.warm1}40 0%, transparent 70%)`, opacity: 0.3, pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 2 }}>
        {/* HEADER */}
        <header style={{
          paddingTop: 0, paddingBottom: 0,
          opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.7s ease", position: "relative",
        }}>
          {/* Tabs — flush at top of card */}
          <div style={{ display: "flex", gap: 3, background: T.tagBg, borderRadius: "15px 15px 0 0", padding: 4, margin: "0 -40px", position: "relative" }}>
            {/* Sliding pill background */}
            <div style={{
              position: "absolute", top: 4, bottom: 4, borderRadius: 10,
              background: T.card, boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              width: `calc((100% - ${4 * 2 + (TABS.length - 1) * 3}px) / ${TABS.length})`,
              left: `calc(4px + ${tab} * (100% - ${2 * 4 - 3}px) / ${TABS.length})`,
              transition: "left 0.35s cubic-bezier(0.25, 0.1, 0.25, 1)",
              zIndex: 0,
            }} />
            {TABS.map((t, i) => (
              <button key={t} onClick={() => { setTab(i); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              onMouseEnter={e => { if (tab !== i) { e.currentTarget.style.color = T.text; e.currentTarget.style.fontWeight = "700"; e.currentTarget.style.letterSpacing = "0.3px"; } }}
              onMouseLeave={e => { if (tab !== i) { e.currentTarget.style.color = T.textLight; e.currentTarget.style.fontWeight = "500"; e.currentTarget.style.letterSpacing = "0px"; } }}
              style={{
                flex: 1, padding: "10px 14px", borderRadius: 10, border: "none",
                background: "transparent",
                color: tab === i ? T.accent : T.textLight,
                fontSize: 13, fontWeight: tab === i ? 700 : 500,
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", cursor: "pointer",
                transition: "color 0.2s ease, font-weight 0.2s ease, letter-spacing 0.2s ease",
                position: "relative", zIndex: 1,
                letterSpacing: "0px",
              }}>{t}</button>
            ))}
          </div>
          {/* Name + Title + Icons */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 20, marginBottom: 14 }}>
            <h1 style={{ fontSize: 24, fontWeight: 800, margin: 0, lineHeight: 1, letterSpacing: "-1px", color: T.text, flex: "0 0 auto" }}>Phil Role</h1>
            <p style={{ fontSize: 24, fontWeight: 800, margin: 0, lineHeight: 1, letterSpacing: "-1px", color: T.accent, textAlign: "center", flex: "1 1 auto" }}>Head of Talent Acquisition</p>
            <div style={{ display: "flex", gap: 8, flex: "0 0 auto" }}>
            {[
              { href: "https://www.linkedin.com/in/jamiejaylyons/", label: "LinkedIn", svg: <svg width="16" height="16" viewBox="0 0 24 24" fill={T.accent}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
              { href: "mailto:phil@example.com", label: "Email", svg: <svg width="16" height="16" viewBox="0 0 24 24" fill={T.accent}><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg> },
              { href: "tel:+447700000000", label: "Phone", svg: <svg width="16" height="16" viewBox="0 0 24 24" fill={T.accent}><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg> },
              { href: "https://calendly.com/placeholder", label: "Book a meeting", svg: <svg width="16" height="16" viewBox="0 0 24 24" fill={T.accent}><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z"/></svg> },
            ].map(item => (
              <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} aria-label={item.label} style={{
                width: 32, height: 32, borderRadius: 10,
                background: T.card, border: `1px solid ${T.cardBorder}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                textDecoration: "none", transition: "all 0.2s ease",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = T.accent; e.currentTarget.style.boxShadow = "0 2px 8px rgba(196,112,75,0.15)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = T.cardBorder; e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.04)"; }}
              >{item.svg}</a>
            ))}
            </div>
          </div>
        </header>
        {/* ===== TAB CONTENT SLIDER ===== */}
        <div style={{ overflow: "hidden", height: containerH !== "auto" ? containerH : "auto", transition: "height 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)" }}>
          <div style={{
            display: "flex", width: "300%", alignItems: "flex-start",
            transform: `translateX(-${tab * (100 / 3)}%)`,
            transition: "transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)",
          }}>

        {/* ===== Tab 0: MY CAREER ===== */}
        <div ref={panelRefs[0]} style={{ width: `${100 / 3}%`, flexShrink: 0, padding: "0 0 20px" }}>
            <p style={{ fontSize: 12, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", color: T.textLight, letterSpacing: "0.3px", margin: "0 0 10px 2px", fontWeight: 500 }}>Summary</p>
            <p style={{ fontSize: 14, color: T.textMid, lineHeight: 1.75, margin: "0 0 8px" }}>
              8 years in recruitment. Started in high-volume agency, moved into embedded RPO across VC-backed startups,
              then went in-house at a £4.5bn fintech hiring 75 engineers with zero agency spend. Currently Head of TA
              at a Series B health-tech, where I scaled the company from 140 to 310 people. Promoted at every company.
            </p>
            <p style={{ fontSize: 14, color: T.textMid, lineHeight: 1.75, margin: "0 0 22px" }}>
              Looking for my next role as first or early TA hire at a Series A/B company. Own the hiring plan, shape how the team scales.
            </p>
            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginBottom: 22 }}>
              {STATS.map((s, i) => (
                <div key={s.label} style={{
                  textAlign: "center", padding: "14px 6px 12px",
                  background: T.card, borderRadius: 10,
                  border: `1px solid ${T.cardBorder}`,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                  transition: `all 0.5s ease ${i * 100}ms`,
                  opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(12px)",
                }}>
                  <div style={{ fontSize: 24, fontWeight: 800, color: T.accent, letterSpacing: "-0.5px", fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                    {s.isText ? <SeriesAnim value={s.value} delay={i * 100} /> : <AnimNum {...s} delay={i * 100} />}
                  </div>
                  <div style={{ fontSize: 9, color: T.textLight, marginTop: 3, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", textTransform: "uppercase", letterSpacing: "0.3px" }}>{s.label}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 12, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", color: T.textLight, letterSpacing: "0.3px", margin: "0 0 10px 2px", fontWeight: 500 }}>Work experience</p>
            {ROLES.map((role, i) => <RoleCard key={i} role={role} index={i} isLast={i === ROLES.length - 1} />)}
            <div style={{ height: 1, background: `linear-gradient(90deg, transparent, ${T.cardBorder}, transparent)`, margin: "28px 0" }} />
            {/* Education */}
            <div style={{ marginBottom: 24 }}>
              <p style={{ fontSize: 12, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", color: T.textLight, letterSpacing: "0.3px", margin: "0 0 10px 2px", fontWeight: 500 }}>Education</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
                <div style={{ padding: "14px 16px", background: T.card, borderRadius: 10, border: `1px solid ${T.cardBorder}`, boxShadow: "0 2px 8px rgba(0,0,0,0.02)" }}>
                  <div style={{ fontSize: 13, color: T.text, fontWeight: 600 }}>BA (Hons) Business Management</div>
                  <div style={{ fontSize: 11, color: T.textLight, marginTop: 4 }}>University of Leeds · 2:1</div>
                </div>
                <div style={{ padding: "14px 16px", background: T.card, borderRadius: 10, border: `1px solid ${T.cardBorder}`, boxShadow: "0 2px 8px rgba(0,0,0,0.02)" }}>
                  <div style={{ fontSize: 13, color: T.text, fontWeight: 600 }}>AIRS Certified</div>
                  <div style={{ fontSize: 11, color: T.textLight, marginTop: 4 }}>Internet Recruiter Certification</div>
                </div>
                <div style={{ padding: "14px 16px", background: T.card, borderRadius: 10, border: `1px solid ${T.cardBorder}`, boxShadow: "0 2px 8px rgba(0,0,0,0.02)" }}>
                  <div style={{ fontSize: 13, color: T.text, fontWeight: 600 }}>LinkedIn Certified</div>
                  <div style={{ fontSize: 11, color: T.textLight, marginTop: 4 }}>Recruiter Certification</div>
                </div>
              </div>
            </div>
            {/* Skills */}
            <div style={{ marginBottom: 36 }}>
              <p style={{ fontSize: 12, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", color: T.textLight, letterSpacing: "0.3px", margin: "0 0 10px 2px", fontWeight: 500 }}>Skills</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { category: "Recruitment & Strategy", color: T.blue, skills: ["Direct Sourcing", "Stakeholder Management", "Offer Negotiation", "Candidate Experience", "Interview Process Design", "Employer Branding", "Agency Management", "Referral Programmes", "Hiring Manager Coaching", "Pipeline Forecasting", "Comp Benchmarking", "Reporting & Dashboards", "Budget Management", "Vendor Negotiation", "New Business Development"] },
                  { category: "Tech Stack", color: T.green, skills: ["Greenhouse", "LinkedIn Recruiter", "Google Sheets", "Python (basic)", "Slack API", "Zapier / Make.com / n8n", "Boolean Search", "Claude / GPT-4"] },
                ].map((group) => (
                  <div key={group.category} style={{ display: "flex", gap: 12, alignItems: "baseline", flexWrap: "wrap" }}>
                    <span style={{ fontSize: 10, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", color: group.color, textTransform: "uppercase", letterSpacing: 0.5, fontWeight: 600, minWidth: 140, flexShrink: 0 }}>{group.category}</span>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                      {group.skills.map((skill) => (
                        <span key={skill} style={{ padding: "5px 12px", borderRadius: 10, fontSize: 12, background: T.card, color: T.textMid, border: `1px solid ${T.cardBorder}`, boxShadow: "0 1px 3px rgba(0,0,0,0.02)" }}>{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ height: 1, background: `linear-gradient(90deg, transparent, ${T.cardBorder}, transparent)`, marginBottom: 28 }} />
            {/* Recommendations */}
            <div>
              <p style={{ fontSize: 12, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", color: T.textLight, letterSpacing: "0.3px", margin: "0 0 10px 2px", fontWeight: 500 }}>LinkedIn Recommendations</p>
              <p style={{ fontSize: 12, color: T.textFaint, marginBottom: 16, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>What people say about my work</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
                {RECOMMENDATIONS.map((rec, i) => <RecCard key={i} rec={rec} index={i} />)}
              </div>
            </div>
        </div>

        {/* ===== Tab 1: MY PROJECTS ===== */}
        <div ref={panelRefs[1]} style={{ width: `${100 / 3}%`, flexShrink: 0, padding: "0 0 20px" }}>
            {["Agents", "Builds & Automation", "Articles"].map(cat => {
              const tiles = BUILD_TILES.filter(b => b.category === cat);
              if (!tiles.length) return null;
              return (
                <div key={cat} style={{ marginBottom: 28 }}>
                  <p style={{ fontSize: 12, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", color: T.textLight, letterSpacing: "0.3px", margin: "0 0 10px 2px", fontWeight: 500 }}>{cat}</p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }}>
                    {tiles.map((build, i) => <BuildTile key={i} build={build} index={i} onModalOpen={setModal} />)}
                  </div>
                </div>
              );
            })}
        </div>

        {/* ===== Tab 2: MY PERSONAL LIFE ===== */}
        <div ref={panelRefs[2]} style={{ width: `${100 / 3}%`, flexShrink: 0, padding: "0 0 20px" }}>
            <div style={{ marginBottom: 24 }}>
              <p style={{ fontSize: 12, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", color: T.textLight, letterSpacing: "0.3px", margin: "0 0 10px 2px", fontWeight: 500 }}>A bit about me</p>
              <p style={{ fontSize: 14, color: T.textMid, lineHeight: 1.65, marginBottom: 16 }}>Ideal spot for an intro video, but if you're enjoying my content, check out how we're helping teams manage application volume in this product breakdown of First!</p>
              <div style={{
                width: "60%", aspectRatio: "16/9", borderRadius: 10, margin: "0 auto",
                overflow: "hidden", border: `1px solid ${T.cardBorder}`,
                marginBottom: 8,
              }}>
                <iframe
                  src="https://www.youtube.com/embed/rkenwB12R-o"
                  style={{ width: "100%", height: "100%", border: "none" }}
                  title="6-Min Demo of First"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            </div>
            <div style={{ marginBottom: 36 }}>
              <p style={{ fontSize: 12, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", color: T.textLight, letterSpacing: "0.3px", margin: "0 0 10px 2px", fontWeight: 500 }}>A few things about me</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 10 }}>
                {[
                  { label: "Football", text: "Lifelong Crystal Palace fan. Yes, I know. No, I can't explain it either. Season ticket holder. The highs are rare but they're worth it." },
                  { label: "Running", text: "5k most mornings around Brockwell Park. I'm slow but consistent, which is also how I'd describe my sourcing." },
                  { label: "Cooking", text: "I make everything from scratch. Current obsession is getting the perfect crispy chilli oil. My mates say I should start a food account. I won't." },
                  { label: "Mabel", text: "One-year-old cockapoo. Has 1,200 Instagram followers. I have 800. She's better at personal branding than most recruiters." },
                  { label: "Reading", text: "Mostly non-fiction. Thinking Fast and Slow changed how I interview. Currently reading Range by David Epstein. It's basically about why generalists win." },
                  { label: "Travel", text: "Spent 3 months in Southeast Asia between jobs. Best decision I ever made. Worst sunburn I ever got. Both in Thailand." },
                ].map((item, i) => (
                  <div key={i} style={{
                    padding: "16px 18px", background: T.card, border: `1px solid ${T.cardBorder}`,
                    borderRadius: 10, boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
                  }}>
                    <div style={{ fontSize: 10, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", color: T.accent, textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 6, fontWeight: 600 }}>{item.label}</div>
                    <div style={{ fontSize: 13, color: T.textMid, lineHeight: 1.65 }}>{item.text}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p style={{ fontSize: 12, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", color: T.textLight, letterSpacing: "0.3px", margin: "0 0 10px 2px", fontWeight: 500 }}>What I value</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 10 }}>
                {[
                  { label: "Honesty over polish", text: "I'd rather someone tell me I'm wrong than agree with me to be polite. That goes both ways." },
                  { label: "Doing the work", text: "I've never been the smartest person in the room, but I'll be the one who actually followed up." },
                  { label: "Loyalty to people", text: "Every company I've left, I've stayed close with the people. That matters more to me than a brand on my CV." },
                ].map((t, i) => (
                  <div key={i} style={{
                    padding: "16px 18px", background: T.card, border: `1px solid ${T.cardBorder}`,
                    borderRadius: 10,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
                    borderLeft: `3px solid ${T.accentBorder}`,
                  }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: T.text, marginBottom: 4 }}>{t.label}</div>
                    <div style={{ fontSize: 13, color: T.textMid, lineHeight: 1.65 }}>{t.text}</div>
                  </div>
                ))}
              </div>
            </div>
        </div>

          </div>{/* end flex track */}
        </div>{/* end overflow hidden */}
        {/* Sheets Modal */}
        {modal === "sheets" && <SheetsModal onClose={() => setModal(null)} />}
        {modal === "sql" && <SQLModal onClose={() => setModal(null)} />}
        {/* FOOTER */}
        <footer style={{ padding: "40px 0 48px", borderTop: `1px solid ${T.cardBorder}`, textAlign: "center", position: "relative" }}>
          <div style={{ position: "absolute", top: -1, left: "20%", right: "20%", height: 1, background: `linear-gradient(90deg, transparent, ${T.accent}30, transparent)` }} />
          <p style={{ fontSize: 18, fontWeight: 400, color: T.text, marginBottom: 24, letterSpacing: "-0.3px" }}>
            Built by a recruiter, for recruiters, because we deserve better than a Word doc.
          </p>
          <div style={{ display: "inline-flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
            <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer" style={{
              padding: "11px 24px", borderRadius: 10, fontSize: 13, fontWeight: 600,
              background: T.accent, color: "#fff", textDecoration: "none",
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", transition: "all 0.25s ease",
              boxShadow: "0 2px 8px rgba(196,112,75,0.2)",
            }}
            onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 6px 20px rgba(196,112,75,0.3)"; }}
            onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 2px 8px rgba(196,112,75,0.2)"; }}
            >Book a time to talk</a>
          </div>
        </footer>
        </div>
      </div>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes shimmer { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        * { box-sizing: border-box; margin: 0; }
        html { scroll-behavior: smooth; }
        body { background: #E8E4DE; }
        ::selection { background: ${T.accentBg}; color: ${T.accent}; }
        button:hover { opacity: 0.92; }
      `}</style>
    </div>
  );
}
