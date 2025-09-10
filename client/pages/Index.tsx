import { useState, useEffect, useRef } from "react";

const projects = [
  {
    title: "Seekho App UX Case Study",
    description:
      "Comprehensive analysis and redesign to improve user engagement and functionality",
    tags: ["UX Research", "Mobile App", "Education"],
    color: "blue",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4dea029619d64c5c95c3070ae0fffe0b%2F386148064ead4e69969488f9274f6dc3",
    url: "https://medium.com/@ashusinha543/seekho-app-ux-case-study-c65401c26380",
  },
  {
    title: "Swish Redesign Case Study",
    description:
      "Platform revamp focusing on enhanced user experience and interface design",
    tags: ["Web Design", "Fintech", "UI/UX"],
    color: "green",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4dea029619d64c5c95c3070ae0fffe0b%2Fb94e510cf1c742a189affd01fad985a2",
    url: "https://medium.com/@ashusinha543/swish-app-ux-case-study-807d788b7141",
  },
  {
    title: "Think41 Website Redesign",
    description: "Interactive landing page providing seamless user experience",
    tags: ["Web Design", "Landing Page", "B2B"],
    color: "purple",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4dea029619d64c5c95c3070ae0fffe0b%2F33b4ca4a9bd649caac069be599d5c37e",
    url: "https://www.behance.net/gallery/212201041/Think41-Website-Redesign-An-interactive-landing-page",
  },
  {
    title: "Giva App Redesign",
    description:
      "Profile and landing page redesign improving user interaction and aesthetics",
    tags: ["Mobile App", "E-commerce", "Fashion"],
    color: "blue",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4dea029619d64c5c95c3070ae0fffe0b%2F528fa2b04788485586d4a38752a51ea7",
  },
  {
    title: "XO Music App UI Design",
    description:
      "Music app interface inspired by The Weeknd's theme with immersive UX",
    tags: ["Music App", "Dark Theme", "Entertainment"],
    color: "green",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4dea029619d64c5c95c3070ae0fffe0b%2F8132c335618a451b821cf7c0c23304ba",
  },
  {
    title: "iCreative Learning",
    description:
      "Interactive education platform and portfolio site showcasing learning resources",
    tags: ["Web App", "Education", "Learning"],
    color: "purple",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4dea029619d64c5c95c3070ae0fffe0b%2Fc1ade894307660928596a906407fdae8a8f7109f",
    url: "https://icreativelearning.netlify.app/",
  },
];

// Motion videos (add your embed URLs here)
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
      return "from-glass-blue/20 to-glass-blue/5 border-glass-blue/30 text-glass-blue";
    case "green":
      return "from-glass-green/20 to-glass-green/5 border-glass-green/30 text-glass-green";
    case "purple":
      return "from-glass-purple/20 to-glass-purple/5 border-glass-purple/30 text-glass-purple";
    default:
      return "from-glass-accent/20 to-glass-accent/5 border-glass-accent/30 text-glass-accent";
  }
};

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [autoScroll, setAutoScroll] = useState(true);
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-glass-dark relative overflow-x-hidden pb-24 md:pb-28">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-glass-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-glass-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-glass-green/10 rounded-full blur-2xl"></div>
      </div>

      {/* Navigation - Mobile */}
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden">
        <div className="relative">
          {isMobileMenuOpen && (
            <div className="absolute bottom-14 left-1/2 -translate-x-1/2 glass-nav rounded-2xl p-2 flex flex-col gap-2 min-w-[12rem] items-stretch text-center">
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
                  className={`px-4 py-2 rounded-xl transition-all text-sm font-medium ${
                    activeSection === nav.id
                      ? "bg-glass-accent text-white glow-accent"
                      : "text-glass-text hover:text-glass-accent hover:bg-glass-accent/10"
                  }`}
                >
                  {nav.label}
                </button>
              ))}
            </div>
          )}
          <button
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="w-12 h-12 rounded-full flex items-center justify-center bg-glass-accent text-white shadow-xl glow-accent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Navigation - Desktop */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <div className="glass-nav rounded-full p-2 flex gap-2 shadow-2xl ring-1 ring-white/10">
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
              onClick={() => scrollToSection(nav.id)}
              className={`px-5 py-3 rounded-full transition-all text-sm font-medium relative overflow-hidden ${
                activeSection === nav.id
                  ? "bg-glass-accent text-white shadow-lg glow-accent"
                  : "text-glass-text hover:text-glass-accent hover:bg-glass-accent/10"
              }`}
            >
              <span className="relative z-10">{nav.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 pt-8 pb-28 sm:pb-24 relative"
      >
        <div className="container mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
          <div className="space-y-8 text-center lg:text-left">
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <div className="w-3 h-3 bg-glass-green rounded-full animate-pulse"></div>
              <span className="text-glass-muted font-medium">Open to work</span>
            </div>

            <div className="space-y-6">
              <h2 className="text-glass-accent font-bold text-xs sm:text-sm lg:text-lg tracking-[0.2em] uppercase">
                PRODUCT & MOTION DESIGNER
              </h2>
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-glass-text leading-[0.9] tracking-tight break-words">
                Ashutosh Sinha
              </h1>
              <p className="text-base sm:text-lg lg:text-2xl text-glass-muted leading-relaxed max-w-lg font-light">
                Crafting user-centric designs that enhance product experiences
                for modern digital platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 pt-6 w-full text-left">
              {[
                { icon: "✉", label: "Email", value: "ashusinha543@gmail.com" },
                { icon: "📞", label: "Phone", value: "On Request" },
                {
                  icon: "💼",
                  label: "LinkedIn",
                  value: "linkedin.com/in/ashutoshsinha",
                },
                { icon: "📍", label: "Location", value: "Bangalore, India" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-glass-muted min-w-0"
                >
                  <span className="text-glass-accent text-lg w-6 h-6 flex items-center justify-center shrink-0">
                    {item.icon}
                  </span>
                  <div>
                    <div className="text-xs text-glass-muted/60 uppercase tracking-wide text-left">
                      {item.label}
                    </div>
                    <div className="text-sm font-medium break-words text-left">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-8 justify-center lg:justify-start">
              <a
                href="https://drive.google.com/file/d/1IFnsUThOEGWpkiSpedOn00sWE2TNqZKp/view"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-glass-green to-glass-blue text-white font-semibold px-8 py-4 rounded-2xl transition-all hover:scale-105 glow-green shadow-2xl"
              >
                Download CV
              </a>
              <a
                href="https://mail.google.com/mail/u/0/#inbox"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card text-glass-text hover:text-glass-accent px-8 py-4 rounded-2xl transition-all hover:scale-105"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-[28rem] lg:h-[28rem] glass-card rounded-[3rem] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-glass-blue/20 via-glass-purple/10 to-glass-green/20"></div>
                <div className="relative z-10 w-64 h-64 lg:w-80 lg:h-80">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F4dea029619d64c5c95c3070ae0fffe0b%2Fa4aefdb2c86f46308d02098427ded9d2?format=webp&width=800"
                    alt="Ashutosh Sinha"
                    className="w-full h-full object-cover rounded-3xl border-4 border-white/20 shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-glass-dark/30 via-transparent to-transparent rounded-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-glass-text mb-8">
              About <span className="text-gradient-spotify">Me</span>
            </h2>
            <p className="text-xl lg:text-2xl text-glass-muted max-w-4xl mx-auto leading-relaxed font-light">
              I'm a f Product and Motion Designer based in Bangalore,
              specializing in creating user-centric designs that enhance product
              experiences. With expertise in UX research, prototyping, and
              design systems, I help fast-moving teams build scalable and
              intuitive digital products.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "📱",
                title: "Mobile-First Design",
                description:
                  "Crafting responsive experiences that work seamlessly across all devices",
                color: "blue",
              },
              {
                icon: "⚡",
                title: "Fast Prototyping",
                description:
                  "Rapid iteration and testing to validate ideas and improve user experience",
                color: "green",
              },
              {
                icon: "👥",
                title: "User-Centered",
                description:
                  "Deep user research and testing to create meaningful digital experiences",
                color: "purple",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-3xl hover:scale-105 transition-all duration-300 group"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-glass-text mb-4">
                  {item.title}
                </h3>
                <p className="text-glass-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-glass-text mb-8">
              Featured <span className="text-gradient-accent">Projects</span>
            </h2>
            <p className="text-xl lg:text-2xl text-glass-muted max-w-4xl mx-auto font-light">
              A showcase of my recent work in product design, UX research, and
              motion design
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass-card rounded-3xl overflow-hidden transition-all duration-300 group border border-white/10 hover:border-white/20 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div
                  className={`aspect-video bg-gradient-to-br ${getColorClasses(project.color).split(" ")[0]} ${getColorClasses(project.color).split(" ")[1]} relative overflow-hidden`}
                >
                  <div
                    className="w-full h-full bg-glass-dark/10 backdrop-blur-sm group-hover:bg-glass-dark/5 transition-colors flex items-center justify-center transform group-hover:scale-[1.03] duration-500"
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
                  >
                    {!project.image && (
                      <div
                        className={`${getColorClasses(project.color).split(" ")[3]} text-3xl font-black`}
                      >
                        {index + 1}
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-glass-text mb-4 group-hover:text-gradient-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-glass-muted mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`bg-white/5 border border-white/10 backdrop-blur-sm text-xs px-3 py-1 rounded-full font-medium text-glass-text/90`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-glass-text hover:bg-glass-accent hover:text-white transition-all"
                    >
                      View Project
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  ) : (
                    <button className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-glass-text hover:bg-glass-accent hover:text-white transition-all">
                      View Project
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Motion Graphics Section */}
      <section id="motion" className="py-24 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-glass-text mb-8">
              Motion <span className="text-gradient-accent">Graphics</span>
            </h2>
            <p className="text-xl lg:text-2xl text-glass-muted max-w-4xl mx-auto font-light">
              A selection of motion design and micro-interactions.
            </p>
          </div>

          <div
            ref={motionRef}
            className="no-scrollbar overflow-x-auto select-none"
            onMouseEnter={() => setAutoScroll(false)}
            onMouseLeave={() => setAutoScroll(true)}
            onTouchStart={() => setAutoScroll(false)}
            onTouchEnd={() => setAutoScroll(true)}
          >
            <div className="flex gap-6 px-1 sm:px-2 snap-x snap-mandatory">
              {motionVideos.length === 0 ? (
                <div className="mx-auto text-glass-muted">
                  Add videos to the motionVideos array to display here.
                </div>
              ) : (
                motionVideos.concat(motionVideos).map((video, i) => (
                  <div
                    key={`${video.title}-${i}`}
                    className="glass-card rounded-2xl p-2 min-w-[300px] sm:min-w-[420px] snap-start w-full max-w-md"
                  >
                    <div className="aspect-video rounded-xl overflow-hidden">
                      <iframe
                        src={video.embedUrl}
                        title={video.title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                    <div className="px-3 py-3 text-center text-glass-text font-medium">
                      {video.title}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-glass-text mb-8">
              Skills & <span className="text-gradient-spotify">Expertise</span>
            </h2>
            <p className="text-xl lg:text-2xl text-glass-muted max-w-4xl mx-auto font-light">
              My core competencies in design and user experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-glass-text">
                    {skill.name}
                  </span>
                  <span
                    className={`text-xl font-black ${getColorClasses(skill.color).split(" ")[3]}`}
                  >
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full glass-card rounded-full h-4 overflow-hidden">
                  <div
                    className={`bg-gradient-to-r ${skill.color === "blue" ? "from-glass-blue to-glass-purple" : skill.color === "green" ? "from-glass-green to-glass-blue" : "from-glass-purple to-glass-blue"} h-4 rounded-full transition-all duration-1000 ${skill.color === "green" ? "glow-green" : "glow-accent"}`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-glass-text mb-8">
              Let's <span className="text-gradient-accent">Connect</span>
            </h2>
            <p className="text-xl lg:text-2xl text-glass-muted max-w-4xl mx-auto font-light">
              Available for freelance projects and full-time opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto px-1 sm:px-2 place-items-center md:place-items-stretch">
            <div className="space-y-8 text-center md:text-left">
              <h3 className="text-3xl font-bold text-glass-text mb-8 text-center md:text-left">
                Get in Touch
              </h3>

              <div className="space-y-6">
                {[
                  {
                    icon: "✉",
                    label: "Email",
                    value: "ashusinha543@gmail.com",
                    color: "blue",
                  },
                  {
                    icon: "📞",
                    label: "Phone",
                    value: "On Request",
                    color: "green",
                  },
                  {
                    icon: "📍",
                    label: "Location",
                    value: "Bangalore, India",
                    color: "purple",
                  },
                  {
                    icon: "💼",
                    label: "LinkedIn",
                    value: "linkedin.com/in/ashutoshsinha",
                    color: "blue",
                  },
                ].map((contact, index) => (
                  <div
                    key={index}
                    className="glass-card p-6 rounded-2xl transition-all sm:hover:scale-105 overflow-visible w-full min-w-0 max-w-md md:max-w-none mx-auto md:mx-0"
                  >
                    <div className="flex items-center gap-6 justify-center md:justify-start">
                      <div
                        className={`text-3xl ${getColorClasses(contact.color).split(" ")[3]}`}
                      >
                        {contact.icon}
                      </div>
                      <div>
                        <div className="text-glass-muted text-sm uppercase tracking-wide mb-1 text-center md:text-left">
                          {contact.label}
                        </div>
                        <div className="text-glass-text text-lg font-medium text-center md:text-left">
                          {contact.value}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8 text-center md:text-left">
              <h3 className="text-3xl font-bold text-glass-text mb-8 text-center md:text-left">
                Follow My Work
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 place-items-center justify-items-center">
                {[
                  {
                    icon: "🎨",
                    label: "Behance",
                    url: "behance.net/ashutoshsinha1",
                    link: "https://www.behance.net/ashutoshsinha1",
                    color: "blue",
                  },
                  {
                    icon: "💻",
                    label: "GitHub",
                    url: "github.com/ashutosh",
                    link: "https://github.com/ashutosh",
                    color: "green",
                  },
                  {
                    icon: "💼",
                    label: "LinkedIn",
                    url: "linkedin.com/in/ashutoshsinha",
                    link: "https://www.linkedin.com/in/ashutoshsinha/",
                    color: "purple",
                  },
                  {
                    icon: "✉",
                    label: "Email",
                    url: "Contact me",
                    link: "https://mail.google.com/mail/u/0/#inbox",
                    color: "blue",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-6 rounded-2xl transition-all group sm:hover:scale-105 w-full min-w-0 max-w-sm mx-auto"
                  >
                    <div className="flex flex-col items-center gap-4">
                      <div
                        className={`text-4xl ${getColorClasses(social.color).split(" ")[3]} group-hover:scale-110 transition-transform`}
                      >
                        {social.icon}
                      </div>
                      <div className="text-center">
                        <div className="text-glass-text font-bold text-lg">
                          {social.label}
                        </div>
                        <div className="text-glass-muted text-sm">
                          {social.url}
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-12 mb-24 sm:mb-0">
                <a
                  href="https://drive.google.com/file/d/1IFnsUThOEGWpkiSpedOn00sWE2TNqZKp/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-block text-center bg-gradient-to-r from-glass-green to-glass-blue text-white font-bold py-4 rounded-2xl transition-all hover:scale-105 glow-green shadow-2xl text-lg"
                >
                  Download Portfolio CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-glass-border/20">
        <div className="container mx-auto text-center">
          <p className="text-glass-muted text-lg">
            © 2024 Ashutosh Sinha. Designed with passion in Bangalore, India.
          </p>
        </div>
      </footer>
    </div>
  );
}
