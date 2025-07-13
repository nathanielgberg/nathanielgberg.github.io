import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import {
  ArrowDown,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Calendar,
  Award,
  Code,
  Briefcase,
  GraduationCap,
  Star,
  Menu,
  X,
} from "lucide-react";

export default function Index() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-primary">Portfolio</div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                    Alex Johnson
                  </span>
                </h1>
                <p className="text-2xl lg:text-3xl text-muted-foreground font-light">
                  Full-Stack Developer & UI/UX Designer
                </p>
                <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                  I create beautiful, functional, and user-centered digital
                  experiences that solve real-world problems with clean code and
                  thoughtful design.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("projects")}
                  className="text-lg px-8 py-6"
                >
                  View My Work
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="text-lg px-8 py-6"
                >
                  Get In Touch
                </Button>
              </div>

              <div className="flex space-x-6">
                <a
                  href="mailto:alex@example.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-6 w-6" />
                </a>
                <a
                  href="https://github.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-full blur-3xl"></div>
                <div className="relative bg-card rounded-2xl p-8 border border-border shadow-xl">
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-primary to-blue-600 rounded-full mb-6 flex items-center justify-center">
                    <span className="text-6xl font-bold text-white">AJ</span>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>San Francisco, CA</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                      <Award className="h-4 w-4" />
                      <span>5+ Years Experience</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-16">
            <button
              onClick={() => scrollToSection("about")}
              className="animate-bounce text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowDown className="h-6 w-6" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm a passionate developer with a love for creating exceptional
              digital experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                With over 5 years of experience in full-stack development, I
                specialize in building scalable web applications using modern
                technologies like React, Node.js, and TypeScript.
              </p>
              <p className="text-lg leading-relaxed">
                I believe in writing clean, maintainable code and creating
                intuitive user interfaces that provide exceptional user
                experiences. My background in both development and design allows
                me to bridge the gap between technical implementation and
                user-centered design.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-muted-foreground">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">25+</div>
                  <div className="text-muted-foreground">Happy Clients</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Education</h3>
                      <p className="text-muted-foreground">
                        B.S. Computer Science
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Stanford University, 2019
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Certifications</h3>
                      <p className="text-muted-foreground">
                        AWS Solutions Architect
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Google Cloud Professional
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
            <p className="text-xl text-muted-foreground">
              My journey through the tech industry
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold">
                      Senior Full-Stack Developer
                    </h3>
                    <p className="text-primary font-medium">TechCorp Inc.</p>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>2022 - Present</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Led development of multiple high-impact web applications
                  serving 100k+ users. Architected scalable solutions using
                  React, Node.js, and AWS infrastructure.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">AWS</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold">
                      Frontend Developer
                    </h3>
                    <p className="text-primary font-medium">StartupXYZ</p>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>2020 - 2022</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Built responsive web applications and improved user experience
                  metrics by 40%. Collaborated with design team to implement
                  pixel-perfect UI components.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">CSS3</Badge>
                  <Badge variant="secondary">Redux</Badge>
                  <Badge variant="secondary">Figma</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold">Junior Developer</h3>
                    <p className="text-primary font-medium">
                      WebSolutions Ltd.
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>2019 - 2020</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Developed and maintained client websites using modern web
                  technologies. Gained experience in full-stack development and
                  agile methodologies.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">HTML5</Badge>
                  <Badge variant="secondary">CSS3</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">PHP</Badge>
                  <Badge variant="secondary">MySQL</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-xl text-muted-foreground">
              Technologies I work with on a daily basis
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Frontend</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>React/Next.js</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-primary text-primary"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>TypeScript</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-primary text-primary"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tailwind CSS</span>
                    <div className="flex space-x-1">
                      {[...Array(4)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-primary text-primary"
                        />
                      ))}
                      <Star className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Backend</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Node.js</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-primary text-primary"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>PostgreSQL</span>
                    <div className="flex space-x-1">
                      {[...Array(4)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-primary text-primary"
                        />
                      ))}
                      <Star className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Express.js</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-primary text-primary"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Tools & Others</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>AWS/Cloud</span>
                    <div className="flex space-x-1">
                      {[...Array(4)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-primary text-primary"
                        />
                      ))}
                      <Star className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Git/GitHub</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-primary text-primary"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Docker</span>
                    <div className="flex space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-primary text-primary"
                        />
                      ))}
                      {[...Array(2)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-muted-foreground"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground">
              Some of my recent work that I'm proud of
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-blue-600/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button size="sm" variant="secondary">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button size="sm" variant="outline">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                  <div className="p-6 h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                        <Code className="h-8 w-8 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground">
                        E-Commerce Platform
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">
                    Full-stack e-commerce solution with React, Node.js, and
                    Stripe integration.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">Stripe</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-green-400/20 to-blue-500/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button size="sm" variant="secondary">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button size="sm" variant="outline">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                  <div className="p-6 h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                        <Award className="h-8 w-8 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground">
                        Task Management App
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">
                    Collaborative task management with real-time updates and
                    team features.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">Socket.io</Badge>
                    <Badge variant="secondary">PostgreSQL</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-purple-400/20 to-pink-500/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button size="sm" variant="secondary">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button size="sm" variant="outline">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                  <div className="p-6 h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                        <Star className="h-8 w-8 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground">
                        Weather Dashboard
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">
                    Beautiful weather app with location-based forecasts and
                    interactive maps.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">API Integration</Badge>
                    <Badge variant="secondary">Charts</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-xl text-muted-foreground">
              Ready to bring your next project to life? Let's talk!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get in touch</h3>
                <p className="text-muted-foreground mb-8">
                  I'm always interested in hearing about new projects and
                  opportunities. Whether you're a company looking to hire, or
                  you're someone looking to build something awesome, I'd love to
                  hear from you.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:alex@example.com"
                      className="text-primary hover:underline"
                    >
                      alex@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a
                      href="tel:+1234567890"
                      className="text-primary hover:underline"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 pt-4">
                <a
                  href="https://github.com"
                  className="bg-primary/10 p-3 rounded-lg text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  className="bg-primary/10 p-3 rounded-lg text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <Button className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-muted-foreground mb-4 md:mb-0">
              © 2024 Alex Johnson. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
