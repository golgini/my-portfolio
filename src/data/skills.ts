import type { SkillGroup } from './types';

export const skillGroups: SkillGroup[] = [
  { title: "Security & Forensics", icon: "shield", items: ["Wireshark", "Autopsy", "Linux fundamentals", "Digital evidence handling", "CTF methodology", "Phishing detection", "Steganography analysis", "Splunk (fundamentals)"] },
  { title: "Programming & Scripting", icon: "code", items: ["Python", "MQL5", "Pine Script"] },
  { title: "Machine Learning & Data", icon: "brain", items: ["LightGBM", "Ollama (local LLM inference)", "Backtesting", "Walk-forward validation", "ML-assisted anomaly detection"] },
  { title: "Platforms & Tooling", icon: "wrench", items: ["OANDA API", "MetaTrader 4/5", "fxDreema", "TradingView"] },
];
// TODO: confirm soft skills before publishing. Suggested, not from the CV:
export const softSkills = ["Self-directed learning", "Methodical debugging", "Rigorous validation", "Clear documentation", "Problem solving"];
