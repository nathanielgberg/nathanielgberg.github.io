import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect, useRef } from "react";
import { FlipCard } from "@/components/ui/flip-card";
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
  Brain,
  Rocket,
  Zap,
  Trophy,
  Users,
  Target,
  Cpu,
  Database,
  Smartphone,
  Bot,
  ChevronRight,
  BookOpen,
  Circle,
} from "lucide-react";

export default function Index() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentRole, setCurrentRole] = useState(0);
  const [projectsVisible, setProjectsVisible] = useState(false);
  const [firstProjectVisible, setFirstProjectVisible] = useState(false);
  const [secondProjectVisible, setSecondProjectVisible] = useState(false);
  const [thirdProjectVisible, setThirdProjectVisible] = useState(false);
  const [fourthProjectVisible, setFourthProjectVisible] = useState(false);
  const [fifthProjectVisible, setFifthProjectVisible] = useState(false);
  const [sixthProjectVisible, setSixthProjectVisible] = useState(false);
  const projectsRef = useRef(null);

  const roles = [
    "Co-Founder & CTO",
    "UX Researcher",
    "Nathaniel Greenberg",
    "BattleBots Champion",
  ];

  useEffect(() => {
    const roleText = roles[currentRole];
    let index = 0;
    const timer = setInterval(() => {
      setTypedText(roleText.slice(0, index));
      index++;
      if (index > roleText.length) {
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 2000);
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [currentRole]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setProjectsVisible(true);
            // Start the sequence of animations
            setTimeout(() => setFirstProjectVisible(true), 300);
            setTimeout(() => setSecondProjectVisible(true), 900);
            setTimeout(() => setThirdProjectVisible(true), 1500);
            setTimeout(() => setFourthProjectVisible(true), 2100);
            setTimeout(() => setFifthProjectVisible(true), 2700);
            setTimeout(() => setSixthProjectVisible(true), 3300);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-hero-gradient">
        <div className="absolute inset-0 bg-cyber-grid bg-[size:50px_50px] opacity-20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-float"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/10 backdrop-blur-xl border-b border-border/20 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-primary animate-glow">
              &lt;NG /&gt;
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["about", "experience", "skills", "projects", "contact"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:glow capitalize relative group"
                  >
                    {section}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </button>
                ),
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-border/20 animate-slide-up">
              <div className="container mx-auto px-6 py-4 space-y-4">
                {["about", "experience", "skills", "projects", "contact"].map(
                  (section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className="block w-full text-left text-muted-foreground hover:text-primary transition-colors py-2 capitalize"
                    >
                      {section}
                    </button>
                  ),
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-6 min-h-screen flex items-center">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <div className="text-sm text-primary font-mono animate-slide-up">
                  &gt; Hello World, I'm
                </div>
                <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-primary via-green-400 to-blue-400 bg-clip-text text-transparent">
                    Nathaniel
                  </span>
                  <br />
                  <span className="text-foreground">Greenberg</span>
                </h1>
                <div className="text-2xl lg:text-4xl text-muted-foreground font-light h-16">
                  <span className="font-mono">{typedText}</span>
                  <span className="animate-pulse">|</span>
                </div>
                <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                  Computer Engineering graduate student at UC San Diego with a
                  passion for building revolutionary products. From leading
                  championship robotics teams to architecting full-stack
                  applications, I turn complex problems into elegant solutions.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("projects")}
                  className="text-lg px-8 py-6 bg-primary hover:bg-primary/80 animate-pulse-glow"
                >
                  <Rocket className="mr-2 h-5 w-5" />
                  View My Work
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="text-lg px-8 py-6 border-primary/50 hover:border-primary"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </Button>
              </div>

              <div className="flex space-x-6">
                <a
                  href="mailto:ngreenberg@ucsd.edu"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <Mail className="h-6 w-6" />
                </a>
                <a
                  href="https://github.com/nathanielgberg"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com/in/nathanielgreenberg"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div className="relative animate-float">
              <div className="relative w-full max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-green-400/30 rounded-3xl blur-3xl animate-pulse-glow"></div>
                <Card className="relative bg-card/50 backdrop-blur-xl border-primary/20 shadow-2xl">
                                      <CardContent className="p-4">
                      <div className="text-center">
                        <div className="w-full h-auto mx-auto rounded-lg overflow-hidden">
                          <img src="/pfp.png" alt="Nathaniel Greenberg" className="w-full h-auto object-cover" />
                        </div>
                      </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-16 animate-bounce">
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowDown className="h-6 w-6" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-6 bg-background/50 backdrop-blur-sm relative"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-green-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="decoration-bar mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <p className="text-lg leading-relaxed">
                Currently pursuing my Master's in Computer Engineering at UC San
                Diego with a perfect 4.0 GPA, I'm passionate about creating
                technology that makes a meaningful difference. As Co-Founder and
                CTO of SkillTree, I've led a 12-person team to build a
                revolutionary workout app with real-time pose detection.
              </p>
              <p className="text-lg leading-relaxed">
                My journey includes groundbreaking work in explainable AI at UC
                San Diego's MINDS Lab, where I analyze user interaction data to
                improve AI-driven recommendations and study algorithmic
                fairness. But perhaps most uniquely, I'm a BattleBots champion -
                leading Team Riptide to become 2021 Rookie of the Year and
                achieving a #2 global ranking in 2022.
              </p>
            </div>

            <div className="h-[500px] animate-fade-in">
              <div className="w-full h-full">
                <FlipCard
                  front={
                    <Card className="w-full h-full bg-primary text-primary-foreground backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
                      <CardContent className="p-8 flex flex-col items-center justify-center h-full text-center">
                        <div className="flex flex-col items-center space-y-4 mb-6">
                          <div className="bg-white/20 p-3 rounded-lg">
                            <Star className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-3xl font-bold">Quick Facts</h3>
                        </div>
                        <div className="space-y-6">
                          <div className="flex items-center space-x-3">
                            <GraduationCap className="h-6 w-6 text-primary" />
                            <span className="text-lg">Computer Engineering @ UCSD</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Code className="h-6 w-6 text-primary" />
                            <span className="text-lg">Software Developer</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <MapPin className="h-6 w-6 text-primary" />
                            <span className="text-lg">San Diego, California</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Briefcase className="h-6 w-6 text-primary" />
                            <span className="text-lg">Aspiring TPM/PM</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  }
                  back={
                    <Card className="w-full h-full bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
                      <CardContent className="p-8 flex flex-col items-center justify-center h-full text-center">
                        <div className="flex flex-col items-center space-y-4 mb-6">
                          <div className="bg-primary/20 p-3 rounded-lg">
                            <Trophy className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="text-3xl font-bold">Notable Achievements</h3>
                        </div>
                        <div className="space-y-4 text-lg">
                          <div className="flex items-center space-x-2">
                            <Circle className="h-6 w-6 text-primary flex-shrink-0 fill-primary" />
                            <span>2021 BattleBots Rookie of the Year</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Circle className="h-6 w-6 text-primary flex-shrink-0 fill-primary" />
                            <span>#2 Global Ranking BattleBots 2022</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Circle className="h-6 w-6 text-primary flex-shrink-0 fill-primary" />
                            <span>2020 California VEX State Champion</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Circle className="h-6 w-6 text-primary flex-shrink-0 fill-primary" />
                            <span>First-author paper accepted at FAccT</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6 bg-background/50 backdrop-blur-sm relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-green-400 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="decoration-bar mx-auto"></div>
          </div>

          <div className="flex justify-center gap-20">
            {/* Bachelor's Degree */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-[1.01] animate-slide-up h-[600px] aspect-square w-[600px]">
              <CardContent className="p-12 h-full">
                <div className="flex flex-col items-center justify-center text-center space-y-6 h-full">
                  <div className="w-32 h-32 flex items-center justify-center">
                    <img 
                      src="/ucsd logo.png" 
                      alt="University of California, San Diego logo" 
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold whitespace-nowrap">University of California, San Diego</h3>
                    <p className="text-xl text-primary">Bachelor of Science in Computer Engineering</p>
                  </div>

                  <div className="bg-primary text-primary-foreground px-6 py-2 rounded-full">
                    Sep 2020 - June 2024
                  </div>

                  <div className="text-xl font-semibold">
                    GPA: 3.4/4.0
                  </div>

                  <div className="flex flex-wrap justify-center gap-2">
                    <div className="flex items-center space-x-2 bg-card/50 px-3 py-2 rounded-md border border-primary/20">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <span>Software Engineering</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-card/50 px-3 py-2 rounded-md border border-primary/20">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <span>Adv Data Structures</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-card/50 px-3 py-2 rounded-md border border-primary/20">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <span>Computer Architecture</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-card/50 px-3 py-2 rounded-md border border-primary/20">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <span>Database Systems</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-card/50 px-3 py-2 rounded-md border border-primary/20">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <span>Interaction Design</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-card/50 px-3 py-2 rounded-md border border-primary/20">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <span>Innovation & Tech Strategy</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Master's Degree */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-[1.01] animate-slide-up h-[600px] aspect-square w-[600px]">
              <CardContent className="p-12 h-full">
                <div className="flex flex-col items-center justify-center text-center space-y-6 h-full">
                  <div className="w-32 h-32 flex items-center justify-center">
                    <img 
                      src="/ucsd logo.png" 
                      alt="University of California, San Diego logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold whitespace-nowrap">University of California, San Diego</h3>
                    <p className="text-xl text-primary">Master of Science in Computer Engineering</p>
                  </div>

                  <div className="bg-primary text-primary-foreground px-6 py-2 rounded-full">
                    Sep 2024 - Dec 2025
                  </div>

                  <div className="text-xl font-semibold">
                    GPA: 4.0/4.0
                  </div>

                  <div className="flex flex-wrap justify-center gap-2">
                    <div className="flex items-center space-x-2 bg-card/50 px-3 py-2 rounded-md border border-primary/20">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <span>Adv ML</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-card/50 px-3 py-2 rounded-md border border-primary/20">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <span>Deep Learning</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-card/50 px-3 py-2 rounded-md border border-primary/20">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <span>Computer Vision</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-card/50 px-3 py-2 rounded-md border border-primary/20">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <span>Explainable AI</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-card/50 px-3 py-2 rounded-md border border-primary/20">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <span>Research</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-card/50 px-3 py-2 rounded-md border border-primary/20">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <span>Algo Fairness</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-green-400 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <p className="text-xl text-muted-foreground">
              Building the future through technology and leadership
            </p>
          </div>

          <div className="space-y-8">
            {/* UC San Diego MINDS Lab */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-[1.02] animate-slide-up group">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                                                          <div className="flex items-center space-x-4 mb-4 md:mb-0">
                        <img src="/mindslab.png" alt="MINDS Lab Logo" className="h-12 w-12 object-contain group-hover:scale-110 transition-transform duration-300 rounded-lg" />
                      <div>
                      <h3 className="text-2xl font-semibold">
                        UX Researcher (Explainable AI)
                      </h3>
                      <p className="text-primary font-medium">
                        UC San Diego MINDS Lab
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>March 2025 - Present</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <Circle className="h-2 w-2 text-primary mt-1.5 flex-shrink-0 fill-primary" />
                    <p className="text-muted-foreground leading-relaxed">
                      Conducting UX research to improve explainability and
                      fairness in AI systems, with a focus on novel interaction
                      techniques for ML model understanding.
                    </p>
                  </div>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-start space-x-2">
                      <Circle className="h-2 w-2 text-primary mt-1.5 flex-shrink-0 fill-primary" />
                      <span>
                        Authored paper on explainable AI interfaces accepted at
                        top-tier HCI conference
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Circle className="h-2 w-2 text-primary mt-1.5 flex-shrink-0 fill-primary" />
                      <span>
                        Developed interactive visualization tools for ML model
                        exploration
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge
                    variant="secondary"
                    className="bg-primary/20 text-primary border-primary/30"
                  >
                    Python
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-primary/20 text-primary border-primary/30"
                  >
                    Machine Learning
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-primary/20 text-primary border-primary/30"
                  >
                    UX Research
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-primary/20 text-primary border-primary/30"
                  >
                    Data Analysis
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* SkillTree */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-[1.02] animate-slide-up group">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                  <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <img src="/adaptive-icon.png" alt="SkillTree Logo" className="h-12 w-12 object-contain group-hover:scale-110 transition-transform duration-300 rounded-lg" />
                    <div>
                      <h3 className="text-2xl font-semibold">
                        Co-Founder | CTO | Lead Engineer
                      </h3>
                      <p className="text-primary font-medium">SkillTree</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>January 2025 - Present</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <Circle className="h-2 w-2 text-primary mt-1.5 flex-shrink-0 fill-primary" />
                    <p className="text-muted-foreground leading-relaxed">
                      Leading a 12-person cross-functional team to build
                      SkillTree, a revolutionary workout app with real-time pose
                      detection, funded by Blackstone LaunchPad.
                    </p>
                  </div>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-start space-x-2">
                      <Circle className="h-2 w-2 text-primary mt-1.5 flex-shrink-0 fill-primary" />
                      <span>
                        Architected full-stack app using React Native,
                        TypeScript, AWS Amplify, and DynamoDB
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Circle className="h-2 w-2 text-primary mt-1.5 flex-shrink-0 fill-primary" />
                      <span>
                        Facilitated 40+ user interviews driving 45% feature
                        improvement
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge
                    variant="secondary"
                    className="bg-primary/20 text-primary border-primary/30"
                  >
                    React Native
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-primary/20 text-primary border-primary/30"
                  >
                    TypeScript
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-primary/20 text-primary border-primary/30"
                  >
                    AWS Amplify
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-primary/20 text-primary border-primary/30"
                  >
                    DynamoDB
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* NNN Smart Solutions */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-[1.02] animate-slide-up group">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                  <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <img src="/nnnlogo.png" alt="NNN Smart Solutions Logo" className="h-12 w-12 object-contain group-hover:scale-110 transition-transform duration-300 rounded-lg" />
                    <div>
                      <h3 className="text-2xl font-semibold">
                        Software Developer Intern
                      </h3>
                      <p className="text-primary font-medium">NNN Smart Solutions</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>June 2022 - January 2025</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <Circle className="h-2 w-2 text-primary mt-1.5 flex-shrink-0 fill-primary" />
                    <p className="text-muted-foreground leading-relaxed">
                      Contributed to web development and accessibility projects as a software engineering intern.
                    </p>
                  </div>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-start space-x-2">
                      <Circle className="h-2 w-2 text-primary mt-1.5 flex-shrink-0 fill-primary" />
                      <span>
                        Designed the company website in Figma and built it with React, delivering a modern, responsive UX
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Circle className="h-2 w-2 text-primary mt-1.5 flex-shrink-0 fill-primary" />
                      <span>
                        Ensured website compliance with accessibility standards, optimizing usability for a diverse customer base
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge
                    variant="secondary"
                    className="bg-primary/20 text-primary border-primary/30"
                  >
                    React
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-primary/20 text-primary border-primary/30"
                  >
                    Figma
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-primary/20 text-primary border-primary/30"
                  >
                    Web Accessibility
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-primary/20 text-primary border-primary/30"
                  >
                    UI/UX
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* BattleBots */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-[1.02] animate-slide-up group">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                  <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <img src="/bblogo.png" alt="BattleBots Logo" className="h-12 w-12 object-contain group-hover:scale-110 transition-transform duration-300 rounded-lg" />
                    <div>
                      <h3 className="text-2xl font-semibold">
                        Assembly and Design Lead
                      </h3>
                      <p className="text-primary font-medium">
                        BattleBots Team Riptide
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>March 2020 - December 2023</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-start space-x-2">
                      <Circle className="h-2 w-2 text-primary mt-1.5 flex-shrink-0 fill-primary" />
                      <span>Led and supervised a 7-person team in the design, assembly, and maintenance of multiple 250lb combat robots</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Circle className="h-2 w-2 text-primary mt-1.5 flex-shrink-0 fill-primary" />
                      <span>Raised over 40k through sponsorships, merchandise sales, and crowdfunding to support builds and travel logistics</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Circle className="h-2 w-2 text-primary mt-1.5 flex-shrink-0 fill-primary" />
                      <span>2021 BattleBots Rookie of the Year and ranked #2 globally in 2022, with robots featured on nationally televised matches reaching millions of viewers per episode</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge
                    variant="secondary"
                    className="bg-primary/20 text-primary border-primary/30"
                  >
                    Mechanical Design
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-primary/20 text-primary border-primary/30"
                  >
                    Team Leadership
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-primary/20 text-primary border-primary/30"
                  >
                    Fundraising
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-primary/20 text-primary border-primary/30"
                  >
                    C++
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-6 bg-background/50 backdrop-blur-sm relative"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-green-400 bg-clip-text text-transparent">
              Technical Arsenal
            </h2>
            <p className="text-xl text-muted-foreground">
              Technologies and tools I use to build the future
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 animate-fade-in group">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-primary/20 p-3 rounded-lg group-hover:animate-spin-slow">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Languages</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { name: "Python", level: 5 },
                    { name: "TypeScript", level: 5 },
                    { name: "JavaScript", level: 5 },
                    { name: "Java", level: 4 },
                    { name: "C/C++", level: 4 },
                    { name: "CUDA", level: 3 },
                  ].map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">
                          {skill.name}
                        </span>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${
                                i < skill.level
                                  ? "fill-primary text-primary"
                                  : "text-muted-foreground"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="w-full bg-muted/20 rounded-full h-1.5">
                        <div
                          className="bg-primary h-1.5 rounded-full transition-all duration-1000 delay-300"
                          style={{ width: `${(skill.level / 5) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Frameworks & Libraries */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 animate-fade-in group">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-primary/20 p-3 rounded-lg group-hover:animate-spin-slow">
                    <Smartphone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Libraries/Frameworks</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { name: "React/React Native", level: 5 },
                    { name: "Node.js", level: 5 },
                    { name: "PyTorch", level: 4 },
                    { name: "TensorFlow", level: 4 },
                    { name: "Express.js", level: 4 },
                  ].map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">
                          {skill.name}
                        </span>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${
                                i < skill.level
                                  ? "fill-primary text-primary"
                                  : "text-muted-foreground"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="w-full bg-muted/20 rounded-full h-1.5">
                        <div
                          className="bg-primary h-1.5 rounded-full transition-all duration-1000 delay-500"
                          style={{ width: `${(skill.level / 5) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tools & Platforms */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 animate-fade-in group">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-primary/20 p-3 rounded-lg group-hover:animate-spin-slow">
                    <Database className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Developer Tools</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { name: "AWS Amplify", level: 5 },
                    { name: "Git/GitHub", level: 5 },
                    { name: "DynamoDB", level: 4 },
                    { name: "Figma", level: 4 },
                    { name: "Expo/EAS CLI", level: 4 },
                  ].map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">
                          {skill.name}
                        </span>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${
                                i < skill.level
                                  ? "fill-primary text-primary"
                                  : "text-muted-foreground"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="w-full bg-muted/20 rounded-full h-1.5">
                        <div
                          className="bg-primary h-1.5 rounded-full transition-all duration-1000 delay-700"
                          style={{ width: `${(skill.level / 5) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative" ref={projectsRef}>
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-green-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground">
              Innovative solutions that push the boundaries of technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 container mx-auto">
            {/* SkillTree App */}
            <Card className={`group overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-[1.02] ${firstProjectVisible ? 'animate-fade-in-sequential' : 'opacity-0'}`}>
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/30 to-green-400/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="animate-pulse-glow"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button size="sm" variant="outline">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                  <div className="p-8 h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center animate-float">
                        <img src="/adaptive-icon.png" alt="SkillTree Logo" className="h-16 w-16 object-contain rounded-lg" />
                      </div>
                      <h4 className="text-2xl font-semibold text-foreground">
                        SkillTree
                      </h4>
                      <p className="text-primary font-medium">Workout App</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">
                    Revolutionary workout app with real-time pose detection
                    using React Native, TypeScript, and AWS. Led 12-person team
                    to secure Blackstone LaunchPad funding.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="secondary"
                      className="bg-primary/20 text-primary"
                    >
                      React Native
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-primary/20 text-primary"
                    >
                      TypeScript
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-primary/20 text-primary"
                    >
                      AWS
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-primary/20 text-primary"
                    >
                      ML/AI
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CUDA DCGAN Optimizer */}
            <Card className={`group overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-[1.02] ${secondProjectVisible ? 'animate-fade-in-sequential' : 'opacity-0'}`}>
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-purple-400/30 to-blue-500/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="animate-pulse-glow"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                      <Button size="sm" variant="outline">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                  <div className="p-8 h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-purple-500 rounded-xl mx-auto mb-4 flex items-center justify-center animate-float">
                        <Cpu className="h-10 w-10 text-white" />
                      </div>
                      <h4 className="text-2xl font-semibold text-foreground">
                        CUDA DCGAN Optimizer
                      </h4>
                      <p className="text-primary font-medium">GPU Computing</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">
                    Developed low-level CUDA kernels for a Python-based DCGAN
                    pipeline, achieving 34x faster training through memory
                    coalescing and shared memory techniques.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="secondary"
                      className="bg-primary/20 text-primary"
                    >
                      Python
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-primary/20 text-primary"
                    >
                      CUDA
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-primary/20 text-primary"
                    >
                      PyTorch
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-primary/20 text-primary"
                    >
                      GPU Computing
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* BattleBots */}
            <Card className={`group overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-[1.02] ${thirdProjectVisible ? 'animate-fade-in-sequential' : 'opacity-0'}`}>
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-blue-400/30 to-purple-500/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="animate-pulse-glow"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                      <Button size="sm" variant="outline">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                  <div className="p-8 h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center animate-float">
                        <img src="/bblogo.png" alt="BattleBots Logo" className="h-16 w-16 object-contain rounded-lg" />
                      </div>
                      <h4 className="text-2xl font-semibold text-foreground">
                        BattleBots
                      </h4>
                      <p className="text-primary font-medium">Robotics</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">
                    Led a 7-person team in designing, building, and competing
                    with combat robots in the BattleBots competition.
                    Achieved #2 global ranking in 2022.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="secondary"
                      className="bg-primary/20 text-primary"
                    >
                      Mechanical Design
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-primary/20 text-primary"
                    >
                      Team Leadership
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-primary/20 text-primary"
                    >
                      C++
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-primary/20 text-primary"
                    >
                      Robotics
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* MINDS Lab Research */}
            <Card className={`group overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-[1.02] ${fourthProjectVisible ? 'animate-fade-in-sequential' : 'opacity-0'}`}>
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-green-400/30 to-blue-400/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="animate-pulse-glow"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                      <Button size="sm" variant="outline">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                  <div className="p-8 h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-green-500 rounded-xl mx-auto mb-4 flex items-center justify-center animate-float">
                        <img src="/mindslab.png" alt="MINDS Lab Logo" className="h-16 w-16 object-contain rounded-lg" />
                      </div>
                      <h4 className="text-2xl font-semibold text-foreground">
                        MINDS Lab Research
                      </h4>
                      <p className="text-primary font-medium">Explainable AI</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">
                    Conducted UX research and developed interactive tools for
                    ML model understanding at UC San Diego's MINDS Lab.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="secondary"
                      className="bg-primary/20 text-primary"
                    >
                      UX Research
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-primary/20 text-primary"
                    >
                      ML/AI
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-primary/20 text-primary"
                    >
                      HCI
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-primary/20 text-primary"
                    >
                      Research
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* VEX Robotics */}
            <Card className={`group overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-[1.02] ${fifthProjectVisible ? 'animate-fade-in-sequential' : 'opacity-0'}`}>
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-red-400/30 to-orange-400/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="animate-pulse-glow"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                      <Button size="sm" variant="outline">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                  <div className="p-8 h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-red-500 rounded-xl mx-auto mb-4 flex items-center justify-center animate-float">
                        <Bot className="h-10 w-10 text-white" />
                      </div>
                      <h4 className="text-2xl font-semibold text-foreground">
                        VEX Robotics
                      </h4>
                      <p className="text-primary font-medium">Competition Robotics</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">
                    Led team to California VEX State Championship victory in 2020, 
                    designing and programming autonomous robots for competitive challenges.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="secondary"
                      className="bg-primary/20 text-primary"
                    >
                      Robotics
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-primary/20 text-primary"
                    >
                      C++
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-primary/20 text-primary"
                    >
                      CAD
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-primary/20 text-primary"
                    >
                      Competition
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Personal Portfolio */}
            <Card className={`group overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-[1.02] ${sixthProjectVisible ? 'animate-fade-in-sequential' : 'opacity-0'}`}>
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-indigo-400/30 to-pink-400/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="animate-pulse-glow"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Site
                      </Button>
                      <Button size="sm" variant="outline">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                  <div className="p-8 h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-indigo-500 rounded-xl mx-auto mb-4 flex items-center justify-center animate-float">
                        <Code className="h-10 w-10 text-white" />
                      </div>
                      <h4 className="text-2xl font-semibold text-foreground">
                        Personal Portfolio
                      </h4>
                      <p className="text-primary font-medium">Web Development</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">
                    Modern, responsive portfolio website built with React, TypeScript, 
                    and Tailwind CSS featuring animated UI components and custom designs.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="secondary"
                      className="bg-primary/20 text-primary"
                    >
                      React
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-primary/20 text-primary"
                    >
                      TypeScript
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-primary/20 text-primary"
                    >
                      Tailwind CSS
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-primary/20 text-primary"
                    >
                      UI/UX
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-6 bg-background/50 backdrop-blur-sm relative"
      >
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-green-400 bg-clip-text text-transparent">
              Let's Build Something Amazing
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to collaborate on the next big thing? Let's connect!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8 animate-slide-up">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get in touch</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Whether you're looking for a co-founder, a technical leader,
                  or someone who can bridge the gap between engineering
                  excellence and business impact, I'd love to hear about your
                  vision.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="bg-primary/20 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:ngreenberg@ucsd.edu"
                      className="text-primary hover:underline transition-colors"
                    >
                      ngreenberg@ucsd.edu
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="bg-primary/20 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a
                      href="tel:+18184241205"
                      className="text-primary hover:underline transition-colors"
                    >
                      (818) 424-1205
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="bg-primary/20 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">San Diego, CA</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 pt-6">
                <a
                  href="https://github.com/nathanielgberg"
                  className="bg-primary/20 p-3 rounded-lg text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/nathanielgreenberg"
                  className="bg-primary/20 p-3 rounded-lg text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 animate-fade-in">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none backdrop-blur-sm"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <Button className="w-full animate-pulse-glow" size="lg">
                    <Zap className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/20 bg-background/30 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-muted-foreground mb-4 md:mb-0">
              © 2024 Nathaniel Greenberg. All rights reserved.
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
