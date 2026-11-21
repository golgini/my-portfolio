import type { TimelineItem } from './types';

export const journey: TimelineItem[] = [
  { id: "study", start: "Academic", end: "Kabarak University", title: "BSc Computer Security and Forensics", org: "Kabarak University", bullets: ["Digital forensics, network security and computer security foundations"] },
  { id: "projects", start: "TODO", end: "Present", title: "Independent engineering projects", org: "Personal", bullets: ["AI forex trading system (LightGBM, OANDA, Ollama)", "MQL5 Expert Advisors and Pine Script indicators"] },
  { id: "labs", start: "TODO", end: "Present", title: "Self-directed security training", org: "OverTheWire Bandit, pwn.college", bullets: ["Building Linux command-line and exploitation fundamentals ahead of CTF competitions"] },
  { id: "capstone", start: "Project", end: "In progress", title: "AI-powered anti-phishing and steganography detection system", org: "Kabarak University", bullets: ["Machine-learning classification and hidden-data investigation"] },
];
