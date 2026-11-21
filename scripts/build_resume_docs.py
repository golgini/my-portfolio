from pathlib import Path
from docx import Document
from docx.enum.style import WD_STYLE_TYPE
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.shared import Inches, Pt, RGBColor
from docx.oxml import OxmlElement
from docx.oxml.ns import qn

OUT = Path('docs')
ORANGE, INK, GREY = RGBColor(0xD9, 0x54, 0x1E), RGBColor(0x15, 0x15, 0x15), RGBColor(0x66, 0x66, 0x66)

def setup(doc):
    for section in doc.sections:
        section.top_margin = Inches(.55); section.bottom_margin = Inches(.55); section.left_margin = Inches(.68); section.right_margin = Inches(.68)
    styles = doc.styles
    normal = styles['Normal']; normal.font.name = 'Aptos'; normal.font.size = Pt(9.2); normal.font.color.rgb = INK; normal.paragraph_format.space_after = Pt(3); normal.paragraph_format.line_spacing = 1.03
    for name, size, color in [('Title', 25, INK), ('Heading 1', 11, ORANGE), ('Heading 2', 10, INK)]:
        style = styles[name]; style.font.name = 'Aptos Display'; style.font.size = Pt(size); style.font.bold = True; style.font.color.rgb = color; style.paragraph_format.space_before = Pt(8); style.paragraph_format.space_after = Pt(3)
    small = styles.add_style('Small', WD_STYLE_TYPE.PARAGRAPH) if 'Small' not in [s.name for s in styles] else styles['Small']
    small.font.name = 'Aptos'; small.font.size = Pt(8); small.font.color.rgb = GREY; small.paragraph_format.space_after = Pt(2)

def header(doc, subtitle):
    p = doc.add_paragraph(style='Title'); p.paragraph_format.space_after = Pt(1); p.add_run('Sammy Moseti Gesabo')
    p = doc.add_paragraph(); p.paragraph_format.space_after = Pt(4); r = p.add_run(subtitle); r.bold = True; r.font.size = Pt(10); r.font.color.rgb = ORANGE
    p = doc.add_paragraph(style='Small'); p.add_run('sammygesabo@gmail.com  |  +254 718 711 884  |  linkedin.com/in/sammy-gesabo-895b49410  |  Nairobi, Kenya')

def section(doc, title, text=None):
    p = doc.add_paragraph(style='Heading 1'); p.add_run(title.upper())
    if text: doc.add_paragraph(text)

def bullet(doc, text):
    p = doc.add_paragraph(); p.paragraph_format.left_indent = Inches(.16); p.paragraph_format.first_line_indent = Inches(-.12); p.add_run('• ').font.color.rgb = ORANGE; p.add_run(text)

def role(doc, title, meta, bullets):
    p = doc.add_paragraph(style='Heading 2'); p.paragraph_format.space_before = Pt(5); p.add_run(title)
    p = doc.add_paragraph(style='Small'); p.add_run(meta).italic = True
    for item in bullets: bullet(doc, item)

def make_resume():
    doc = Document(); setup(doc); header(doc, 'COMPUTER SECURITY & FORENSICS  |  CYBERSECURITY  |  IT NETWORKING')
    section(doc, 'Professional profile', 'Computer Security and Forensics professional focused on cybersecurity, secure infrastructure and IT networking. Brings practical experience with Linux and Windows lab environments, network troubleshooting, OpenSSH, firewall configuration, digital forensics fundamentals, phishing analysis and Python-based security experimentation.')
    section(doc, 'Cybersecurity and networking skills')
    for label, value in [('Cybersecurity', 'Security fundamentals, phishing detection, vulnerability assessment concepts, security monitoring fundamentals, threat analysis, security hardening'), ('Networking', 'TCP/IP fundamentals, IP addressing, ICMP testing, local network troubleshooting, Wireshark, network traffic analysis fundamentals'), ('Systems and forensics', 'Kali Linux, Linux command line, Windows environments, OpenSSH, Windows Firewall, Autopsy, digital evidence handling, steganography analysis'), ('Programming and tools', 'Python, Git, MQL5, Pine Script, Splunk fundamentals, structured debugging, data workflows')]:
        p = doc.add_paragraph(); p.paragraph_format.space_after = Pt(2); p.add_run(label + ': ').bold = True; p.add_run(value)
    section(doc, 'Selected cybersecurity and networking projects')
    role(doc, 'AI-Powered Anti-Phishing Email Security System with Steganography Detection', 'Final-year project  |  Kabarak University  |  In progress', ['Designing a machine-learning system to classify and flag potentially malicious phishing emails.', 'Developing an integrated steganography analysis component for hidden data in attachments and embedded images.', 'Combining social-engineering analysis with covert-data investigation in one security-focused tool.'])
    role(doc, 'Two-Machine IT and Cybersecurity Home Lab', 'Independent lab  |  In progress', ['Connecting a Kali Linux desktop and Windows laptop through the same local router to practise infrastructure security.', 'Working with IP addressing, ICMP connectivity testing, OpenSSH remote administration and Windows Firewall configuration.', 'Documenting architecture, troubleshooting decisions and security considerations as the lab develops.'])
    role(doc, 'AI-Powered Forex Trading System', 'Personal engineering project  |  Completed', ['Built a 12-phase Python workflow with data collection, LightGBM modelling, walk-forward validation and OANDA paper-trading integration.', 'Demonstrates practical debugging, automation, validation and systems thinking transferable to security analytics.'])
    section(doc, 'Education and certification')
    role(doc, 'BSc Computer Security and Forensics', 'Kabarak University', ['Academic focus includes digital forensics, network security and computer security foundations.'])
    role(doc, 'ISO/IEC 27701:2025 Lead Auditor', 'Mastermind Assurance  |  Issued 28 October 2026  |  Expires 27 October 2029', ['Certificate ID: 8mz 3doo85.'])
    section(doc, 'Career direction', 'Seeking entry-level opportunities in cybersecurity engineering, SOC analysis, IT networking, infrastructure security, digital forensics, systems administration and security analysis.')
    doc.save(OUT / 'Sammy_Moseti_Gesabo_Resume.docx'); doc.save(OUT / 'Resume.docx')

def make_cv():
    doc = Document(); setup(doc); header(doc, 'COMPUTER SECURITY & FORENSICS  |  CYBERSECURITY ENGINEERING  |  IT NETWORKING')
    section(doc, 'Professional profile', 'Computer Security and Forensics professional focused on cybersecurity, secure infrastructure, IT networking and practical security engineering. I combine academic training with self-directed lab work across Linux, Windows, network troubleshooting, digital forensics and programming. My goal is to contribute to dependable security operations while continuing to deepen my technical practice.')
    section(doc, 'Technical capabilities')
    for label, value in [('Cybersecurity', 'Security fundamentals; phishing detection; vulnerability assessment concepts; threat analysis; security monitoring fundamentals; security hardening; incident response fundamentals'), ('IT networking', 'TCP/IP; IP addressing; ICMP; DNS and DHCP concepts; local network troubleshooting; network architecture documentation; traffic-analysis fundamentals; Wireshark'), ('Systems administration', 'Kali Linux; Linux command line; users and permissions fundamentals; Windows environments; OpenSSH; Windows Firewall; event-log awareness; virtual lab practice'), ('Digital forensics', 'Digital evidence handling; hash and integrity concepts; metadata awareness; file examination fundamentals; Autopsy; steganography analysis'), ('Programming and tooling', 'Python; Git; MQL5; Pine Script; Splunk fundamentals; structured debugging; data workflows; machine-learning experimentation')]:
        p = doc.add_paragraph(); p.paragraph_format.space_after = Pt(2); p.add_run(label + ': ').bold = True; p.add_run(value)
    section(doc, 'Cybersecurity and IT networking projects')
    role(doc, 'AI-Powered Anti-Phishing Email Security System with Steganography Detection', 'Kabarak University  |  In progress', ['Designing a machine-learning classifier for potentially malicious phishing emails.', 'Developing a steganography analysis component for hidden data in attachments and embedded images.', 'Documenting the problem, technical approach, implementation status and future evaluation rather than claiming unmeasured accuracy.'])
    role(doc, 'Two-Machine IT and Cybersecurity Home Lab', 'Independent lab  |  In progress', ['Kali Linux desktop and Windows laptop connected through the same router.', 'Practising network configuration, IP addressing, ICMP connectivity testing, OpenSSH setup and Windows Firewall controls.', 'Using the lab to understand secure remote administration, Linux/Windows interoperability and troubleshooting methodology.', 'Future work is kept separate from completed work; no unimplemented SIEM or Active Directory capability is presented as finished.'])
    role(doc, 'Network and security analysis direction', 'Structured learning and lab practice', ['Developing practical knowledge of packet inspection, host communication, security events and evidence-led investigation.', 'Building documentation habits around authorised lab work, reproducible troubleshooting and clear findings.'])
    section(doc, 'Supporting engineering projects')
    role(doc, 'AI-Powered Forex Trading System', 'Personal project  |  Completed', ['Architected a 12-phase workflow from data collection through LightGBM modelling, walk-forward validation and OANDA paper-trading integration.', 'Built local sentiment analysis with Ollama and applied systematic debugging and validation to complex technical workflows.'])
    role(doc, 'Algorithmic Trading Bots', 'Personal project  |  Completed', ['Developed rule-based MQL5 systems with multi-timeframe logic, diagnosed MT4/MT5 compile and runtime issues, and translated strategy logic into Pine Script indicators.', 'Included as supporting evidence of automation, debugging and structured problem-solving rather than as a cybersecurity credential.'])
    section(doc, 'Education')
    role(doc, 'BSc Computer Security and Forensics', 'Kabarak University', ['Academic direction: digital forensics, network security and computer security foundations.'])
    section(doc, 'Certification')
    role(doc, 'ISO/IEC 27701:2025 Lead Auditor', 'Mastermind Assurance  |  Issued 28 October 2026  |  Expires 27 October 2029', ['Certificate ID: 8mz 3doo85.'])
    section(doc, 'Self-directed technical development')
    bullet(doc, 'Linux command-line and exploitation fundamentals through OverTheWire Bandit and pwn.college.')
    bullet(doc, 'Practical study in defensive security, network analysis, digital forensics and secure lab documentation.')
    bullet(doc, 'Continuous improvement through project retrospectives, debugging notes and portfolio documentation.')
    section(doc, 'Career direction', 'Entry-level cybersecurity engineering, SOC analysis, IT networking, infrastructure security, digital forensics, systems administration and security analysis roles.')
    doc.save(OUT / 'Sammy_Moseti_Gesabo_CV.docx'); doc.save(OUT / 'CV (1).docx')

make_resume(); make_cv()
