import type { ProcessLayer } from './types';

export const processLayers: ProcessLayer[] = [
  { id: 1, name: "Problem", summary: "Define the threat or question.", whatIDo: "Pin down what attack, weakness or market behavior I am trying to understand, and what a good answer looks like." },
  { id: 2, name: "Research", summary: "Study how it works.", whatIDo: "Read papers and tool docs, and practice on labs such as OverTheWire Bandit and pwn.college before building." },
  { id: 3, name: "Data", summary: "Collect and prepare evidence.", whatIDo: "Gather emails, attachments, packet captures or price data, and handle them so the originals stay intact." },
  { id: 4, name: "Analysis", summary: "Find the signal.", whatIDo: "Inspect with Wireshark and Autopsy, or engineer features and test models with walk-forward validation to avoid overfitting." },
  { id: 5, name: "Build", summary: "Turn findings into a tool.", whatIDo: "Write Python, MQL5 or Pine Script tools that automate detection or testing." },
  { id: 6, name: "Report", summary: "Explain the result.", whatIDo: "Document findings, limits and next steps so someone else can act on them." },
];
