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
    url: "https://www.behance.net/gallery/211921171/Giva-App-profile-page-and-landing-page-redesign",
  },
  {
    title: "XO Music App UI Design",
    description:
      "Music app interface inspired by The Weeknd's theme with immersive UX",
    tags: ["Music App", "Dark Theme", "Entertainment"],
    color: "green",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4dea029619d64c5c95c3070ae0fffe0b%2F8132c335618a451b821cf7c0c23304ba",
    url: "https://www.behance.net/gallery/211656933/XO-Music-App-A-music-app-UI-Design-%28The-Weeknd-Theme%29",
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

const motionVideos: { title: string; embedUrl: string }[] = [
  { title: "Motion Graphic 1", embedUrl: "https://player.vimeo.com/video/1117336115" },
  { title: "Motion Graphic 2", embedUrl: "https://player.vimeo.com/video/1117336204" },
  { title: "Motion Graphic 3", embedUrl: "https://player.vimeo.com/video/1117336359" },
  { title: "Motion Graphic 4", embedUrl: "https://player.vimeo.com/video/1117336620" },
  { title: "Motion Graphic 5", embedUrl: "https://player.vimeo.com/video/1117336683" },
  { title: "Motion Graphic 6", embedUrl: "https://player.vimeo.com/video/1117336799" },
  { title: "Motion Graphic 7", embedUrl: "https://player.vimeo.com/video/1117337188" },
  { title: "Portfolio Reel 2023", embedUrl: "https://www.behance.net/embed/project/180502603?ilo0=1" },
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
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
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
    <div className="min-h-screen bg-glass-dark relative overflow-x-hidden pb-24 md:pb-28">
      {/* Scroll progress */}
      <div aria-hidden className="fixed top-0 left-0 h-[3px] w-full z-[60] bg-white/5 backdrop-blur">
        <div className="h-full bg-gradient-to-r from-glass-green via-glass-purple to-glass-blue glow-accent" style={{ width: `${progress}%` }} />
      </div>

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-dot-grid opacity-[0.25]" />
      </div>

      {/* Top Navbar (Webflow-style) */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl hidden md:block">
        <div className="glass-nav glass-gradient-border rounded-2xl px-4 py-3 flex items-center justify-between">
          <button onClick={() => scrollToSection("home")} className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-glass-blue to-glass-green text-white font-black shadow glow-accent">AS</span>
            <span className="text-sm text-glass-muted">Ashutosh Sinha</span>
          </button>
          <nav className="flex items-center gap-2">
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
                className={`px-4 py-2 rounded-xl text-sm transition-all ${
                  activeSection === nav.id
                    ? "bg-glass-accent text-white glow-accent"
                    : "text-glass-text hover:text-glass-accent hover:bg-white/5"
                }`}
              >
                {nav.label}
              </button>
            ))}
          </nav>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }} className="shine-on-hover bg-white/5 border border-white/10 text-sm px-4 py-2 rounded-xl">Let's talk</a>
        </div>
      </header>

      {/* Mobile Nav (bottom) */}
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="aurora min-h-screen flex items-center justify-center px-4 pt-20 pb-28 sm:pb-24 relative">
        <div className="container mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur animate-float">
              <span className="w-2 h-2 bg-glass-green rounded-full" />
              <span className="text-xs text-glass-muted">Available for freelance & full-time</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.9] tracking-tight break-words">
                <span className="text-gradient-accent">Designing products</span>
                <br />
                that people love
              </h1>
              <p className="text-base sm:text-lg lg:text-2xl text-glass-muted leading-relaxed max-w-xl font-light mx-auto lg:mx-0">
                Blending product, motion and research to ship delightful, high-impact experiences.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <a href="#projects" onClick={(e)=>{e.preventDefault();scrollToSection("projects");}} className="shine-on-hover bg-gradient-to-r from-glass-green to-glass-blue text-white font-semibold px-8 py-4 rounded-2xl glow-green shadow-2xl text-center">View Work</a>
              <a href="#contact" onClick={(e)=>{e.preventDefault();scrollToSection("contact");}} className="glass-card glass-gradient-border text-glass-text hover:text-glass-accent px-8 py-4 rounded-2xl text-center">Get in Touch</a>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-8 max-w-xl mx-auto lg:mx-0">
              {[
                { kpi: "4+", label: "Years Experience" },
                { kpi: "25+", label: "Projects Delivered" },
                { kpi: "6+", label: "Case Studies" },
              ].map((m, i) => (
                <div key={i} className="glass-card glass-gradient-border rounded-2xl px-4 py-5 text-center">
                  <div className="text-2xl font-black text-glass-text">{m.kpi}</div>
                  <div className="text-xs text-glass-muted">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[32rem] lg:h-[32rem] glass-card glass-gradient-border rounded-[3rem] flex items-center justify-center relative overflow-hidden tilt-hover">
                <div className="absolute inset-0 bg-gradient-to-br from-glass-blue/30 via-glass-purple/10 to-glass-green/30" />
                <div className="relative z-10 w-64 h-64 lg:w-96 lg:h-96">
                  <img src="https://cdn.builder.io/api/v1/image/assets%2F4dea029619d64c5c95c3070ae0fffe0b%2Fa4aefdb2c86f46308d02098427ded9d2?format=webp&width=1000" alt="Ashutosh Sinha" className="w-full h-full object-cover rounded-3xl border-4 border-white/20 shadow-2xl" />
                  <div className="absolute inset-0 bg-gradient-to-t from-glass-dark/30 via-transparent to-transparent rounded-3xl" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted by marquee */}
        <div className="absolute bottom-6 left-0 right-0">
          <div className="container mx-auto">
            <div className="glass-card glass-gradient-border rounded-xl py-3 overflow-hidden">
              <div className="whitespace-nowrap animate-marquee flex items-center gap-10 text-glass-muted">
                {['Seekho','Swish','Think41','Giva','XO Music','iCreative Learning','Seekho','Swish','Think41','Giva','XO Music','iCreative Learning'].map((b,i)=> (
                  <span key={i} className="text-sm tracking-wide">Trusted by teams at {b}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-black text-glass-text mb-6">About <span className="text-gradient-spotify">Me</span></h2>
            <p className="text-xl lg:text-2xl text-glass-muted max-w-4xl mx-auto leading-relaxed font-light">
              Product & Motion Designer based in Bangalore, focused on shipping intuitive, scalable and visually compelling experiences for fast-moving teams.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "📱", title: "Mobile-first", description: "Responsive experiences that feel native across devices" },
              { icon: "⚡", title: "Rapid prototyping", description: "Tested flows and interactions to de-risk delivery" },
              { icon: "🎛", title: "Design systems", description: "Token-driven, accessible UI kits and components" },
            ].map((item, index) => (
              <div key={index} className="glass-card glass-gradient-border p-8 rounded-3xl hover:scale-[1.02] transition-all duration-300 group">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-2xl font-bold text-glass-text mb-3">{item.title}</h3>
                <p className="text-glass-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-black text-glass-text mb-6">Featured <span className="text-gradient-accent">Projects</span></h2>
            <p className="text-xl lg:text-2xl text-glass-muted max-w-4xl mx-auto font-light">A selection of product, UX and motion work.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
            {projects.map((project, index) => (
              <div key={index} className={`${index===0? 'lg:col-span-2':''} glass-card glass-gradient-border rounded-3xl overflow-hidden transition-all duration-300 group hover:-translate-y-1 tilt-hover`}>
                <div className={`aspect-video bg-gradient-to-br ${getColorClasses(project.color).split(' ')[0]} ${getColorClasses(project.color).split(' ')[1]} relative overflow-hidden`}>
                  <div
                    className="w-full h-full bg-glass-dark/10 backdrop-blur-sm group-hover:bg-glass-dark/5 transition-colors flex items-center justify-center transform group-hover:scale-[1.03] duration-500"
                    style={ project.image ? { backgroundImage: `url(${project.image})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' } : {} }
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-3 right-3 text-xs px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur">{project.tags[0]}</div>
                </div>
                <div className="p-8">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-bold text-glass-text group-hover:text-gradient-accent transition-colors">{project.title}</h3>
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="shine-on-hover inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-glass-accent hover:text-white transition-all">View
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                    </a>
                  </div>
                  <p className="text-glass-muted mt-3 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-white/5 border border-white/10 backdrop-blur-sm text-xs px-3 py-1 rounded-full font-medium text-glass-text/90">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Motion */}
      <section id="motion" className="py-24 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-black text-glass-text mb-6">Motion <span className="text-gradient-accent">Graphics</span></h2>
            <p className="text-xl lg:text-2xl text-glass-muted max-w-4xl mx-auto font-light">Micro-interactions and motion studies.</p>
          </div>

          <div ref={motionRef} className="no-scrollbar overflow-x-auto select-none -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth" onMouseEnter={() => setAutoScroll(false)} onMouseLeave={() => setAutoScroll(true)} onTouchStart={() => setAutoScroll(false)} onTouchEnd={() => setAutoScroll(true)}>
            <div className="flex gap-4 sm:gap-6 snap-x snap-mandatory">
              <div className="shrink-0 w-2 sm:w-0" />
              {motionVideos.concat(motionVideos).map((video, i) => (
                <div key={`${video.title}-${i}`} className="glass-card glass-gradient-border rounded-2xl p-2 min-w-[260px] sm:min-w-[420px] snap-center w-full max-w-md">
                  <div className="aspect-video rounded-xl overflow-hidden">
                    <iframe src={video.embedUrl} title={video.title} className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                  </div>
                  <div className="px-3 py-3 text-center text-glass-text font-medium">{video.title}</div>
                </div>
              ))}
              <div className="shrink-0 w-2 sm:w-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-black text-glass-text mb-6">Skills & <span className="text-gradient-spotify">Expertise</span></h2>
            <p className="text-xl lg:text-2xl text-glass-muted max-w-4xl mx-auto font-light">Core strengths in product and UX.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-glass-text">{skill.name}</span>
                  <span className={`text-xl font-black ${getColorClasses(skill.color).split(" ")[3]}`}>{skill.level}%</span>
                </div>
                <div className="w-full glass-card glass-gradient-border rounded-full h-4 overflow-hidden">
                  <div className={`bg-gradient-to-r ${ skill.color === 'blue' ? 'from-glass-blue to-glass-purple' : skill.color === 'green' ? 'from-glass-green to-glass-blue' : 'from-glass-purple to-glass-blue' } h-4 rounded-full transition-all duration-1000 ${ skill.color === 'green' ? 'glow-green' : 'glow-accent' }`} style={{ width: `${skill.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-black text-glass-text mb-6">What partners <span className="text-gradient-accent">say</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: "Ashutosh elevated our product experience end-to-end.", name: "Product Lead, Swish" },
              { quote: "Thinks in systems, ships with craft and speed.", name: "Founder, Think41" },
              { quote: "Users loved the new flows. Conversion up 18%.", name: "PM, Giva" },
            ].map((t, i) => (
              <div key={i} className="glass-card glass-gradient-border rounded-2xl p-6">
                <p className="text-glass-text text-lg">“{t.quote}”</p>
                <p className="text-glass-muted text-sm mt-4">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="glass-card glass-gradient-border rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-3xl md:text-5xl font-black mb-4">Let’s build something outstanding</h3>
            <p className="text-glass-muted max-w-2xl mx-auto">Open to product, UX and motion roles. I can help you design, validate and ship faster.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#projects" onClick={(e)=>{e.preventDefault();scrollToSection('projects');}} className="shine-on-hover bg-gradient-to-r from-glass-green to-glass-blue text-white font-semibold px-8 py-4 rounded-2xl glow-green shadow-2xl">See projects</a>
              <a href="#contact" onClick={(e)=>{e.preventDefault();scrollToSection('contact');}} className="glass-card glass-gradient-border px-8 py-4 rounded-2xl">Contact me</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-glass-border/20">
        <div className="container mx-auto text-center">
          <p className="text-glass-muted text-lg">© 2024 Ashutosh Sinha. Designed in Bangalore, India.</p>
        </div>
      </footer>
    </div>
  );
}
