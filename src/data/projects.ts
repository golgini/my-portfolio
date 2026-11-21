import type { Project } from './types';

export const projects: Project[] = [
  {
    id: "two-machine-home-lab", title: "Two-Machine IT & Cybersecurity Home Lab", category: "Security", status: "In progress", role: "Independent lab", context: "Local network",
    description: "A practical two-machine environment for exploring Windows and Linux interoperability, network troubleshooting, secure remote administration and foundational security controls.",
    highlights: ["Kali Linux desktop and Windows laptop on the same router", "ICMP connectivity and local addressing experiments", "OpenSSH setup and Windows Firewall configuration", "Architecture and findings documented as the lab evolves"],
    tech: ["Kali Linux", "Windows 11", "OpenSSH", "Windows Firewall", "TCP/IP"],
  },
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
  {
    id: "python-log-analyser", title: "Python Security Log Analyser", category: "Security", status: "Planned", role: "Learning project", context: "Independent",
    description: "A focused Python tool for grouping authentication events, highlighting repeated failures and producing a concise investigation report.",
    highlights: ["Parse structured log files", "Group events by source IP", "Flag repeated authentication failures", "Export an investigation summary as CSV"], tech: ["Python", "CSV", "Log analysis"],
  },
  {
    id: "network-traffic-analysis", title: "Network Security & Traffic Analysis", category: "Security", status: "Planned", role: "Authorised lab study", context: "Independent",
    description: "A controlled traffic-analysis study focused on DNS, TCP handshakes, protocol identification and documenting findings from an authorised environment.",
    highlights: ["Packet capture and protocol identification", "DNS and TCP handshake walkthroughs", "Findings and recommendations documented without live scanning"], tech: ["Wireshark", "Nmap", "TCP/IP"],
  },
  {
    id: "cloud-security-lab", title: "Cloud Security Fundamentals Lab", category: "Security", status: "Planned", role: "Learning project", context: "Independent",
    description: "A small cloud learning environment for practising identity management, least-privilege access, audit logging and security review workflows.",
    highlights: ["IAM concepts and access review", "Least-privilege policy exercises", "Audit logging and documented findings"], tech: ["AWS fundamentals", "IAM", "Cloud logging"],
  },
];
