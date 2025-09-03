import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Behance,
  Download,
  ExternalLink,
  Smartphone,
  Palette,
  Zap,
  Users
} from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Seekho App UX Case Study",
    description: "Comprehensive analysis and redesign to improve user engagement and functionality",
    tags: ["UX Research", "Mobile App", "Education"]
  },
  {
    title: "Swish Redesign Case Study", 
    description: "Platform revamp focusing on enhanced user experience and interface design",
    tags: ["Web Design", "Fintech", "UI/UX"]
  },
  {
    title: "Think41 Website Redesign",
    description: "Interactive landing page providing seamless user experience",
    tags: ["Web Design", "Landing Page", "B2B"]
  },
  {
    title: "Giva App Redesign",
    description: "Profile and landing page redesign improving user interaction and aesthetics",
    tags: ["Mobile App", "E-commerce", "Fashion"]
  },
  {
    title: "XO Music App UI Design",
    description: "Music app interface inspired by The Weeknd's theme with immersive UX",
    tags: ["Music App", "Dark Theme", "Entertainment"]
  },
  {
    title: "Kano Analysis for Taste My Plate",
    description: "User needs analysis to inform design decisions for food app",
    tags: ["UX Research", "Food App", "Analytics"]
  }
];

const skills = [
  { name: "Product Design", level: 95 },
  { name: "Motion Design", level: 90 },
  { name: "UX Research", level: 88 },
  { name: "Prototyping", level: 92 },
  { name: "Design Systems", level: 85 },
  { name: "User Testing", level: 87 }
];

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-portfolio-dark/80 backdrop-blur-md border border-portfolio-orange/20 rounded-full p-2 flex gap-2">
          {[
            { id: "home", label: "Home" },
            { id: "about", label: "About" },
            { id: "projects", label: "Projects" },
            { id: "skills", label: "Skills" },
            { id: "contact", label: "Contact" }
          ].map((nav) => (
            <Button
              key={nav.id}
              variant={activeSection === nav.id ? "default" : "ghost"}
              size="sm"
              onClick={() => scrollToSection(nav.id)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeSection === nav.id 
                  ? "bg-portfolio-orange text-portfolio-dark hover:bg-portfolio-orange/90" 
                  : "text-portfolio-light hover:text-portfolio-orange hover:bg-portfolio-orange/10"
              }`}
            >
              {nav.label}
            </Button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-warm opacity-50"></div>
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-portfolio-light/80">Open to work</span>
            </div>

            <div className="space-y-4">
              <h2 className="text-portfolio-orange font-bold text-lg tracking-wider uppercase">
                PRODUCT & MOTION DESIGNER
              </h2>
              <h1 className="text-6xl lg:text-7xl font-bold text-portfolio-light leading-tight">
                Ashutosh Sinha
              </h1>
              <p className="text-xl text-portfolio-light/80 leading-relaxed max-w-lg">
                Crafting user-centric designs that enhance product experiences for modern digital platforms.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="flex items-center gap-3 text-portfolio-light/80">
                <Mail className="w-5 h-5 text-portfolio-orange" />
                <span className="text-sm">Contact available</span>
              </div>
              <div className="flex items-center gap-3 text-portfolio-light/80">
                <Phone className="w-5 h-5 text-portfolio-orange" />
                <span className="text-sm">Phone available</span>
              </div>
              <div className="flex items-center gap-3 text-portfolio-light/80">
                <Linkedin className="w-5 h-5 text-portfolio-orange" />
                <span className="text-sm">linkedin.com/in/ashutoshsinha</span>
              </div>
              <div className="flex items-center gap-3 text-portfolio-light/80">
                <MapPin className="w-5 h-5 text-portfolio-orange" />
                <span className="text-sm">Bangalore, India</span>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button className="bg-portfolio-orange hover:bg-portfolio-orange/90 text-portfolio-dark font-semibold px-6 py-3 rounded-full">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
              <Button 
                variant="outline" 
                className="border-portfolio-orange text-portfolio-orange hover:bg-portfolio-orange hover:text-portfolio-dark px-6 py-3 rounded-full"
                onClick={() => scrollToSection("contact")}
              >
                Get in Touch
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl bg-gradient-to-br from-portfolio-orange/20 to-portfolio-amber/20 backdrop-blur-sm border border-portfolio-orange/20 flex items-center justify-center">
                <div className="w-72 h-72 lg:w-88 lg:h-88 rounded-2xl bg-portfolio-dark/40 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-portfolio-orange text-6xl font-bold">AS</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-portfolio-orange rounded-full flex items-center justify-center animate-pulse">
                <Palette className="w-8 h-8 text-portfolio-dark" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-light mb-6">
              About <span className="text-gradient-orange">Me</span>
            </h2>
            <p className="text-lg text-portfolio-light/80 max-w-3xl mx-auto leading-relaxed">
              I'm a freelance Product and Motion Designer based in Bangalore, specializing in creating 
              user-centric designs that enhance product experiences. With expertise in UX research, 
              prototyping, and design systems, I help fast-moving teams build scalable and intuitive digital products.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "Mobile-First Design",
                description: "Crafting responsive experiences that work seamlessly across all devices"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Fast Prototyping",
                description: "Rapid iteration and testing to validate ideas and improve user experience"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "User-Centered",
                description: "Deep user research and testing to create meaningful digital experiences"
              }
            ].map((item, index) => (
              <Card key={index} className="p-6 bg-portfolio-dark/50 border-portfolio-orange/20 hover:border-portfolio-orange/40 transition-all hover:glow-orange">
                <div className="text-portfolio-orange mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-portfolio-light mb-3">{item.title}</h3>
                <p className="text-portfolio-light/70">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-light mb-6">
              Featured <span className="text-gradient-orange">Projects</span>
            </h2>
            <p className="text-lg text-portfolio-light/80 max-w-3xl mx-auto">
              A showcase of my recent work in product design, UX research, and motion design
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden bg-portfolio-dark/50 border-portfolio-orange/20 hover:border-portfolio-orange/40 transition-all hover:glow-orange group">
                <div className="aspect-video bg-gradient-to-br from-portfolio-orange/10 to-portfolio-amber/10 relative overflow-hidden">
                  <div className="w-full h-full bg-portfolio-dark/20 group-hover:bg-portfolio-dark/10 transition-colors flex items-center justify-center">
                    <div className="text-portfolio-orange text-2xl font-bold">Project {index + 1}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-portfolio-light mb-3 group-hover:text-portfolio-orange transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-portfolio-light/70 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="secondary" 
                        className="bg-portfolio-orange/10 text-portfolio-orange border-portfolio-orange/20 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-portfolio-orange hover:text-portfolio-dark hover:bg-portfolio-orange p-0 h-auto"
                  >
                    View Case Study
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-light mb-6">
              Skills & <span className="text-gradient-orange">Expertise</span>
            </h2>
            <p className="text-lg text-portfolio-light/80 max-w-3xl mx-auto">
              My core competencies in design and user experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-portfolio-light font-medium">{skill.name}</span>
                  <span className="text-portfolio-orange font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-portfolio-dark/50 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-portfolio-orange to-portfolio-amber h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-light mb-6">
              Let's <span className="text-gradient-orange">Connect</span>
            </h2>
            <p className="text-lg text-portfolio-light/80 max-w-3xl mx-auto">
              Available for freelance projects and full-time opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-portfolio-light mb-6">Get in Touch</h3>
              
              <div className="space-y-4">
                {[
                  { icon: <Mail className="w-5 h-5" />, label: "Email", value: "Available on request" },
                  { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "Available on request" },
                  { icon: <MapPin className="w-5 h-5" />, label: "Location", value: "Bangalore, India" },
                  { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", value: "linkedin.com/in/ashutoshsinha" }
                ].map((contact, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-portfolio-dark/30 border border-portfolio-orange/10">
                    <div className="text-portfolio-orange">{contact.icon}</div>
                    <div>
                      <div className="text-portfolio-light/60 text-sm">{contact.label}</div>
                      <div className="text-portfolio-light">{contact.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-portfolio-light mb-6">Follow My Work</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Behance className="w-6 h-6" />, label: "Behance", url: "behance.net/ashutoshsinha1" },
                  { icon: <Github className="w-6 h-6" />, label: "GitHub", url: "github.com/ashutosh" },
                  { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn", url: "linkedin.com/in/ashutoshsinha" },
                  { icon: <Mail className="w-6 h-6" />, label: "Email", url: "Contact me" }
                ].map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="h-auto p-4 flex flex-col items-center gap-3 border-portfolio-orange/20 hover:border-portfolio-orange hover:bg-portfolio-orange/10 transition-all"
                  >
                    <div className="text-portfolio-orange">{social.icon}</div>
                    <div className="text-center">
                      <div className="text-portfolio-light font-medium text-sm">{social.label}</div>
                      <div className="text-portfolio-light/60 text-xs">{social.url}</div>
                    </div>
                  </Button>
                ))}
              </div>

              <div className="mt-8">
                <Button className="w-full bg-portfolio-orange hover:bg-portfolio-orange/90 text-portfolio-dark font-semibold py-3 rounded-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download Portfolio CV
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-portfolio-orange/20">
        <div className="container mx-auto text-center">
          <p className="text-portfolio-light/60">
            © 2024 Ashutosh Sinha. Designed with passion in Bangalore, India.
          </p>
        </div>
      </footer>
    </div>
  );
}
