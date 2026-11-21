const technologies = ['Python', 'Linux', 'Kali Linux', 'Wireshark', 'Git', 'JavaScript', 'HTML5', 'CSS3', 'Burp Suite']

export const TechnologyStrip = () => <section className="technology-strip" aria-label="Technologies and tools"><span className="technology-label">Tools in the toolkit</span><div className="technology-list">{technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></section>
