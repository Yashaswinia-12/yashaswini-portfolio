import React, { useState } from "react";
import {
  ArrowUpRight, Github, Linkedin, Mail, Phone, MapPin, Download,
  Code2, BriefcaseBusiness, GraduationCap, ExternalLink, Menu, X,
  Terminal, Database, Cpu, ChevronRight
} from "lucide-react";

const profile = {
  name: "Yashaswini A",
  role: "Information Science & Engineering Graduate",
  email: "yashaswinia92@gmail.com",
  phone: "+91 6361011722",
  github: "https://github.com/Yashaswinia-12",
  linkedin: "https://www.linkedin.com/in/yashaswini-a-030282256/",
  location: "Bengaluru, India"
};

const skills = [
  { title: "Programming", icon: Code2, items: ["Java", "Python"] },
  { title: "Core Concepts", icon: Terminal, items: ["Object-Oriented Programming", "Data Structures", "Algorithms"] },
  { title: "Databases", icon: Database, items: ["SQL", "MongoDB"] },
  { title: "Frameworks & Technologies", icon: Cpu, items: ["Django", "React", "MERN Stack", "Arduino"] },
  { title: "Machine Learning", icon: BriefcaseBusiness, items: ["CNN", "ANN", "YOLO", "SVM", "KNN", "Logistic Regression"] },
  { title: "Tools", icon: Code2, items: ["Git", "GitHub", "VS Code", "Anaconda", "Jupyter Notebook"] }
];

const projects = [
  {
    number: "01",
    title: "Plant Leaf Disease Prediction",
    description: "A Django-based image classification system designed to identify healthy and diseased plant leaves. Implemented and compared machine learning models to classify leaf images and display prediction results.",
    stack: ["Django", "SVM", "KNN", "Logistic Regression"],
    url: "https://github.com/Yashaswinia-12/Plant-Leaf-Disease-Prediction",
    type: "Machine Learning"
  },
  {
    number: "02",
    title: "Atmospheric Gas Analyzer using MQ Series Sensors",
    description: "An air-quality monitoring prototype that detects CO, CH₄ and NO₂ using MQ series sensors. Arduino collects sensor readings, displays measurements on an LCD and triggers alerts when predefined thresholds are exceeded.",
    stack: ["Arduino", "MQ Sensors", "LCD"],
    url: "https://github.com/Yashaswinia-12/Atmospheric-Gas-Analyzer",
    type: "IoT / Embedded"
  },
  {
    number: "03",
    title: "Personal Finance Tracker & Budget Planner",
    description: "A full-stack expense management application with user authentication and transaction tracking across 10+ spending categories. Includes budgeting dashboards, savings-goal management and visual expense summaries.",
    stack: ["MongoDB", "Express.js", "React", "Node.js"],
    url: "https://github.com/Yashaswinia-12/Personal-Finance-Tracker",
    type: "Full Stack"
  },
  {
    number: "04",
    title: "AI-Based Food Nutrients Recommendation System",
    description: "A food image recognition project using CNN and YOLO to identify food items across 100+ categories. Nutritional data retrieval supports analysis of calories, proteins, fats and carbohydrates for personalized food recommendations.",
    stack: ["Python", "CNN", "YOLO", "Nutritionix API"],
    url: "https://github.com/Yashaswinia-12/AI-Food-Nutrient-Recommendation-System",
    type: "AI / Machine Learning"
  }
];

const experience = [
  {
    company: "Karunadu Technologies",
    role: "Python Programming and Applied Machine Learning Intern",
    date: "Feb 2026 — May 2026",
    place: "Bengaluru",
    bullets: [
      <>Applied <strong>Python programming</strong> concepts and implemented <strong>machine learning algorithms</strong> for classification and prediction tasks.</>,
      <>Developed <strong>Django applications</strong> involving backend logic, HTML interfaces, URL routing and application navigation.</>,
      <>Built <strong>binary and multi-class image classification models</strong> using ANN and CNN techniques.</>
    ]
  },
  {
    company: "Pawzz Foundation",
    role: "Project Management Intern",
    date: "Feb 2025 · 2 weeks",
    place: "",
    bullets: [
      <>Supported project planning, coordination and fundraising initiatives focused on animal welfare activities.</>,
      <>Assisted with donor outreach and fundraising communication; received a <strong>Letter of Recommendation</strong>.</>
    ]
  }
];

const education = [
  { name: "Acharya Institute of Technology (VTU)", qualification: "B.E. in Information Science and Engineering", date: "May 2026", detail: "CGPA: 8.6" },
  { name: "Venkat International School", qualification: "Higher Secondary Education · CBSE", date: "Apr 2022", detail: "Class 11 and 12" },
  { name: "Venus International School", qualification: "Secondary Education · ICSE", date: "Apr 2020", detail: "Up to Class 10" }
];

const certifications = [
  { name: "Java Full Stack Development Training", issuer: "TNS India Foundation", date: "2026", detail: "One-month training covering Core Java, backend development, technical sessions and interview preparation." },
  { name: "Cloud Engineer Track", issuer: "Google Cloud Career Launchpad", date: "2025", detail: "Learning in cloud computing, Google Cloud services, infrastructure and deployment fundamentals." },
  { name: "Google Cybersecurity Professional Certificate", issuer: "Google · Coursera", date: "2024", detail: "Eight-course certificate covering cybersecurity, network security, SQL, Python and security risk management." }
];

function SectionHeading({ eyebrow, title, intro }) {
  return <div className="section-heading">
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {intro && <p>{intro}</p>}
  </div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = ["About", "Skills", "Projects", "Experience", "Education", "Contact"];
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">Y</span><span>Yashaswini<span className="brand-dot">.</span></span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {nav.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
          <a className="nav-cta" href={`mailto:${profile.email}`}>Let's talk <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="pulse"></span> OPEN TO ENTRY-LEVEL OPPORTUNITIES</div>
            <p className="hero-kicker">Hello, I'm</p>
            <h1>Yashaswini <span>A.</span></h1>
            <h2>Building practical solutions through <em>software</em>.</h2>
            <p className="hero-description">2026 Information Science and Engineering graduate with hands-on exposure to Python, Java and software development through technical training and academic projects. Interested in application development and problem-solving.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
              <a className="button button-secondary" href="mailto:yashaswinia92@gmail.com">Contact me <Mail size={16}/></a>
            </div>
            <div className="hero-socials">
              <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a>
              <span><MapPin size={16}/> {profile.location}</span>
            </div>
          </div>
          <div className="hero-visual" aria-label="Decorative code illustration">
            <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
            <div className="visual-card">
              <div className="visual-top"><span></span><span></span><span></span><small>developer.profile</small></div>
              <div className="code-content">
                <p><span className="code-purple">const</span> developer = {'{'}</p>
                <p className="indent"><span className="code-blue">name</span>: <span className="code-green">'Yashaswini A'</span>,</p>
                <p className="indent"><span className="code-blue">degree</span>: <span className="code-green">'ISE · 2026'</span>,</p>
                <p className="indent"><span className="code-blue">focus</span>: [</p>
                <p className="indent2"><span className="code-green">'Software Development'</span>,</p>
                <p className="indent2"><span className="code-green">'AI / ML'</span></p>
                <p className="indent">],</p>
                <p className="indent"><span className="code-blue">learning</span>: <span className="code-green">'Always'</span></p>
                <p>{'}'};</p>
                <div className="code-cursor"></div>
              </div>
              <div className="visual-footer"><span><span className="status-dot"></span> Ready to build</span><span>01 / 04</span></div>
            </div>
            <div className="floating-chip chip-java"><span className="chip-icon">J</span> Java</div>
            <div className="floating-chip chip-python"><span className="chip-icon">Py</span> Python</div>
            <div className="floating-chip chip-react"><span className="chip-icon">⚛</span> React</div>
          </div>
          <a className="scroll-cue" href="#about"><span></span> SCROLL TO EXPLORE</a>
        </section>

        <section className="about section-wrap section-block" id="about">
          <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Curious by nature. Focused on building." intro="I enjoy turning ideas and problem statements into practical, working solutions." />
          <div className="about-grid">
            <div className="about-main">
              <p className="large-copy">I’m an Information Science and Engineering graduate from <strong>Acharya Institute of Technology</strong>, with an interest in software development, full-stack technologies and applied machine learning.</p>
              <p>Through technical training and academic projects, I have worked with programming, web frameworks, databases and machine learning techniques. I value continuous learning, clear problem-solving and building applications that address real needs.</p>
              <a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={16}/></a>
            </div>
            <div className="about-facts">
              <div className="fact"><span className="fact-number">2026</span><span>Graduate</span></div>
              <div className="fact"><span className="fact-number">8.6</span><span>CGPA</span></div>
              <div className="fact"><span className="fact-number">04</span><span>Academic projects</span></div>
              <div className="fact"><span className="fact-number">02</span><span>Internship experiences</span></div>
            </div>
          </div>
        </section>

        <section className="skills-section section-block" id="skills">
          <div className="section-wrap">
            <SectionHeading eyebrow="WHAT I WORK WITH" title="Technical skills" intro="Tools and technologies I have explored through learning, training and project work." />
            <div className="skills-grid">
              {skills.map(({title, icon: Icon, items}) => <article className="skill-card" key={title}>
                <div className="skill-icon"><Icon size={19}/></div>
                <h3>{title}</h3>
                <div className="skill-tags">{items.map(item => <span key={item}>{item}</span>)}</div>
              </article>)}
            </div>
          </div>
        </section>

        <section className="section-wrap section-block" id="projects">
          <SectionHeading eyebrow="SELECTED WORK" title="Projects that put ideas into practice." intro="A selection of academic and personal projects demonstrating my experience across software, machine learning and embedded systems." />
          <div className="projects-grid">
            {projects.map(project => <article className="project-card" key={project.number}>
              <div className="project-top"><span className="project-number">{project.number}</span><span className="project-type">{project.type}</span></div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-stack">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
              <a className="project-link" href={project.url} target="_blank" rel="noreferrer">View source code <ArrowUpRight size={16}/></a>
            </article>)}
          </div>
        </section>

        <section className="experience-section section-block" id="experience">
          <div className="section-wrap">
            <SectionHeading eyebrow="LEARNING THROUGH EXPERIENCE" title="Internship experience" intro="Practical exposure gained through technical training and project coordination." />
            <div className="timeline">
              {experience.map((item, index) => <article className="timeline-item" key={item.company}>
                <div className="timeline-marker">{index + 1}</div>
                <div className="timeline-content">
                  <div className="timeline-heading"><div><h3>{item.company}</h3><p>{item.role}</p></div><span className="date-pill">{item.date}</span></div>
                  {item.place && <span className="muted-location"><MapPin size={13}/> {item.place}</span>}
                  <ul>{item.bullets.map((bullet, i) => <li key={i}>{bullet}</li>)}</ul>
                </div>
              </article>)}
            </div>
          </div>
        </section>

        <section className="section-wrap section-block" id="education">
          <SectionHeading eyebrow="ACADEMIC BACKGROUND" title="Education & certifications" intro="My academic foundation and additional technical learning." />
          <div className="education-cert-grid">
            <div className="subsection">
              <h3 className="subsection-title"><GraduationCap size={19}/> Education</h3>
              {education.map((item, i) => <div className="education-item" key={item.name}>
                <div className="education-dot"></div>
                <div className="education-info"><div className="education-title"><h4>{item.name}</h4><span>{item.date}</span></div><p>{item.qualification}</p><small>{item.detail}</small></div>
              </div>)}
            </div>
            <div className="subsection">
              <h3 className="subsection-title"><BriefcaseBusiness size={18}/> Certifications & training</h3>
              {certifications.map(item => <div className="cert-item" key={item.name}>
                <div className="cert-date">{item.date}</div>
                <div><h4>{item.name}</h4><span className="cert-issuer">{item.issuer}</span><p>{item.detail}</p></div>
              </div>)}
            </div>
          </div>
        </section>

        <section className="contact-section section-block" id="contact">
          <div className="section-wrap contact-inner">
            <SectionHeading eyebrow="GET IN TOUCH" title="Let's build something meaningful." intro="I’m interested in entry-level opportunities in software development and related engineering roles. Feel free to connect." />
            <div className="contact-actions">
              <a className="button button-primary" href={`mailto:${profile.email}`}> <Mail size={17}/> Send me an email <ArrowUpRight size={16}/></a>
              <a className="button button-secondary" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> Connect on LinkedIn</a>
            </div>
            <div className="contact-details">
              <a href={`mailto:${profile.email}`}><Mail size={16}/>{profile.email}</a>
              <a href={`tel:${profile.phone.replaceAll(" ", "")}`}><Phone size={16}/>{profile.phone}</a>
              <span><MapPin size={16}/>{profile.location}</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home"><span className="brand-mark">Y</span><span>Yashaswini<span className="brand-dot">.</span></span></a>
        <p>Designed and built with care · © {new Date().getFullYear()} Yashaswini A</p>
        <div><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a></div>
      </footer>
    </div>
  );
}

export default App;