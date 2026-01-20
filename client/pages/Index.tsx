import { useState, useEffect, useRef } from "react";
import FloatingParticles from "../components/FloatingParticles";

const projects = [
  {
    title: "Health Monitoring System Dashboard",
    subtitle: "Clinician Dashboard",
    description:
      "Comprehensive healthcare dashboard focusing on reducing the hassle of patients and clinicians.",
    tags: [
      "Healthcare",
      "Dashboard",
      "Patients",
      "Clinician",
      "Health Monitoring System",
    ],
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4dea029619d64c5c95c3070ae0fffe0b%2F34390abdeef3408d84dccbcb1c7417fc?format=webp&width=800",
    url: "https://www.notion.so/Health-Monitoring-System-Dashboard-2e28b106089e80b6acedf788bbd3a400?source=copy_link",
  },
  {
    title: "PayFi - Payment & Finance App",
    subtitle: "Fintech Platform",
    description: "Modern application for seamless payment processing",
    tags: ["Fintech", "Payment", "App"],
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4dea029619d64c5c95c3070ae0fffe0b%2F9020757546914310a6118cb5f76a8a92",
    url: "https://www.notion.so/PayFi-Smart-Bill-Payment-Dashboard-2c78b106089e8088b417e84d377e5a49?source=copy_link",
  },
  {
    title: "CareBridge - Hospital Admin Dashboard",
    subtitle: "Healthcare Management",
    description:
      "Comprehensive dashboard for streamlining administrative operations",
    tags: ["Dashboard", "Healthcare", "Admin"],
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4dea029619d64c5c95c3070ae0fffe0b%2F31b50c7497fb4e23b90b239c0998c943",
    url: "https://www.notion.so/CareBridge-Hospital-Admin-Dashboard-2c78b106089e805ca9bbfb0f31ef7e2d?source=copy_link",
  },
  {
    title: "iCreative Learning",
    subtitle: "Educational Platform",
    description: "Creative learning programs for elementary students",
    tags: ["Education", "Learning", "Web App"],
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4dea029619d64c5c95c3070ae0fffe0b%2Fc1ade894307660928596a906407fdae8a8f7109f",
    url: "https://icreativelearning.netlify.app/",
  },
  {
    title: "Swiggy vs Zomato: Same Problem, Two very different UX philosphies",
    subtitle: "UX case study from everyday food ordering",
    description:
      "How do Swiggy and Zomato, despite solving the same user problem, create different decision-making experiences through UI and UX?",
    tags: ["Comparison", "E-commerce", "Food Delivering Service", "Cards Design"],
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4dea029619d64c5c95c3070ae0fffe0b%2F663e2d06c81246a0bba97b7476949408?format=webp&width=800",
    url: "https://www.notion.so/Swiggy-vs-Zomato-Same-Problem-Two-Very-Different-UX-Philosophies-2ee8b106089e8012aab2d67cd140b22b?source=copy_link",
  },
];

const motionVideos: { title: string; embedUrl: string }[] = [
  {
    title: "Motion Graphic 1",
    embedUrl: "https://player.vimeo.com/video/1117336115",
  },
  {
    title: "Motion Graphic 2",
    embedUrl: "https://player.vimeo.com/video/1117336204",
  },
  {
    title: "Motion Graphic 3",
    embedUrl: "https://player.vimeo.com/video/1117336359",
  },
  {
    title: "Motion Graphic 4",
    embedUrl: "https://player.vimeo.com/video/1117336620",
  },
];

const skills = [
  { name: "Product Design", level: 95 },
  { name: "Motion Design", level: 90 },
  { name: "UX Research", level: 88 },
  { name: "Prototyping", level: 92 },
  { name: "Design Systems", level: 85 },
  { name: "User Testing", level: 87 },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [autoScroll, setAutoScroll] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isDark, setIsDark] = useState(true);
  const motionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let raf = 0;
    const step = () => {
      const el = motionRef.current;
      if (el && autoScroll && el.scrollWidth > el.clientWidth) {
        el.scrollLeft += 0.6;
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1) {
          el.scrollLeft = 0;
        }
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [autoScroll]);

  useEffect(() => {
    const ids = ["home", "about", "projects", "motion", "skills", "contact"];
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0.2, 0.6, 1] },
    );

    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, pct)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.style.colorScheme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.colorScheme = "light";
    }
  }, [isDark]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-glass-dark dark:bg-glass-dark light:bg-white relative overflow-x-hidden transition-colors duration-300">
      {isDark && <FloatingParticles />}

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 h-1 w-full z-[60] bg-glass-surface/30">
        <div
          className="h-full bg-glass-accent transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-glass-dark/50 border-b border-glass-border/20 dark:bg-glass-dark/60">
        <nav className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 group"
          >
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-glass-accent text-glass-dark font-bold text-xs">
              AS
            </span>
            <span className="text-sm font-semibold text-glass-text hidden sm:inline group-hover:text-glass-accent transition-colors">
              Ashutosh
            </span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {[
              { id: "about", label: "About" },
              { id: "projects", label: "Work" },
              { id: "motion", label: "Motion" },
              { id: "skills", label: "Skills" },
              { id: "contact", label: "Contact" },
            ].map((nav) => (
              <button
                key={nav.id}
                onClick={() => scrollToSection(nav.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSection === nav.id
                    ? "bg-glass-accent text-glass-dark"
                    : "text-glass-muted hover:text-glass-text hover:bg-glass-surface/50"
                }`}
              >
                {nav.label}
              </button>
            ))}
          </div>

          <button
            aria-label="Toggle theme"
            onClick={() => setIsDark((v) => !v)}
            className="w-9 h-9 rounded-lg flex items-center justify-center bg-glass-surface border border-glass-border/30 text-glass-text hover:text-glass-accent transition-colors"
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <circle cx="12" cy="12" r="5" />
                <path
                  d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m5.08 5.08l4.24 4.24M1 12h6m6 0h6M4.22 19.78l4.24-4.24m5.08-5.08l4.24-4.24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <button
            aria-label="Toggle menu"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center bg-glass-surface border border-glass-border/30 text-glass-text"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </nav>

        {isMobileMenuOpen && (
          <div className="md:hidden px-4 py-4 border-t border-glass-border/10 bg-glass-surface/50">
            <div className="flex flex-col gap-2">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "projects", label: "Work" },
                { id: "motion", label: "Motion" },
                { id: "skills", label: "Skills" },
                { id: "contact", label: "Contact" },
              ].map((nav) => (
                <button
                  key={nav.id}
                  onClick={() => {
                    scrollToSection(nav.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-all text-sm font-medium ${
                    activeSection === nav.id
                      ? "bg-glass-accent text-glass-dark"
                      : "text-glass-text hover:bg-glass-surface/50"
                  }`}
                >
                  {nav.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 pt-32 pb-20 relative"
      >
        <div className="container mx-auto max-w-5xl grid lg:grid-cols-2 gap-16 items-center">
          {/* Hero Content */}
          <div
            className="space-y-12"
            style={{ animation: "fade-in-left 0.8s ease-out forwards" }}
          >
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-xs font-medium text-glass-muted uppercase tracking-[0.15em]">
                  UX / Product Designer
                </span>
              </div>
              <h1 className="text-7xl sm:text-8xl font-900 leading-[0.9] tracking-tight text-glass-text">
                Ashutosh
                <br />
                <span className="text-glass-accent">Sinha</span>
              </h1>
              <p className="text-lg text-glass-muted leading-relaxed max-w-md font-light">
                I design thoughtful digital experiences that merge aesthetic
                excellence with functional innovation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://drive.google.com/file/d/1Dtnw3oqgNISNtuvN6vT2UNUvJ5uFI-FH/view"
                target="_blank"
                rel="noopener noreferrer"
                className="shine-on-hover inline-flex items-center justify-center bg-glass-accent text-glass-dark font-semibold px-8 py-3 rounded-lg hover:bg-glass-accent transition-colors"
              >
                Download CV
              </a>
              <a
                href="mailto:ashusinha543@gmail.com"
                target="_blank"
                className="inline-flex items-center justify-center border border-glass-accent/50 text-glass-text px-8 py-3 rounded-lg hover:bg-glass-surface/50 transition-colors font-medium cursor-pointer"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div
            className="relative"
            style={{
              animation: "fade-in-right 0.8s ease-out 0.2s forwards",
              opacity: 0,
            }}
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-glass-border/20">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4dea029619d64c5c95c3070ae0fffe0b%2Fa4aefdb2c86f46308d02098427ded9d2?format=webp&width=1000"
                alt="Ashutosh Sinha"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-glass-dark/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-20">
            <div className="w-12 h-1 bg-glass-accent mb-6" />
            <h2 className="text-5xl sm:text-6xl font-900 text-glass-text mb-8 leading-tight">
              About my work
            </h2>
            <p className="text-xl text-glass-muted leading-relaxed mb-6 font-light">
              I'm passionate about creating digital experiences that balance
              aesthetic beauty with intuitive functionality. My approach
              combines deep user research, iterative design, and attention to
              detail.
            </p>
            <p className="text-xl text-glass-muted leading-relaxed font-light">
              Specializing in product design, motion graphics, and design
              systems, I help teams craft digital products that resonate with
              users and achieve business goals.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                title: "Research",
                desc: "Understanding user needs through deep research",
              },
              {
                title: "Design",
                desc: "Crafting thoughtful visual and interaction design",
              },
              {
                title: "Motion",
                desc: "Adding life through meaningful animation",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="space-y-3"
                style={{
                  animation: `fade-in-up 0.8s ease-out ${0.2 + idx * 0.1}s forwards`,
                  opacity: 0,
                }}
              >
                <h3 className="text-lg font-semibold text-glass-text">
                  {item.title}
                </h3>
                <p className="text-sm text-glass-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-20">
            <div className="w-12 h-1 bg-glass-accent mb-6" />
            <h2 className="text-5xl sm:text-6xl font-900 text-glass-text">
              Featured Work
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, idx) => (
              <a
                key={idx}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer"
                style={{
                  animation: `fade-in-up 0.8s ease-out ${0.2 + idx * 0.1}s forwards`,
                  opacity: 0,
                }}
              >
                <div className="space-y-4">
                  <div className="relative overflow-hidden rounded-lg border border-glass-border/20 group-hover:border-glass-accent/40 transition-colors">
                    <div className="aspect-video bg-glass-surface overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-baseline gap-3">
                      <h3 className="text-xl font-semibold text-glass-text group-hover:text-glass-accent transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-sm text-glass-muted">
                      {project.subtitle}
                    </p>
                    <p className="text-sm text-glass-muted leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-3">
                      {project.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="text-xs px-2 py-1 rounded bg-glass-surface text-glass-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Motion Section */}
      <section id="motion" className="py-32 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-20">
            <div className="w-12 h-1 bg-glass-accent-yellow mb-6" />
            <h2 className="text-5xl sm:text-6xl font-900 text-glass-text">
              Motion Work
            </h2>
          </div>

          <div
            ref={motionRef}
            className="no-scrollbar overflow-x-auto"
            onMouseEnter={() => setAutoScroll(false)}
            onMouseLeave={() => setAutoScroll(true)}
          >
            <div className="flex gap-6 pb-4">
              {motionVideos.map((video, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-96 border border-glass-border/20 rounded-lg overflow-hidden hover:border-glass-accent/40 transition-colors"
                >
                  <div className="aspect-video">
                    <iframe
                      src={video.embedUrl}
                      title={video.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  <div className="px-4 py-3 bg-glass-surface/50 text-sm text-glass-text font-medium">
                    {video.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-20">
            <div className="w-12 h-1 bg-glass-accent-purple mb-6" />
            <h2 className="text-5xl sm:text-6xl font-900 text-glass-text">
              Expertise
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-12">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="space-y-3"
                style={{
                  animation: `fade-in-up 0.8s ease-out ${0.2 + idx * 0.1}s forwards`,
                  opacity: 0,
                }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-semibold text-glass-text">
                    {skill.name}
                  </span>
                  <span className="text-sm text-glass-muted">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-1 bg-glass-surface rounded-full overflow-hidden">
                  <div
                    className="h-full bg-glass-accent transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-16">
            <div className="w-12 h-1 bg-glass-accent mb-6" />
            <h2 className="text-5xl sm:text-6xl font-900 text-glass-text mb-6">
              Let's Connect
            </h2>
            <p className="text-xl text-glass-muted font-light">
              Open to new projects, collaborations, and opportunities to create
              remarkable digital experiences.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {[
              {
                label: "Email",
                value: "ashusinha543@gmail.com",
                href: "mailto:ashusinha543@gmail.com",
              },
              {
                label: "LinkedIn",
                value: "linkedin.com/in/ashutoshsinha",
                href: "https://www.linkedin.com/in/ashutoshsinha/",
              },
              {
                label: "Behance",
                value: "behance.net/ashutoshsinha1",
                href: "https://www.behance.net/ashutoshsinha1",
              },
              { label: "Location", value: "Bangalore, India", href: "#" },
            ].map((contact, idx) => (
              <a
                key={idx}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  contact.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="border border-glass-border/20 rounded-lg p-6 hover:border-glass-accent/40 hover:bg-glass-surface/50 transition-all group"
              >
                <div className="text-xs text-glass-muted uppercase tracking-wider mb-2 font-medium">
                  {contact.label}
                </div>
                <div className="text-lg text-glass-text group-hover:text-glass-accent transition-colors font-medium">
                  {contact.value}
                </div>
              </a>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://drive.google.com/file/d/1Dtnw3oqgNISNtuvN6vT2UNUvJ5uFI-FH/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-glass-accent text-glass-dark font-semibold px-8 py-4 rounded-lg hover:bg-glass-accent transition-colors"
            >
              Download Full Portfolio CV
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-glass-border/10">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm text-glass-muted">
            © 2024 Ashutosh Sinha. Designed with intention.
          </p>
        </div>
      </footer>
    </div>
  );
}
