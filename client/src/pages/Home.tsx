import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, ExternalLink, Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { RecruiterFeedbackForm } from "@/components/RecruiterFeedbackForm";

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const profileImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663426521570/WRLM2DJhmhqpVMtVkFvkWm/profile_8a91d6c0.jpg";
  const resumeUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663426521570/WRLM2DJhmhqpVMtVkFvkWm/Prem's__resume_57f3aae5.pdf";
  const heroImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663426521570/WRLM2DJhmhqpVMtVkFvkWm/hero-data-visualization-9gAyRHSQi5ZCsfRe9DjRAA.webp";
  const skillsImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663426521570/WRLM2DJhmhqpVMtVkFvkWm/skills-pattern-PG2RhBEPMVA5Bh7EcaFuJS.webp";
  const projectsImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663426521570/WRLM2DJhmhqpVMtVkFvkWm/projects-accent-fNxwbuHiH7dNMg3zyRuwRQ.webp";

  const skills = [
    { category: "Programming Languages", items: ["Python"] },
    { category: "Data Analysis & Visualization", items: ["Pandas", "NumPy", "Matplotlib", "Seaborn"] },
    { category: "Database Management", items: ["SQL", "MySQL"] },
    { category: "Business Intelligence Tools", items: ["Power BI"] },
    { category: "Machine Learning", items: ["Scikit-learn"] },
  ];

  const projects = [
    {
      title: "WhatsApp Chat Analyzer",
      description: "Analyzed exported WhatsApp chats for sentiment, user activity, emoji frequency, and message patterns over time to extract insights.",
      tech: ["Python", "NLP", "ML"],
      link: "https://whatsappchatanalysising.streamlit.app/",
      highlights: ["Sentiment Analysis", "Emoji Frequency", "Message Patterns"],
    },
    {
      title: "Student Management System",
      description: "A desktop application to manage student records, attendance, and performance using a structured database.",
      tech: ["Python", "SQL"],
      highlights: ["Database Integration", "Record Management", "Performance Tracking"],
    },
    {
      title: "House Price Prediction",
      description: "Machine learning model for predicting house prices based on various features.",
      tech: ["Python", "Machine Learning"],
      highlights: ["Predictive Analytics", "Feature Engineering"],
    },
    {
      title: "Breast Cancer Detection",
      description: "ML classification model for detecting breast cancer patterns.",
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

  const achievements = [
    {
      title: "TCS ION NQT",
      description: "Scored 73% in TCS ION NQT in Sep 2025",
      icon: "🏆",
    },
    {
      title: "HackerRank SQL",
      description: "Rank 1 on HackerRank in SQL",
      icon: "⭐",
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
                Data Analytics
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Motivated and analytical-minded data enthusiast with hands-on internship experience in data analysis, visualization, and machine learning. Seeking an entry-level Data Analyst role where I can leverage my technical skills in Python, SQL, Power BI, and statistical modeling to extract actionable insights and drive data-driven decision-making.
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
          <div className="mt-12 space-y-4">
            {achievements.map((achievement, idx) => (
              <div key={idx} className="p-6 bg-primary text-primary-foreground rounded-xl hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{achievement.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                    <p className="text-primary-foreground/90">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-secondary/30">
        <div className="container">
          <h2 className="text-4xl font-bold text-primary mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {projects.map((project, idx) => (
              <Card key={idx} className="p-8 hover:shadow-lg transition border-l-4 border-l-accent">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-primary flex-1">{project.title}</h3>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="ml-2">
                      <ExternalLink className="w-5 h-5 text-accent hover:text-accent/80" />
                    </a>
                  )}
                </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-primary mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="outline" className="border-accent text-accent">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary mb-2">Highlights:</p>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
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

      {/* Recruiter Feedback Form Section */}
      <section id="feedback" className="py-20 bg-secondary/30">
        <div className="container">
          <h2 className="text-4xl font-bold text-primary mb-4 text-center">For Recruiters & HR</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Have a job opportunity or want to share feedback? Fill out the form below and I'll get back to you soon. Your inquiry will be sent directly to my email.
          </p>
          <RecruiterFeedbackForm />
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
            <a href="mailto:meipremkumar9@gmail.com">
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
