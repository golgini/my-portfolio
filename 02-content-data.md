# Stage 02: Typed content data (from CV and resume)

## Goal
All site content lives in typed files. Later stages only read from these.

## Steps
Create the files below exactly. `TODO:` strings must be filtered out by a helper `isTodo(s)` in `src/data/utils.ts` so the UI hides them. Add types in `src/data/types.ts`.

### `types.ts`
```ts
export type Project = {
  id: string; title: string; category: "Security" | "Machine Learning" | "Trading";
  status: "In progress" | "Completed"; role: string; context: string;
  description: string; highlights: string[]; tech: string[];
  links?: { repo?: string; demo?: string };
};
export type ProcessLayer = { id: number; name: string; summary: string; whatIDo: string };
export type SkillGroup = { title: string; icon: string; items: string[] };
export type TimelineItem = { id: string; start: string; end: string; title: string; org: string; bullets: string[] };
export type EducationItem = { id: string; period: string; title: string; institution: string; notes: string[] };
```

### `profile.ts`
```ts
export const profile = {
  name: "Sammy Moseti Gesabo",
  shortName: "Sammy",
  title: "Computer Security & Forensics Graduate",
  tagline: "Entry-level SOC Analyst, Digital Forensic Investigator or Security Analyst, with a long-term interest in security automation and threat detection.",
  location: "Nairobi, Kenya",
  email: "sammygesabo@gmail.com",
  linkedin: "https://www.linkedin.com/in/sammy-gesabo-895b49410",
  github: "TODO: GitHub URL",
  about: "Final-semester BSc Computer Security and Forensics student at Kabarak University. I combine academic training in digital forensics and network security with independently built projects in algorithmic systems and AI-assisted security tooling.",
  stats: [
    { value: "12", label: "Phases in my AI trading system" },
    { value: "3", label: "Languages: Python, MQL5, Pine Script" },
    { value: "Dec 2026", label: "Expected graduation" },
  ],
};
```

### `process.ts` (six layers, top to bottom of the stack: Report, Build, Analysis, Data, Research, Problem)
```ts
export const processLayers = [
  { id: 1, name: "Problem", summary: "Define the threat or question.", whatIDo: "Pin down what attack, weakness or market behavior I am trying to understand, and what a good answer looks like." },
  { id: 2, name: "Research", summary: "Study how it works.", whatIDo: "Read papers and tool docs, and practice on labs such as OverTheWire Bandit and pwn.college before building." },
  { id: 3, name: "Data", summary: "Collect and prepare evidence.", whatIDo: "Gather emails, attachments, packet captures or price data, and handle them so the originals stay intact." },
  { id: 4, name: "Analysis", summary: "Find the signal.", whatIDo: "Inspect with Wireshark and Autopsy, or engineer features and test models with walk-forward validation to avoid overfitting." },
  { id: 5, name: "Build", summary: "Turn findings into a tool.", whatIDo: "Write Python, MQL5 or Pine Script tools that automate detection or testing." },
  { id: 6, name: "Report", summary: "Explain the result.", whatIDo: "Document findings, limits and next steps so someone else can act on them." },
];
```

### `skills.ts`
```ts
export const skillGroups = [
  { title: "Security & Forensics", icon: "shield", items: ["Wireshark", "Autopsy", "Linux fundamentals", "Digital evidence handling", "CTF methodology", "Phishing detection", "Steganography analysis", "Splunk (fundamentals)"] },
  { title: "Programming & Scripting", icon: "code", items: ["Python", "MQL5", "Pine Script"] },
  { title: "Machine Learning & Data", icon: "brain", items: ["LightGBM", "Ollama (local LLM inference)", "Backtesting", "Walk-forward validation", "ML-assisted anomaly detection"] },
  { title: "Platforms & Tooling", icon: "wrench", items: ["OANDA API", "MetaTrader 4/5", "fxDreema", "TradingView"] },
];
// TODO: confirm soft skills before publishing. Suggested, not from the CV:
export const softSkills = ["Self-directed learning", "Methodical debugging", "Rigorous validation", "Clear documentation", "Problem solving"];
```

### `projects.ts`
```ts
export const projects = [
  {
    id: "anti-phishing", title: "AI-Powered Anti-Phishing Email Security System with Steganography Detection",
    category: "Security", status: "In progress", role: "Final-year project", context: "Kabarak University",
    description: "A machine-learning system that classifies and flags phishing emails in real time, with a built-in tool that detects data hidden in email attachments and embedded images.",
    highlights: ["Covers two email threats in one tool: social engineering and covert data exfiltration", "TODO: dataset used", "TODO: preliminary accuracy / results"],
    tech: ["Python", "Machine learning", "Steganography analysis", "TODO: confirm algorithms, e.g. Random Forest, Naive Bayes, Logistic Regression, Flask"],
  },
  {
    id: "forex-ai", title: "AI-Powered Forex Trading System",
    category: "Machine Learning", status: "Completed", role: "Personal project", context: "Independent",
    description: "A 12-phase system from data collection to live paper trading.",
    highlights: ["LightGBM predictive model", "Walk-forward backtesting to guard against overfitting", "Live paper-trading integration through the OANDA API", "Local sentiment analysis with Ollama, so no paid API is needed"],
    tech: ["Python", "LightGBM", "OANDA API", "Ollama"],
  },
  {
    id: "mql5-bots", title: "Algorithmic Trading Bots (Expert Advisors)",
    category: "Trading", status: "Completed", role: "Personal project", context: "Independent",
    description: "Rule-based automated trading bots with multi-timeframe logic.",
    highlights: ["Liquidity-sweep detection and structural break confirmation", "Diagnosed compile and runtime issues across MT4 and MT5", "Prototyped and backtested high-frequency logic in fxDreema", "Ported strategy logic to Pine Script indicators"],
    tech: ["MQL5", "Pine Script", "fxDreema", "MT4/MT5"],
  },
];
```
Status for the two personal projects: confirm "Completed" before publishing.

### `journey.ts` (replaces "Work Experience": the CV has no jobs, so do not invent any)
```ts
export const journey = [
  { id: "study", start: "TODO: start year", end: "Dec 2026", title: "BSc Computer Security and Forensics", org: "Kabarak University", bullets: ["Final year of study", "TODO: key modules"] },
  { id: "projects", start: "TODO", end: "Present", title: "Independent engineering projects", org: "Personal", bullets: ["AI forex trading system (LightGBM, OANDA, Ollama)", "MQL5 Expert Advisors and Pine Script indicators"] },
  { id: "labs", start: "TODO", end: "Present", title: "Self-directed security training", org: "OverTheWire Bandit, pwn.college", bullets: ["Building Linux command-line and exploitation fundamentals ahead of CTF competitions"] },
  { id: "capstone", start: "TODO", end: "Dec 2026", title: "Final-year project", org: "Kabarak University", bullets: ["AI-powered anti-phishing and steganography detection system"] },
];
```

### `education.ts` and `engagements.ts`
```ts
export const education = [{ id: "kabarak", period: "Expected Dec 2026", title: "BSc Computer Security and Forensics", institution: "Kabarak University", notes: ["TODO: relevant modules, e.g. Digital Forensics, Network Security, Cryptography, Incident Response, Cyber Law"] }];
export const training = [
  { id: "bandit", period: "Ongoing", title: "OverTheWire Bandit", institution: "Self-directed", notes: ["Linux command-line fundamentals"] },
  { id: "pwn", period: "Ongoing", title: "pwn.college", institution: "Self-directed", notes: ["Exploitation fundamentals"] },
];
export const engagements = [
  { id: "linkedin", period: "TODO", title: "Built a LinkedIn presence for the Kenyan cybersecurity job market", org: "Professional development", notes: ["Outreach templates and a curated list of local employers"] },
  // TODO: add CTF events, clubs, talks, volunteering when available
];
```

## Done when
- All files compile with strict TypeScript.
- `isTodo` exists and a unit-style check (a short script or console test) confirms strings starting with "TODO" are hidden.
- No placeholder text looks like real information.

## Message to paste
"Read stages/00-rules.md and stages/02-content-data.md. Do stage 02 only: create every data file exactly as written, plus utils.ts with isTodo and types.ts. Do not build UI. Run build and commit."
