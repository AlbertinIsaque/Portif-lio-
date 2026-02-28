import { useState, useEffect, useRef } from "react";
import "./App.css";

const skillCategories = [
  {
    title: "Back-end",
    skills: ["C#", "ASP.NET Core"],
  },
  {
    title: "Front-end",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Banco de Dados",
    skills: ["SQL Server",],
  },
  {
    title: "Ferramentas",
    skills: ["Git", "GitHub"],
  },
];

const projects = [
  {
    num: "01",
    title: "Hair Day / Sistema de Agendamento",
    desc: "Aplicação web desenvolvida com ASP.NET Core MVC e MySQL para gerenciamento de agendamentos em salão de beleza. Estruturada no padrão Model-View-Controller, com validação de disponibilidade de horários e integração com banco de dados relacional.",
    tags: ["C#", "ASP.NET Core MVC", "Razor", "MySQL"],
    github: "https://github.com/ICEI-PUC-Minas-PMV-ADS/HairDay.git",
  },
  {
    num: "02",
    title: "GastroBot / API de Geração Inteligente de Receitas",
    desc: "API REST desenvolvida em grupo com ASP.NET Core integrada à API do Gemini para geração dinâmica de receitas. Contribuí com a implementação das operações de gerenciamento de receitas e modelagem das entidades do sistema.",
    tags: ["C#", "ASP.NET Core", "Entity Framework", "Azure SQL", "REST API", "Gemini API"],
    github: "https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-2-e3-proj-mov-t2-gastrobot.git",
  },

];

const contactLinks = [
  {
    label: "Email",
    value: "albertiniisaque@gmail.com",
    href: "mailto:albertiniisaque@gmail.com?subject=Contato%20via%20Portfólio&body=Olá%20Isaque",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/IsaqueAlbertini",
    href: "https://www.linkedin.com/in/isaque-albertini-silva-oliveira-767907301/",
  },
  {
    label: "GitHub",
    value: "github.com/AlbertinIsaque",
    href: "https://github.com/AlbertinIsaque",
  },
];

function useFadeIn() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function FadeIn({ children, delay = 0 }) {
  const ref = useFadeIn();
  return (
    <div ref={ref} className="fade-in" style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const close = () => setMenuOpen(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    close();
  };

  return (
    <div style={{ width: "100%", minHeight: "100vh", background: "#080808" }}>

      {/* NAV */}
      <nav>
        <div className="container">
          <div className="nav-inner">
            <a href="#inicio" className="nav-logo">isaque<span>.</span>dev</a>
            <ul className="nav-links">
              <li><a href="#" onClick={(e) => { e.preventDefault(); scrollTo("sobre"); }}>Sobre</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); scrollTo("skills"); }}>Skills</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); scrollTo("projetos"); }}>Projetos</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); scrollTo("contato"); }}>Contato</a></li>
            </ul>
            <button
              className={`hamburger ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#" onClick={(e) => { e.preventDefault(); scrollTo("sobre"); }}>Sobre</a>
        <a href="#" onClick={(e) => { e.preventDefault(); scrollTo("skills"); }}>Skills</a>
        <a href="#" onClick={(e) => { e.preventDefault(); scrollTo("projetos"); }}>Projetos</a>
        <a href="#" onClick={(e) => { e.preventDefault(); scrollTo("contato"); }}>Contato</a>
      </div>

      {/* HERO */}
      <section className="hero" id="inicio">
        <div className="container">
          <div className="hero-eyebrow">Desenvolvedor Back-end</div>
          <h1>Isaque Albertini.</h1>
          <p className="hero-desc">
            Estudante de Análise e Desenvolvimento de Sistemas com foco em Back-end .NET.
            Desenvolvo APIs REST utilizando C#, ASP.NET Core e bancos relacionais.
          </p>
          <div className="hero-actions">
            <button onClick={() => scrollTo("projetos")} className="btn-primary">Ver projetos</button>
            <button onClick={() => scrollTo("contato")} className="btn-outline">Contato</button>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="scroll-line" />
          scroll
        </div>
      </section>

      {/* SOBRE */}
      <div className="divider" />
      <section id="sobre">
        <div className="container">
          <FadeIn>
            <div className="section-label">Sobre mim</div>
            <div className="section-title">Quem sou eu.</div>
          </FadeIn>
          <div className="about-grid">
            <FadeIn delay={100}>
              <div className="about-text">
                <p>
                  Olá, sou estudante de Análise e Desenvolvimento de Sistemas na PUC Minas com foco em Back-end no ecossistema .NET. Direciono meus estudos para o desenvolvimento de APIs REST utilizando C# e ASP.NET Core, com atenção à organização do código e à separação de responsabilidades.
                </p>
                <p>
                  Tenho trabalhado na consolidação de fundamentos como arquitetura em camadas, modelagem de bancos relacionais e boas práticas no desenvolvimento de aplicações web. Atualmente, estou aprofundando meus conhecimentos em testes automatizados e na estruturação de projetos mais sustentáveis e escaláveis.
                </p>
                <p>
                  Busco oportunidades onde eu possa aplicar esses conhecimentos em ambiente real e evoluir como desenvolvedor Back-end.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <div className="divider" />
      <section id="skills">
        <div className="container">
          <FadeIn>
            <div className="section-label">Habilidades</div>
            <div className="section-title">O que uso no<br />dia a dia.</div>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="skills-categories">
              {skillCategories.map((cat) => (
                <div key={cat.title} className="skill-category">
                  <div className="skill-category-title">{cat.title}</div>
                  <div className="skill-list">
                    {cat.skills.map((s) => (
                      <div key={s} className="skill-item">{s}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PROJETOS */}
      <div className="divider" />
      <section id="projetos">
        <div className="container">
          <FadeIn>
            <div className="section-label">Trabalhos selecionados</div>
            <div className="section-title">Projetos.</div>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="projects-grid">
              {projects.map((p) => (
                <div key={p.num} className="project-card">
                  <div className="project-num">{p.num} / 0{projects.length}</div>
                  <div className="project-title">{p.title}</div>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-footer">
                    <div className="project-tags">
                      {p.tags.map((t) => (
                        <span key={t} className="project-tag">{t}</span>
                      ))}
                    </div>
                    <a href={p.github} target="_blank" rel="noreferrer" className="project-arrow" onClick={(e) => e.stopPropagation()} title="Ver no GitHub">↗</a>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CONTATO */}
      <div className="divider" />
      <section id="contato">
        <div className="container">
          <FadeIn>
            <div className="section-label">Contato</div>
            <div className="section-title">Vamos<br />conversar.</div>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="contact-text">
              Tenho foco em desenvolvimento Back-end com .NET e estou aberto a oportunidades de estágio na área de desenvolvimento de software. Se quiser conversar sobre projetos ou oportunidades, fico à disposição.
            </p>
            <div className="contact-links">
              {contactLinks.map(({ label, value, href }) => (
                <a key={label} href={href} className="contact-link" target="_blank" rel="noreferrer">
                  <div className="contact-link-icon">
                    {label === "Email" ? "✉" : label === "LinkedIn" ? "⬡" : "◈"}
                  </div>
                  {value}
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="footer-inner">
            <div className="footer-copy">
              © 2025 <span>Isaque Albertini</span> — Todos os direitos reservados.
            </div>
            <div className="footer-socials">
              <a href="https://github.com/AlbertinIsaque" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/isaque-albertini-silva-oliveira-767907301/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}