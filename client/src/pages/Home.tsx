import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, ExternalLink, Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const profileImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663426521570/WRLM2DJhmhqpVMtVkFvkWm/profile_8a91d6c0.jpg";
  const resumeUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663426521570/WRLM2DJhmhqpVMtVkFvkWm/prem'sresume(DA)__e4eefd51.pdf";
  const heroImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663426521570/WRLM2DJhmhqpVMtVkFvkWm/hero-data-visualization-9gAyRHSQi5ZCsfRe9DjRAA.webp";
  const skillsImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663426521570/WRLM2DJhmhqpVMtVkFvkWm/skills-pattern-PG2RhBEPMVA5Bh7EcaFuJS.webp";
  const projectsImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663426521570/WRLM2DJhmhqpVMtVkFvkWm/projects-accent-fNxwbuHiH7dNMg3zyRuwRQ.webp";

  const skills = [
    { category: "Programming", items: ["Python"] },
    { category: "Data Analysis & Visualization", items: ["Pandas", "NumPy", "Matplotlib", "Seaborn"] },
    { category: "Database Management", items: ["SQL", "MySQL"] },
    { category: "Business Intelligence", items: ["Power BI"] },
    { category: "Machine Learning", items: ["Scikit-learn"] },
  ];

  const projects = [
    {
      title: "WhatsApp Chat Analyzer",
      description: "Advanced sentiment analysis and user activity tracking from WhatsApp conversations",
      tech: ["Python", "NLP", "Machine Learning"],
      link: "https://whatsappchatanalysising.streamlit.app/",
      highlights: ["Sentiment Analysis", "Emoji Frequency", "Message Patterns"],
    },
    {
      title: "Student Management System",
      description: "Desktop application for managing student records, attendance, and performance",
      tech: ["Python", "SQL"],
      highlights: ["Database Integration", "Record Management", "Performance Tracking"],
    },
    {
      title: "House Price Prediction",
      description: "Machine learning model for predicting house prices based on various features",
      tech: ["Python", "Machine Learning"],
      highlights: ["Predictive Analytics", "Feature Engineering"],
    },
    {
      title: "Breast Cancer Detection",
      description: "ML classification model for detecting breast cancer patterns",
      tech: ["Python", "Machine Learning"],
      highlights: ["Classification", "Medical Data Analysis"],
    },
  ];

  const experience = [
    {
      company: "Accenture",
      title: "Data Analytics & Visualization Internship",
      period: "2024-2025",
      description: "Hands-on experience with data analysis and visualization techniques",
    },
    {
      company: "TCS",
      title: "Data Visualization Internship",
      period: "2024",
      description: "Developed data visualization dashboards and reports",
    },
    {
      company: "IBM",
      title: "SQL and Relational Databases Certification",
      period: "2024",
      description: "Completed comprehensive SQL and database management training",
    },
    {
      company: "YBI Foundation",
      title: "Data Science & Machine Learning Certification",
      period: "2024",
      description: "Advanced training in data science and machine learning methodologies",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <h1 className="text-xl font-bold text-primary">Prem Kumar</h1>
          <div className="flex items-center gap-4">
            <a href="#about" className="text-sm hover:text-accent transition">About</a>
            <a href="#skills" className="text-sm hover:text-accent transition">Skills</a>
            <a href="#projects" className="text-sm hover:text-accent transition">Projects</a>
            <a href="#experience" className="text-sm hover:text-accent transition">Experience</a>
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="ml-4">
              <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.15,
          }}
        />
        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-primary mb-4">
                Data Analyst & ML Enthusiast
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Transforming raw data into actionable insights. Passionate about Python, SQL, Power BI, and machine learning.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </a>
              <a href="https://github.com/Premsoni9065" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
              </a>
              <a href="https://linkedin.com/in/prem-kumar-b5581120b" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
              </a>
            </div>
            <div className="flex gap-6 pt-4 text-sm text-muted-foreground">
              <div>
                <p className="font-semibold text-primary">📊 Data Analyst</p>
                <p>Entry-level professional</p>
              </div>
              <div>
                <p className="font-semibold text-primary">🎓 B.E. Computer Engineering</p>
                <p>MGM College (CGPA: 7.6)</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary/20 rounded-2xl blur-2xl opacity-50" />
              <img
                src={profileImage}
                alt="Prem Kumar"
                className="relative w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-accent/20"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-accent" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary/30">
        <div className="container">
          <h2 className="text-4xl font-bold text-primary mb-12">About Me</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-primary mb-3">Data Analysis</h3>
              <p className="text-muted-foreground">
                Specialized in extracting meaningful patterns from complex datasets using Python, Pandas, and SQL to drive data-driven decision-making.
              </p>
            </Card>
            <Card className="p-8 hover:shadow-lg transition">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-primary mb-3">Visualization</h3>
              <p className="text-muted-foreground">
                Creating compelling visual stories with Power BI, Matplotlib, and Seaborn to communicate insights effectively to stakeholders.
              </p>
            </Card>
            <Card className="p-8 hover:shadow-lg transition">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-primary mb-3">Machine Learning</h3>
              <p className="text-muted-foreground">
                Building predictive models and classification systems using Scikit-learn for real-world problem solving and insights generation.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${skillsImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.08,
          }}
        />
        <div className="container relative z-10">
          <h2 className="text-4xl font-bold text-primary mb-12">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition">
                <h3 className="text-lg font-bold text-primary mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/20">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-12 p-8 bg-primary text-primary-foreground rounded-xl">
            <h3 className="text-2xl font-bold mb-4">🏆 Achievement</h3>
            <p className="text-lg">Rank 1 on HackerRank in SQL - Demonstrating advanced database querying and optimization skills</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-secondary/30">
        <div className="container">
          <h2 className="text-4xl font-bold text-primary mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <Card key={idx} className="p-8 hover:shadow-xl transition group">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-primary group-hover:text-accent transition">
                    {project.title}
                  </h3>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5 text-accent hover:text-primary transition" />
                    </a>
                  )}
                </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-primary mb-2">Highlights:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight, i) => (
                      <Badge key={i} variant="outline" className="border-accent text-accent">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} className="bg-primary/10 text-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">More projects available on GitHub</p>
            <a href="https://github.com/Premsoni9065" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">
                <Github className="w-5 h-5 mr-2" />
                View All Projects
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-primary mb-12">Experience & Certifications</h2>
          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <Card key={idx} className="p-8 hover:shadow-lg transition border-l-4 border-l-accent">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-primary">{exp.company}</h3>
                    <p className="text-accent font-semibold">{exp.title}</p>
                  </div>
                  <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and projects. Feel free to reach out!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:mejpremkumar9@gmail.com">
              <Button size="lg" variant="secondary">
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </Button>
            </a>
            <a href="https://linkedin.com/in/prem-kumar-b5581120b" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
            </a>
            <a href="https://github.com/Premsoni9065" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
            </a>
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary">
                <Download className="w-5 h-5 mr-2" />
                Resume
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-secondary/50 border-t border-border">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2025 Prem Kumar. All rights reserved. | Data Analyst Portfolio</p>
        </div>
      </footer>
    </div>
  );
}
