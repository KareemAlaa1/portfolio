import React, { useState, useEffect } from "react";
import {
  Github,
  Mail,
  ExternalLink,
  Code2,
  Menu,
  X,
  Send,
  Phone,
  Linkedin,
} from "lucide-react";
import kareemImg from "./assets/kareem_comp_full.jpg";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [projectFilter, setProjectFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      name: "E-Commerce Platform",
      category: "web",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
      shortDesc: "Full-stack e-commerce solution with payment integration",
      fullDesc:
        "A comprehensive e-commerce platform built with modern web technologies. Features include user authentication, product catalog, shopping cart, secure payment processing with Stripe, order management, and admin dashboard. Implemented responsive design for seamless experience across devices.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "TailwindCSS"],
      github: "https://github.com/yourusername/ecommerce",
      live: "https://demo-ecommerce.com",
    },
    {
      id: 2,
      name: "Network Traffic Analyzer",
      category: "network",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
      shortDesc: "Real-time network traffic monitoring and analysis tool",
      fullDesc:
        "Advanced network traffic analyzer that captures and analyzes packets in real-time. Features protocol detection, bandwidth monitoring, traffic visualization with charts, anomaly detection, and detailed packet inspection. Supports multiple network interfaces and exports reports in various formats.",
      technologies: ["Python", "Scapy", "Flask", "Chart.js", "WebSocket"],
      github: "https://github.com/yourusername/network-analyzer",
      live: "https://demo-network-analyzer.com",
    },
    {
      id: 3,
      name: "Vulnerability Scanner",
      category: "cyber security",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop",
      shortDesc: "Automated security vulnerability detection system",
      fullDesc:
        "Comprehensive security scanner that identifies vulnerabilities in web applications and networks. Includes SQL injection detection, XSS testing, port scanning, SSL/TLS analysis, and compliance checking. Generates detailed reports with remediation recommendations and integrates with CI/CD pipelines.",
      technologies: [
        "Python",
        "Nmap",
        "SQLMap",
        "BeautifulSoup",
        "Docker",
        "AWS",
      ],
      github: "https://github.com/yourusername/vuln-scanner",
      live: "https://demo-vuln-scanner.com",
    },
    {
      id: 4,
      name: "Task Management App",
      category: "web",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop",
      shortDesc: "Collaborative project management platform",
      fullDesc:
        "Modern task management application designed for team collaboration. Features include drag-and-drop kanban boards, task assignments, deadline tracking, real-time updates, file attachments, comment threads, and progress analytics. Supports team workspaces and role-based access control.",
      technologies: ["React", "Firebase", "Material-UI", "Redux", "PWA"],
      github: "https://github.com/yourusername/task-manager",
      live: "https://demo-task-manager.com",
    },
    {
      id: 5,
      name: "Firewall Configuration Tool",
      category: "network",
      image:
        "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=500&fit=crop",
      shortDesc: "Automated firewall rule management system",
      fullDesc:
        "Enterprise-grade firewall configuration tool that simplifies rule management across multiple devices. Features include rule template library, conflict detection, automated backup and restore, compliance verification, and centralized management dashboard. Supports major firewall vendors and provides audit logging.",
      technologies: ["Python", "Ansible", "React", "PostgreSQL", "REST API"],
      github: "https://github.com/yourusername/firewall-tool",
      live: "https://demo-firewall-tool.com",
    },
    {
      id: 6,
      name: "Penetration Testing Suite",
      category: "cyber security",
      image:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=500&fit=crop",
      shortDesc: "Comprehensive pentesting toolkit for security professionals",
      fullDesc:
        "Professional penetration testing suite with modular architecture. Includes reconnaissance tools, exploitation frameworks, post-exploitation modules, privilege escalation utilities, and reporting engine. Features automated exploit chaining, custom payload generation, and detailed evidence collection for security assessments.",
      technologies: ["Python", "Metasploit", "Kali Linux", "React", "MongoDB"],
      github: "https://github.com/yourusername/pentest-suite",
      live: "https://demo-pentest-suite.com",
    },
  ];

  const filteredProjects =
    projectFilter === "all"
      ? projects
      : projects.filter((p) => p.category === projectFilter);

  const scrollToSection = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Please fill in all fields");
      return;
    }

    const mailtoLink = `mailto:your-email@example.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="portfolio-container">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
        }

        .portfolio-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
          color: white;
          position: relative;
          overflow-x: hidden;
        }

        .portfolio-container::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        /* Navbar */
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 50;
          transition: all 0.3s ease;
        }

        .navbar.scrolled {
          background: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .navbar-content {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.25rem;
  font-weight: bold;
  cursor: default;
  transition: color 0.3s ease;
}

.logo:hover {
  color: #60a5fa;
}

.logo-icon {
  color: #3b82f6;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 3rem; /* Increased from 2rem */
}

.nav-link {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  transition: color 0.3s ease;
  padding: 0.5rem 0;
  position: relative;
  white-space: nowrap; /* Prevents text wrapping */
}

.github-link {
  margin-left: 1rem; /* Extra space before GitHub icon */
}

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: #3b82f6;
          transition: width 0.3s ease;
        }

        .nav-link:hover {
          color: #60a5fa;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          padding: 0.5rem;
        }

        .mobile-menu {
          background: #0f172a;
          border-top: 1px solid #1e293b;
          padding: 1rem;
        }

        .mobile-menu-item {
          display: block;
          width: 100%;
          text-align: left;
          padding: 0.75rem 0;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          font-size: 1rem;
          transition: color 0.3s ease;
        }

        .mobile-menu-item:hover {
          color: #60a5fa;
        }

        /* Home Section */
.home-section {
  padding: 8rem 1rem 5rem;
  position: relative;
}

.home-content {
  max-width: 1280px;
  margin: 0 auto;
  animation: fadeInUp 0.8s ease-out;
}

.home-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.home-text {
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.home-title {
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.home-subtitle {
  font-size: 2rem;
  color: #cbd5e1;
  margin-bottom: 1.5rem;
}

.text-highlight {
  color: #3b82f6;
  position: relative;
  display: inline-block;
}

.text-highlight::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  border-radius: 2px;
}

.home-description {
  font-size: 1.125rem;
  color: #cbd5e1;
  line-height: 1.8;
  max-width: 600px;
}

.home-image {
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeInUp 0.8s ease-out 0.2s backwards;
}

.image-frame {
  position: relative;
  width: 525px;
  height: 700px;
  border-radius: 30px;
  padding: 1rem;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  box-shadow: 0 25px 50px rgba(59, 130, 246, 0.4);
  transition: transform 0.3s ease;
}

.image-frame:hover {
  transform: translateY(-10px);
}

.image-frame::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 30px;
  padding: 2px;
  background: linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: borderRotate 3s linear infinite;
}

@keyframes borderRotate {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}

.portrait-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;
  position: relative;
  z-index: 1;
}

.image-glow {
  position: absolute;
  inset: 0;
  border-radius: 30px;
  background: radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.3), transparent 70%);
  pointer-events: none;
  animation: pulse 3s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
}

.contact-info {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #cbd5e1;
  font-size: 1.125rem;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-item:hover {
  color: #3b82f6;
}


        .cta-button {
          display: inline-block;
          margin-top: 2rem;
          padding: 1rem 2rem;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
          text-decoration: none;
          border-radius: 12px;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
          position: relative;
          overflow: hidden;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(59, 130, 246, 0.4);
        }

        /* Projects Section */
        .projects-section {
          padding: 5rem 1rem;
          background: rgba(15, 23, 42, 0.5);
          position: relative;
        }

        .projects-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .section-title {
          font-size: 3rem;
          font-weight: bold;
          text-align: center;
          margin-bottom: 3rem;
        }

        .filter-buttons {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .filter-btn {
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          border: none;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          background: #1e293b;
          color: #94a3b8;
        }

        .filter-btn:hover {
          background: #334155;
          transform: translateY(-2px);
        }

        .filter-btn.active {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
          box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.4s ease;
          border: 1px solid rgba(59, 130, 246, 0.1);
          display: flex;
          flex-direction: column;
          animation: projectFadeIn 0.6s ease-out backwards;
        }

        @keyframes projectFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(59, 130, 246, 0.3);
          border-color: rgba(59, 130, 246, 0.5);
        }

        .project-image-container {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .project-card:hover .project-image {
          transform: scale(1.1);
        }

        .category-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .category-web {
          background: linear-gradient(135deg, #3b82f6, #2563eb);
        }

        .category-cyber {
          background: linear-gradient(135deg, #3b82f6, #2563eb);
        }

        .category-network {
          background: linear-gradient(135deg, #3b82f6, #2563eb);
        }

        .project-content {
          padding: 1.5rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .project-title {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }

        .project-desc {
          color: #94a3b8;
          margin-bottom: 1rem;
          flex-grow: 1;
          line-height: 1.6;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .tech-tag {
          padding: 0.4rem 0.8rem;
          background: #334155;
          border-radius: 8px;
          font-size: 0.75rem;
          color: #94a3b8;
        }

        .project-actions {
          display: flex;
          gap: 0.75rem;
        }

        .action-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem;
          border-radius: 10px;
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .action-btn.secondary {
          background: #334155;
          color: white;
        }

        .action-btn.secondary:hover {
          background: #475569;
        }

        .action-btn.primary {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
        }

        .action-btn.primary:hover {
          box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
          transform: translateY(-2px);
        }

        /* Contact Section */
        .contact-section {
          padding: 5rem 1rem;
          position: relative;
        }

        .contact-container {
          max-width: 700px;
          margin: 0 auto;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-input {
          width: 100%;
          padding: 1rem;
          background: #1e293b;
          border: 2px solid transparent;
          border-radius: 12px;
          color: white;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .form-input:focus {
          outline: none;
          border-color: #3b82f6;
          background: #0f172a;
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
        }

        .form-textarea {
          resize: none;
          min-height: 150px;
        }

        .submit-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 1rem;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(59, 130, 246, 0.4);
        }

        /* Modal */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(8px);
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          animation: fadeIn 0.3s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-content {
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
          border-radius: 24px;
          max-width: 900px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          animation: slideUp 0.4s ease-out;
          border: 1px solid rgba(59, 130, 246, 0.2);
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .modal-image-container {
          position: relative;
          height: 400px;
          overflow: hidden;
          border-radius: 24px 24px 0 0;
        }

        .modal-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(15, 23, 42, 0.9);
          border: none;
          color: white;
          padding: 0.75rem;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .modal-close:hover {
          background: #0f172a;
          transform: rotate(90deg);
        }

        .modal-body {
          padding: 2rem;
        }

        .modal-title {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .modal-desc {
          color: #cbd5e1;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        .tech-section-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .modal-actions {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        /* Responsive */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .mobile-menu-btn {
    display: block;
  }

  .home-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .home-image {
    order: -1;
  }

  .image-frame {
    width: 300px;
    height: 300px;
  }

  .home-title {
    font-size: 2.5rem;
  }

  .home-subtitle {
    font-size: 1.75rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .modal-image-container {
    height: 250px;
  }
}

@media (max-width: 640px) {
  .home-title {
    font-size: 2rem;
  }

  .home-subtitle {
    font-size: 1.5rem;
  }

  .image-frame {
    width: 250px;
    height: 250px;
  }
}
      `}</style>

      {/* Navbar */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-content">
          <div className="nav-links">
            <button
              onClick={() => scrollToSection("home")}
              className="nav-link"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="nav-link"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="nav-link"
            >
              Contact
            </button>
            <a
              href="https://github.com/kareemalaa1"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link github-link"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/karreeem/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link github-link"
            >
              <Linkedin size={22} />
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-menu">
            <button
              onClick={() => scrollToSection("home")}
              className="mobile-menu-item"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="mobile-menu-item"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="mobile-menu-item"
            >
              Contact
            </button>
            <a
              href="https://github.com/kareemalaa1"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-menu-item"
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/karreeem/"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-menu-item"
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <Linkedin size={20} />
              <span>Linkedin</span>
            </a>
          </div>
        )}
      </nav>

      {/* Home Section */}
      <section id="home" className="home-section">
        <div className="home-content">
          <div className="home-grid">
            {/* Text Section */}
            <div className="home-text">
              <h1 className="home-title">
                Hi, I am{" "}
                <span className="text-highlight">Kareem Abu Al Enein</span>
              </h1>

              <h2 className="home-subtitle">
                I am a <span className="text-highlight">Software Engineer</span>
              </h2>

              <p className="home-description">
                I am a fresh Computer Engineering graduate with a strong
                foundation in software development and computer systems.
                Passionate home backend and frontend engineering, DevOps,
                security, embedded systems, machine learning, and data analysis.
                Eager to solve real-world problems and contribute to impactful,
                scalable solutions.
              </p>

              <a
                href="https://drive.google.com/drive/u/3/folders/1HUjweAIgTpMyfOGmHEY1dF3j3JPbq065"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button"
              >
                Check Resume
              </a>

              {/* Contact Info */}
              <div className="contact-info">
                <a
                  href="mailto:kareem.enein@gmail.com"
                  className="contact-item"
                  aria-label="Email Kareem"
                >
                  <Mail size={20} />
                  <span>kareem.enein@gmail.com</span>
                </a>

                <a
                  href="tel:+201147119716"
                  className="contact-item"
                  aria-label="Call Kareem"
                >
                  <Phone size={20} />
                  <span>+20 114 711 9716</span>
                </a>
              </div>
            </div>

            {/* Image Section */}
            <div className="home-image">
              <div className="image-frame">
                <img
                  src={kareemImg}
                  alt="Kareem Abu Al Enein"
                  className="portrait-image"
                />
                <div className="image-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="projects-container">
          <h2 className="section-title">
            My <span className="text-highlight">Projects</span>
          </h2>

          <div className="filter-buttons">
            {["all", "web", "cyber security", "network"].map((filter) => (
              <button
                key={filter}
                onClick={() => setProjectFilter(filter)}
                className={`filter-btn ${
                  projectFilter === filter ? "active" : ""
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="project-card"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="project-image-container">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="project-image"
                  />
                  <div
                    className={`category-badge category-${
                      project.category === "cyber security"
                        ? "cyber"
                        : project.category
                    }`}
                  >
                    {project.category.toUpperCase()}
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.name}</h3>
                  <p className="project-desc">{project.shortDesc}</p>
                  <div className="tech-tags">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-tag">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="project-actions">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="action-btn secondary"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="action-btn primary"
                    >
                      <ExternalLink size={16} />
                      Live
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <h2 className="section-title">
            Get In <span className="text-highlight">Touch</span>
          </h2>
          <div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="form-input"
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="form-input form-textarea"
              />
            </div>
            <button onClick={handleSubmit} className="submit-btn">
              <Send size={20} />
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-image-container">
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="modal-image"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="modal-close"
              >
                <X size={24} />
              </button>
            </div>

            <div className="modal-body">
              <h3 className="modal-title">{selectedProject.name}</h3>
              <p className="modal-desc">{selectedProject.fullDesc}</p>

              <div>
                <h4 className="tech-section-title">Technologies Used</h4>
                <div className="tech-tags">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="modal-actions">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-btn secondary"
                  style={{ flex: 1 }}
                >
                  <Github size={20} />
                  View Code
                </a>

                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-btn primary"
                  style={{ flex: 1 }}
                >
                  <ExternalLink size={20} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
