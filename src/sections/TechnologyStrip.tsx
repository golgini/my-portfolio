const technologies = [
  'Python',
  'React / TypeScript',
  'HTML / CSS',
  'Vite',
  'Git / GitHub',
  'Linux',
  'Kali Linux',
  'Windows 11',
  'OpenSSH',
  'TCP/IP',
  'Windows Firewall',
  'Wireshark',
  'Nmap',
]

export const TechnologyStrip = () => <section className="technology-strip" aria-label="Technology stack"><span className="technology-label">Tech stack</span><div className="technology-marquee"><div className="technology-track">{[...technologies, ...technologies].map((technology, index) => <span key={`${technology}-${index}`} aria-hidden={index >= technologies.length}>{technology}</span>)}</div></div></section>
