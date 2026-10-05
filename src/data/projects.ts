import type { Project } from './types';

export const projects: Project[] = [
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
