import { useState, useEffect, useRef } from "react";
import FloatingParticles from "../components/FloatingParticles";

const projects = [
  {
    title: "CareBridge - Hospital Admin Dashboard",
    description:
      "Comprehensive hospital management dashboard for streamlining administrative operations and improving efficiency",
    tags: ["Dashboard", "Healthcare", "Admin"],
    color: "blue",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4dea029619d64c5c95c3070ae0fffe0b%2F386148064ead4e69969488f9274f6dc3",
    overlay:
      "https://cdn.builder.io/api/v1/image/assets%2F4dea029619d64c5c95c3070ae0fffe0b%2F563a012edd9a4b6fa7bea50e576f56f4",
    url: "https://www.behance.net/gallery/237581675/CareBridge-Hospital-Admin-dashboard",
  },
  {
    title: "PayFi - Payment & Finance App",
    description:
      "Modern fintech application for seamless payment processing and financial management",
    tags: ["Fintech", "Payment", "App"],
    color: "green",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4dea029619d64c5c95c3070ae0fffe0b%2Fb94e510cf1c742a189affd01fad985a2",
    overlay:
      "https://cdn.builder.io/api/v1/image/assets%2F4dea029619d64c5c95c3070ae0fffe0b%2F9580ee82953647f7ab1451cae71b3baf",
    url: "https://www.behance.net/gallery/237448291/PayFi-Payment-and-Finance-Management-App",
  },
  {
    title: "Think41 - Website Redesign",
    description:
      "Interactive landing page redesign delivering engaging user experiences and modern web design",
    tags: ["Web Design", "Landing Page", "Interactive"],
    color: "purple",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4dea029619d64c5c95c3070ae0fffe0b%2F33b4ca4a9bd649caac069be599d5c37e",
    url: "https://www.behance.net/gallery/212201041/Think41-Website-Redesign-An-interactive-landing-page",
  },
  {
    title: "iCreative Learning",
    description:
      "Empowering elementary students through creative, fun, and effective learning programs with engaging interactive platform",
    tags: ["Education", "Learning", "Web App"],
    color: "blue",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4dea029619d64c5c95c3070ae0fffe0b%2Fc1ade894307660928596a906407fdae8a8f7109f",
    url: "https://icreativelearning.netlify.app/",
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
  {
    title: "Motion Graphic 5",
    embedUrl: "https://player.vimeo.com/video/1117336683",
  },
  {
    title: "Motion Graphic 6",
    embedUrl: "https://player.vimeo.com/video/1117336799",
  },
  {
    title: "Motion Graphic 7",
    embedUrl: "https://player.vimeo.com/video/1117337188",
  },
  {
    title: "Portfolio Reel 2023",
    embedUrl: "https://www.behance.net/embed/project/180502603?ilo0=1",
  },
];

const skills = [
  { name: "Product Design", level: 95, color: "blue" },
  { name: "Motion Design", level: 90, color: "green" },
  { name: "UX Research", level: 88, color: "purple" },
  { name: "Prototyping", level: 92, color: "blue" },
  { name: "Design Systems", level: 85, color: "green" },
  { name: "User Testing", level: 87, color: "purple" },
];

const getColorClasses = (color: string) => {
  switch (color) {
    case "blue":
      return "from-glass-accent/20 to-glass-accent/5 border-glass-accent/30 text-glass-accent";
    case "green":
      return "from-glass-accent-light/15 to-glass-accent/5 border-glass-accent/30 text-glass-accent";
    case "purple":
      return "from-glass-accent-dim/20 to-glass-accent-dim/5 border-glass-accent-dim/30 text-glass-accent-dim";
    default:
      return "from-glass-accent/20 to-glass-accent/5 border-glass-accent/30 text-glass-accent";
  }
};

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [autoScroll, setAutoScroll] = useState(true);
  const [showGetMobile, setShowGetMobile] = useState(false);
  const [showFollowMobile, setShowFollowMobile] = useState(false);
  const [progress, setProgress] = useState(0);
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-glass-dark relative overflow-x-hidden">
      {/* Floating Particles Background */}
      <FloatingParticles />

      {/* Scroll progress bar */}
      <div
        aria-hidden
        className="fixed top-0 left-0 h-1 w-full z-[60] bg-glass-surface/30 backdrop-blur"
      >
        <div
          className="h-full bg-gradient-to-r from-glass-accent via-glass-accent-light to-transparent glow-warm"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Top Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-glass-dark/50 border-b border-glass-border/20">
        <nav className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 group"
          >
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-glass-accent to-glass-accent-light text-white font-bold text-xs shadow glow-warm group-hover:scale-110 transition-transform">
              AS
            </span>
            <span className="text-sm font-medium text-glass-text hidden sm:inline group-hover:text-glass-accent transition-colors">
              Ashutosh Sinha
            </span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {[
              { id: "about", label: "About" },
              { id: "projects", label: "Projects" },
              { id: "motion", label: "Motion" },
              { id: "skills", label: "Skills" },
              { id: "contact", label: "Contact" },
            ].map((nav) => (
              <button
                key={nav.id}
                onClick={() => scrollToSection(nav.id)}
                className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all smooth-transition ${
                  activeSection === nav.id
                    ? "bg-glass-accent text-glass-dark glow-warm"
                    : "text-glass-muted hover:text-glass-accent hover:bg-glass-accent/10"
                }`}
              >
                {nav.label}
              </button>
            ))}
          </div>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="hidden sm:inline-flex shine-on-hover bg-gradient-to-r from-glass-accent to-glass-primary-accent text-glass-dark font-semibold text-xs sm:text-sm px-4 py-2 rounded-lg glow-warm shadow-lg hover:scale-105 transition-transform"
          >
            Get in Touch
          </a>

          <button
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center bg-glass-surface border border-glass-border/30 text-glass-text hover:text-glass-accent transition-colors"
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden px-4 py-2 border-t border-glass-border/20 bg-glass-dark/80 backdrop-blur">
            <div className="flex flex-col gap-1">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "projects", label: "Projects" },
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
                      ? "bg-glass-accent text-glass-dark glow-warm"
                      : "text-glass-text hover:text-glass-accent hover:bg-glass-accent/10"
                  }`}
                >
                  {nav.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="home"
        className="aurora min-h-screen flex items-center justify-center px-4 pt-32 pb-20 relative"
      >
        <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          <div className="space-y-8 text-center lg:text-left">
            {/* Label */}
            <div className="inline-flex items-center gap-2 justify-center lg:justify-start fade-in-left" style={{ animationDelay: "0.1s" }}>
              <div className="w-2 h-2 bg-glass-accent rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm text-glass-muted font-medium tracking-widest uppercase">
                Visual Designer
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4" style={{ animationDelay: "0.2s" }}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-900 leading-[1.1] tracking-tight break-words fade-in-up">
                <span className="text-gradient-premium">Ashutosh Sinha</span>
              </h1>
              <div className="h-1 w-20 bg-gradient-to-r from-glass-accent to-glass-primary-accent rounded-full line-expand" />
            </div>

            {/* Tagline */}
            <p className="text-lg sm:text-xl lg:text-2xl text-glass-muted leading-relaxed max-w-lg font-light fade-in-up" style={{ animationDelay: "0.3s" }}>
              Crafting <span className="text-glass-accent font-semibold">interactive experiences</span> that merge artistry with functionality
            </p>

            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 fade-in-up" style={{ animationDelay: "0.4s" }}>
              {[
                { label: "Email", value: "ashusinha543@gmail.com", icon: "✉" },
                { label: "Location", value: "Bangalore, India", icon: "📍" },
                { label: "LinkedIn", value: "linkedin.com/in/ashutoshsinha", icon: "💼" },
                { label: "Phone", value: "On Request", icon: "📞" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 group cursor-pointer"
                  style={{ animationDelay: `${0.5 + idx * 0.05}s` }}
                >
                  <span className="text-glass-accent text-lg">{item.icon}</span>
                  <div className="flex-1">
                    <div className="text-xs text-glass-muted/70 uppercase tracking-wider font-medium">
                      {item.label}
                    </div>
                    <div className="text-sm text-glass-text group-hover:text-glass-accent transition-colors">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-8 fade-in-up" style={{ animationDelay: "0.6s" }}>
              <a
                href="https://drive.google.com/file/d/1Dtnw3oqgNISNtuvN6vT2UNUvJ5uFI-FH/view"
                target="_blank"
                rel="noopener noreferrer"
                className="shine-on-hover bg-gradient-to-r from-glass-accent to-glass-primary-accent text-glass-dark font-semibold px-8 py-3 rounded-lg glow-warm shadow-lg text-center hover:scale-105 transition-transform"
              >
                Download CV
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="glass-card glass-gradient-border text-glass-text hover:text-glass-accent px-8 py-3 rounded-lg text-center transition-all smooth-transition"
              >
                Let's Talk
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 fade-in-up" style={{ animationDelay: "0.7s" }}>
              {[
                { value: "4+", label: "Yrs Experience" },
                { value: "25+", label: "Projects" },
                { value: "6+", label: "Case Studies" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="text-center p-3 bg-glass-surface/40 border border-glass-border/20 rounded-lg hover:border-glass-accent/40 transition-colors"
                >
                  <div className="text-xl sm:text-2xl font-900 text-glass-accent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-glass-muted mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center lg:justify-end fade-in-right" style={{ animationDelay: "0.3s" }}>
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-glass-accent/20 via-glass-primary-accent/10 to-transparent rounded-[2rem] blur-2xl opacity-60" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 glass-card glass-gradient-border card-depth rounded-2xl overflow-hidden tilt-hover">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F4dea029619d64c5c95c3070ae0fffe0b%2Fa4aefdb2c86f46308d02098427ded9d2?format=webp&width=1000"
                  alt="Ashutosh Sinha"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-glass-dark/40 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="mb-20 space-y-6 text-center">
            <div className="inline-flex items-center gap-3 justify-center mx-auto fade-in-up">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-glass-accent" />
              <span className="text-xs font-medium text-glass-accent uppercase tracking-wider">About</span>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-glass-accent" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-900 text-glass-text fade-in-up" style={{ animationDelay: "0.1s" }}>
              Designer & <span className="text-gradient-premium">Storyteller</span>
            </h2>
            <p className="text-lg text-glass-muted max-w-3xl mx-auto leading-relaxed font-light fade-in-up" style={{ animationDelay: "0.2s" }}>
              I create meaningful digital experiences that blend aesthetic excellence with user-centered design. Specializing in product design, motion graphics, and design systems.
            </p>
          </div>

          {/* About Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "📱",
                title: "Design Thinking",
                desc: "User-centric approach to solving complex design challenges",
              },
              {
                icon: "✨",
                title: "Creative Execution",
                desc: "Bringing ideas to life through compelling visual design",
              },
              {
                icon: "🚀",
                title: "Innovation",
                desc: "Pushing boundaries with cutting-edge design solutions",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="glass-card glass-gradient-border card-depth p-8 rounded-xl hover:scale-105 smooth-transition fade-in-up group"
                style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 smooth-transition">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-glass-text mb-2">
                  {item.title}
                </h3>
                <p className="text-glass-muted text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-4 relative">
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mb-20 space-y-6 text-center">
            <div className="inline-flex items-center gap-3 justify-center mx-auto fade-in-up">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-glass-accent" />
              <span className="text-xs font-medium text-glass-accent uppercase tracking-wider">Work</span>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-glass-accent" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-900 text-glass-text fade-in-up" style={{ animationDelay: "0.1s" }}>
              Featured <span className="text-gradient-premium">Projects</span>
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => {
              let spanClass = "";
              if (index === 0) {
                spanClass = "lg:col-span-2 lg:row-span-2";
              } else if (index === 3) {
                spanClass = "md:col-span-2 lg:col-span-2";
              }
              return (
                <div
                  key={index}
                  className={`${spanClass} group glass-card glass-gradient-border card-depth rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 tilt-hover fade-in-up`}
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div
                    className={`${index === 0 ? "aspect-square" : "aspect-video"} bg-gradient-to-br ${getColorClasses(project.color).split(" ")[0]} relative overflow-hidden`}
                  >
                    <div
                      className="w-full h-full backdrop-blur-sm group-hover:backdrop-blur-none transition-all duration-500 transform group-hover:scale-[1.05]"
                      style={
                        project.image
                          ? {
                              backgroundImage: `url(${project.image})`,
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "center",
                              backgroundSize: "cover",
                            }
                          : {}
                      }
                    />
                    <div
                      className="absolute inset-0"
                      style={
                        project.overlay
                          ? {
                              backgroundImage: `url(${project.overlay})`,
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "center",
                              backgroundSize: "cover",
                            }
                          : {
                              backgroundImage:
                                "linear-gradient(135deg, rgba(242, 97, 63, 0.2), rgba(155, 57, 34, 0))",
                            }
                      }
                    />
                    <div className="absolute top-3 right-3 text-xs px-3 py-1 rounded-full bg-glass-dark/70 backdrop-blur border border-glass-border/40 text-glass-accent font-medium">
                      {project.tags[0]}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-lg sm:text-xl font-bold text-glass-text group-hover:text-gradient-premium transition-all">
                    {project.title}
                  </h3>
                    <p className="text-sm text-glass-muted leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="text-xs px-2 py-1 rounded-md bg-glass-accent/10 border border-glass-accent/20 text-glass-accent font-medium hover:bg-glass-accent/20 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-glass-accent hover:text-gradient-premium transition-all text-sm font-semibold mt-4"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Motion Section */}
      <section id="motion" className="py-32 px-4 relative">
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mb-20 space-y-6 text-center">
            <div className="inline-flex items-center gap-3 justify-center mx-auto fade-in-up">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-glass-accent" />
              <span className="text-xs font-medium text-glass-accent uppercase tracking-wider">Motion</span>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-glass-accent" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-900 text-glass-text fade-in-up" style={{ animationDelay: "0.1s" }}>
              Motion <span className="text-gradient-premium">Graphics</span>
            </h2>
          </div>

          {/* Motion Carousel */}
          <div
            ref={motionRef}
            className="no-scrollbar overflow-x-auto select-none scroll-smooth"
            onMouseEnter={() => setAutoScroll(false)}
            onMouseLeave={() => setAutoScroll(true)}
            onTouchStart={() => setAutoScroll(false)}
            onTouchEnd={() => setAutoScroll(true)}
          >
            <div className="flex gap-6 snap-x snap-mandatory pb-4">
              {motionVideos.concat(motionVideos).map((video, i) => (
                <div
                  key={`${video.title}-${i}`}
                  className="glass-card glass-gradient-border card-depth rounded-xl p-1 min-w-[280px] sm:min-w-[450px] snap-center flex-shrink-0"
                >
                  <div className="aspect-video rounded-lg overflow-hidden group hover:scale-105 smooth-transition">
                    <iframe
                      src={video.embedUrl}
                      title={video.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  <div className="px-4 py-3 text-center text-glass-text font-medium text-sm">
                    {video.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          {/* Section Header */}
          <div className="mb-20 space-y-6 text-center">
            <div className="inline-flex items-center gap-3 justify-center mx-auto fade-in-up">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-glass-accent" />
              <span className="text-xs font-medium text-glass-accent uppercase tracking-wider">Expertise</span>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-glass-accent" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-900 text-glass-text fade-in-up" style={{ animationDelay: "0.1s" }}>
              Skills & <span className="text-gradient-premium">Abilities</span>
            </h2>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="space-y-3 fade-in-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-glass-text">
                    {skill.name}
                  </span>
                  <span className="text-lg font-bold text-glass-accent">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 bg-glass-surface/50 rounded-full overflow-hidden border border-glass-border/30">
                  <div
                    className="bg-gradient-to-r from-glass-accent to-glass-primary-accent h-full rounded-full glow-warm transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          {/* Section Header */}
          <div className="mb-16 space-y-6 text-center">
            <div className="inline-flex items-center gap-3 justify-center mx-auto fade-in-up">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-glass-accent" />
              <span className="text-xs font-medium text-glass-accent uppercase tracking-wider">Contact</span>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-glass-accent" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-900 text-glass-text fade-in-up" style={{ animationDelay: "0.1s" }}>
              Let's <span className="text-gradient-premium">Connect</span>
            </h2>
            <p className="text-lg text-glass-muted max-w-3xl mx-auto fade-in-up" style={{ animationDelay: "0.2s" }}>
              I'm always interested in hearing about new projects and opportunities.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                icon: "🎨",
                title: "Behance",
                link: "https://www.behance.net/ashutoshsinha1",
                url: "behance.net/ashutoshsinha1",
              },
              {
                icon: "💼",
                title: "LinkedIn",
                link: "https://www.linkedin.com/in/ashutoshsinha/",
                url: "linkedin.com/in/ashutoshsinha",
              },
              {
                icon: "✉",
                title: "Email",
                link: "mailto:ashusinha543@gmail.com",
                url: "ashusinha543@gmail.com",
              },
              {
                icon: "📍",
                title: "Location",
                link: "#",
                url: "Bangalore, India",
              },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : undefined}
                rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="glass-card glass-gradient-border card-depth p-6 rounded-xl hover:scale-105 smooth-transition fade-in-up group text-center"
                style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 smooth-transition">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-glass-text mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-glass-muted group-hover:text-glass-accent transition-colors">
                  {item.url}
                </p>
              </a>
            ))}
          </div>

          {/* CV Download */}
          <div className="text-center fade-in-up" style={{ animationDelay: "0.7s" }}>
            <a
              href="https://drive.google.com/file/d/1Dtnw3oqgNISNtuvN6vT2UNUvJ5uFI-FH/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shine-on-hover bg-gradient-to-r from-glass-accent to-glass-primary-accent text-glass-dark font-bold px-8 py-3 rounded-lg glow-warm shadow-lg hover:scale-105 transition-transform"
            >
              Download Full Portfolio CV
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-glass-border/20">
        <div className="container mx-auto text-center">
          <p className="text-glass-muted text-sm">
            © 2024 Ashutosh Sinha. All rights reserved. Designed & built with artistry.
          </p>
        </div>
      </footer>
    </div>
  );
}
