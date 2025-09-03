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
  ExternalLink
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-portfolio-dark">
      {/* Navigation */}
      <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-portfolio-dark/80 backdrop-blur-md border border-portfolio-orange/20 rounded-full p-2 flex gap-2">
          <Button
            variant="default"
            size="sm"
            className="px-4 py-2 rounded-full bg-portfolio-orange text-portfolio-dark hover:bg-portfolio-orange/90"
          >
            Home
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="px-4 py-2 rounded-full text-portfolio-light hover:text-portfolio-orange hover:bg-portfolio-orange/10"
          >
            About
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="px-4 py-2 rounded-full text-portfolio-light hover:text-portfolio-orange hover:bg-portfolio-orange/10"
          >
            Projects
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="px-4 py-2 rounded-full text-portfolio-light hover:text-portfolio-orange hover:bg-portfolio-orange/10"
          >
            Contact
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
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
                <span className="text-sm">Available on request</span>
              </div>
              <div className="flex items-center gap-3 text-portfolio-light/80">
                <Phone className="w-5 h-5 text-portfolio-orange" />
                <span className="text-sm">Available on request</span>
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
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-20 px-4">
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
            {[
              {
                title: "Seekho App UX Case Study",
                description: "Comprehensive analysis and redesign to improve user engagement",
                tags: ["UX Research", "Mobile App", "Education"]
              },
              {
                title: "Swish Redesign Case Study", 
                description: "Platform revamp focusing on enhanced user experience",
                tags: ["Web Design", "Fintech", "UI/UX"]
              },
              {
                title: "Think41 Website Redesign",
                description: "Interactive landing page providing seamless user experience",
                tags: ["Web Design", "Landing Page", "B2B"]
              }
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden bg-portfolio-dark/50 border-portfolio-orange/20 hover:border-portfolio-orange/40 transition-all group">
                <div className="aspect-video bg-gradient-to-br from-portfolio-orange/10 to-portfolio-amber/10 relative overflow-hidden">
                  <div className="w-full h-full bg-portfolio-dark/20 flex items-center justify-center">
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

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-light mb-6">
            Let's <span className="text-gradient-orange">Connect</span>
          </h2>
          <p className="text-lg text-portfolio-light/80 max-w-3xl mx-auto mb-12">
            Available for freelance projects and full-time opportunities
          </p>

          <div className="flex justify-center gap-4">
            <Button className="bg-portfolio-orange hover:bg-portfolio-orange/90 text-portfolio-dark font-semibold px-6 py-3 rounded-full">
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </Button>
            <Button 
              variant="outline" 
              className="border-portfolio-orange text-portfolio-orange hover:bg-portfolio-orange hover:text-portfolio-dark px-6 py-3 rounded-full"
            >
              <Behance className="w-4 h-4 mr-2" />
              View Portfolio
            </Button>
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
