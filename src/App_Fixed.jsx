import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0.9, 0.95]);
  const headerBlur = useTransform(scrollY, [0, 100], [10, 20]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <div className={`min-vh-100 transition-all ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`} style={{
      background: darkMode 
        ? 'linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)' 
        : 'linear-gradient(135deg, #e3f2fd, #ffffff, #f3e5f5)'
    }}>
      <motion.header 
        style={{ 
          opacity: headerOpacity,
          backdropFilter: `blur(${headerBlur}px)`
        }}
        className={`sticky-top shadow ${darkMode ? 'bg-dark bg-opacity-90 border-secondary' : 'bg-white bg-opacity-90 border-light'} border-bottom`}
      >
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="navbar-brand"
            >
              <h1 className="h4 mb-0 fw-bold" style={{
                background: darkMode 
                  ? 'linear-gradient(45deg, #64b5f6, #ba68c8)' 
                  : 'linear-gradient(45deg, #1976d2, #7b1fa2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Sheryl Anne S. Bargado
              </h1>
              <p className={`small mb-0 fw-medium ${darkMode ? 'text-light' : 'text-muted'}`}>
                IT Specialist & System Architect
              </p>
            </motion.div>

            <button 
              className="navbar-toggler border-0" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarNav"
              style={{ color: darkMode ? '#fff' : '#000' }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {['About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
                  <motion.li key={item} className="nav-item mx-2">
                    <motion.a 
                      href={`#${item.toLowerCase()}`}
                      whileHover={{ y: -2 }}
                      className={`nav-link fw-medium px-3 py-2 rounded-3 ${
                        darkMode ? 'text-light' : 'text-dark'
                      }`}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        delay: 0.2 + index * 0.1,
                        type: "spring",
                        stiffness: 300
                      }}
                      style={{
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = darkMode ? 'rgba(59, 130, 246, 0.15)' : 'rgba(59, 130, 246, 0.1)';
                        e.target.style.color = darkMode ? '#60a5fa' : '#2563eb';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.color = darkMode ? '#f8f9fa' : '#212529';
                      }}
                    >
                      {item}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
              
              <div className="d-flex align-items-center gap-3">
                <motion.a 
                  download 
                  href="/resume.pdf"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-primary rounded-3 fw-medium px-4"
                  style={{
                    background: 'linear-gradient(45deg, #007bff, #6f42c1)',
                    border: 'none'
                  }}
                >
                  <i className="bi bi-download me-2"></i>
                  Resume
                </motion.a>
                
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setDarkMode(!darkMode)} 
                  className={`btn ${darkMode ? 'btn-outline-light' : 'btn-outline-dark'} rounded-3`}
                  style={{ fontSize: '1.2rem' }}
                >
                  <motion.span
                    animate={{ rotate: darkMode ? 0 : 180 }}
                    transition={{ duration: 0.3 }}
                    className="d-block"
                  >
                    {darkMode ? '🌙' : '☀️'}
                  </motion.span>
                </motion.button>
              </div>
            </div>
          </div>
        </nav>
      </motion.header>

      <motion.main
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Hero Landing Section */}
        <motion.section 
          variants={itemVariants}
          id="about"
          className="min-vh-100 d-flex align-items-center"
          style={{ paddingTop: '2rem', paddingBottom: '2rem' }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <motion.h1 
                    className="display-3 fw-bold mb-4"
                    style={{
                      background: darkMode 
                        ? 'linear-gradient(45deg, #64b5f6, #ba68c8, #f48fb1)' 
                        : 'linear-gradient(45deg, #1976d2, #7b1fa2, #c2185b)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      lineHeight: '1.2'
                    }}
                    animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    Hello, I'm Sheryl
                  </motion.h1>
                  
                  <motion.h2 
                    className={`h3 mb-4 ${darkMode ? 'text-info' : 'text-primary'}`}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    IT Specialist & System Architect
                  </motion.h2>
                  
                  <motion.p 
                    className={`lead mb-5 ${darkMode ? 'text-light' : 'text-muted'}`}
                    style={{ maxWidth: '500px' }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    Passionate IT professional creating innovative solutions for complex technical challenges. 
                    I specialize in system administration, web development, and modern cloud technologies.
                  </motion.p>
                  
                  <motion.div 
                    className="d-flex flex-wrap gap-3 mb-5"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                  >
                    <motion.a 
                      href="#projects"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn btn-primary btn-lg rounded-3 px-4 py-3"
                      style={{
                        background: 'linear-gradient(45deg, #007bff, #6f42c1)',
                        border: 'none'
                      }}
                    >
                      <i className="bi bi-rocket-takeoff me-2"></i>
                      View My Work
                    </motion.a>
                    
                    <motion.a 
                      href="#contact"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`btn ${darkMode ? 'btn-outline-light' : 'btn-outline-primary'} btn-lg rounded-3 px-4 py-3`}
                    >
                      <i className="bi bi-chat-dots me-2"></i>
                      Get In Touch
                    </motion.a>
                  </motion.div>
                  
                  <motion.div 
                    className="d-flex flex-wrap gap-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                  >
                    {[
                      { icon: 'bi-envelope', link: 'mailto:sheryl@example.com', label: 'Email' },
                      { icon: 'bi-linkedin', link: 'https://linkedin.com/in/sheryl', label: 'LinkedIn' },
                      { icon: 'bi-github', link: 'https://github.com/sheryl', label: 'GitHub' }
                    ].map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.link}
                        whileHover={{ y: -3 }}
                        className={`btn ${darkMode ? 'btn-outline-secondary' : 'btn-outline-dark'} btn-sm rounded-circle d-flex align-items-center justify-content-center`}
                        style={{ width: '45px', height: '45px' }}
                        title={social.label}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 + index * 0.1 }}
                      >
                        <i className={`bi ${social.icon}`}></i>
                      </motion.a>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
              
              <div className="col-lg-6">
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-center"
                >
                  <div 
                    className="position-relative d-inline-block"
                    style={{ 
                      width: '400px', 
                      height: '400px',
                      maxWidth: '100%'
                    }}
                  >
                    <motion.div
                      animate={{ 
                        rotate: 360,
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ 
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                        scale: { duration: 2, repeat: Infinity }
                      }}
                      className="position-absolute w-100 h-100 rounded-circle border border-3"
                      style={{
                        borderColor: darkMode ? '#60a5fa' : '#2563eb',
                        borderStyle: 'dashed'
                      }}
                    />
                    
                    <motion.div
                      animate={{ 
                        y: [0, -20, 0]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="d-flex align-items-center justify-content-center w-100 h-100 rounded-circle position-relative"
                      style={{
                        background: darkMode 
                          ? 'linear-gradient(135deg, rgba(52, 58, 64, 0.8), rgba(33, 37, 41, 0.8))' 
                          : 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 249, 250, 0.9))',
                        backdropFilter: 'blur(20px)',
                        border: darkMode ? '2px solid rgba(108, 117, 125, 0.3)' : '2px solid rgba(222, 226, 230, 0.3)',
                        fontSize: '120px'
                      }}
                    >
                      💻
                    </motion.div>
                    
                    {/* Floating Tech Icons */}
                    {['⚛️', '🐧', '☁️', '🔧', '🌐', '⚡'].map((icon, index) => (
                      <motion.div
                        key={index}
                        animate={{
                          y: [0, -15, 0],
                          rotate: [0, 360]
                        }}
                        transition={{
                          y: { duration: 2 + index * 0.5, repeat: Infinity, ease: "easeInOut" },
                          rotate: { duration: 10 + index * 2, repeat: Infinity, ease: "linear" }
                        }}
                        className="position-absolute d-flex align-items-center justify-content-center rounded-circle shadow-sm"
                        style={{
                          width: '60px',
                          height: '60px',
                          fontSize: '24px',
                          background: darkMode 
                            ? 'rgba(52, 58, 64, 0.9)' 
                            : 'rgba(255, 255, 255, 0.9)',
                          backdropFilter: 'blur(10px)',
                          border: darkMode ? '1px solid rgba(108, 117, 125, 0.5)' : '1px solid rgba(222, 226, 230, 0.5)',
                          top: `${20 + Math.sin((index * Math.PI) / 3) * 30}%`,
                          left: `${50 + Math.cos((index * Math.PI) / 3) * 40}%`,
                          transform: 'translate(-50%, -50%)'
                        }}
                      >
                        {icon}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          variants={itemVariants}
          id="skills"
          className="py-5"
        >
          <div className="container">
            <div className="card shadow border-0 rounded-4 p-4 mb-5"
              style={{
                background: darkMode 
                  ? 'linear-gradient(135deg, rgba(52, 58, 64, 0.3), rgba(33, 37, 41, 0.3))' 
                  : 'linear-gradient(135deg, rgba(255, 255, 255, 0.7), rgba(248, 249, 250, 0.7))',
                backdropFilter: 'blur(16px)',
                border: darkMode ? '1px solid rgba(108, 117, 125, 0.3)' : '1px solid rgba(222, 226, 230, 0.3)'
              }}
            >
              <motion.h2 
                className={`h2 fw-bold mb-4 ${darkMode ? 'text-white' : 'text-dark'}`}
                whileInView={{ scale: [0.9, 1.05, 1] }}
                transition={{ duration: 0.6 }}
              >
                Skills & Expertise
              </motion.h2>
              <div className="row g-4">
                {[
                  { name: 'React', icon: '⚛️', level: '95%' },
                  { name: 'Bootstrap CSS', icon: '🎨', level: '90%' },
                  { name: 'System Admin', icon: '🖥️', level: '88%' },
                  { name: 'Networking', icon: '🌐', level: '85%' },
                  { name: 'Linux', icon: '🐧', level: '92%' },
                  { name: 'Cloud Technologies', icon: '☁️', level: '87%' }
                ].map((skill, index) => (
                  <div key={skill.name} className="col-md-6 col-lg-4">
                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="card h-100 border-0 shadow-sm"
                      style={{
                        background: darkMode ? 'rgba(52, 58, 64, 0.5)' : 'rgba(255, 255, 255, 0.8)',
                        border: darkMode ? '1px solid rgba(108, 117, 125, 0.5)' : '1px solid rgba(222, 226, 230, 0.5)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <span className="fs-2">{skill.icon}</span>
                          <span className={`badge ${darkMode ? 'bg-primary' : 'bg-primary'}`}>
                            {skill.level}
                          </span>
                        </div>
                        <h5 className={`card-title fw-bold ${darkMode ? 'text-white' : 'text-dark'} mb-3`}>
                          {skill.name}
                        </h5>
                        <div className={`progress ${darkMode ? 'bg-secondary' : 'bg-light'}`} style={{ height: '8px' }}>
                          <motion.div
                            className="progress-bar"
                            style={{
                              background: 'linear-gradient(45deg, #007bff, #6f42c1)',
                              borderRadius: '4px'
                            }}
                            initial={{ width: 0 }}
                            whileInView={{ width: skill.level }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            role="progressbar"
                            aria-valuenow={parseInt(skill.level)}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          variants={itemVariants}
          id="projects"
          className="py-5"
        >
          <div className="container">
            <div className="card shadow border-0 rounded-4 p-4 mb-5"
              style={{
                background: darkMode 
                  ? 'linear-gradient(135deg, rgba(52, 58, 64, 0.3), rgba(33, 37, 41, 0.3))' 
                  : 'linear-gradient(135deg, rgba(255, 255, 255, 0.7), rgba(248, 249, 250, 0.7))',
                backdropFilter: 'blur(16px)',
                border: darkMode ? '1px solid rgba(108, 117, 125, 0.3)' : '1px solid rgba(222, 226, 230, 0.3)'
              }}
            >
              <motion.h2 
                className={`h2 fw-bold mb-4 ${darkMode ? 'text-white' : 'text-dark'}`}
                whileInView={{ scale: [0.9, 1.05, 1] }}
                transition={{ duration: 0.6 }}
              >
                Featured Projects
              </motion.h2>
              <div className="row g-4">
                {[
                  {
                    title: 'Portfolio Website',
                    description: 'A modern, responsive personal website showcasing IT projects and skills with advanced animations.',
                    tech: ['React', 'Bootstrap', 'Framer Motion'],
                    color: 'primary'
                  },
                  {
                    title: 'Network Infrastructure Setup',
                    description: 'Designed and implemented a secure office network with VLAN segmentation and enterprise security.',
                    tech: ['Cisco', 'VLAN', 'Security'],
                    color: 'success'
                  },
                  {
                    title: 'Cloud Migration Project',
                    description: 'Led migration of legacy systems to cloud infrastructure, improving scalability and reducing costs.',
                    tech: ['AWS', 'Docker', 'Kubernetes'],
                    color: 'info'
                  }
                ].map((project, index) => (
                  <div key={project.title} className="col-12">
                    <motion.div 
                      whileHover={{ scale: 1.02, y: -5 }}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      className="card h-100 border-0 shadow-sm"
                      style={{
                        background: darkMode ? 'rgba(52, 58, 64, 0.5)' : 'rgba(255, 255, 255, 0.8)',
                        border: darkMode ? '1px solid rgba(108, 117, 125, 0.5)' : '1px solid rgba(222, 226, 230, 0.5)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-start mb-3">
                          <motion.h3 
                            className={`h4 fw-bold ${darkMode ? 'text-white' : 'text-dark'} mb-0`}
                            whileHover={{ x: 5 }}
                          >
                            {project.title}
                          </motion.h3>
                          <motion.div
                            whileHover={{ rotate: 45 }}
                            className={`btn btn-${project.color} btn-sm rounded-circle d-flex align-items-center justify-content-center`}
                            style={{ width: '40px', height: '40px' }}
                          >
                            <i className="bi bi-arrow-right"></i>
                          </motion.div>
                        </div>
                        <p className={`${darkMode ? 'text-light' : 'text-muted'} mb-3`}>
                          {project.description}
                        </p>
                        <div className="d-flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <motion.span
                              key={tech}
                              whileHover={{ scale: 1.1 }}
                              className={`badge ${darkMode ? 'bg-secondary' : 'bg-light text-dark'} border`}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          variants={itemVariants}
          id="contact"
          className="py-5"
        >
          <div className="container">
            <div className="card shadow border-0 rounded-4 p-4 mb-5"
              style={{
                background: darkMode 
                  ? 'linear-gradient(135deg, rgba(52, 58, 64, 0.3), rgba(33, 37, 41, 0.3))' 
                  : 'linear-gradient(135deg, rgba(255, 255, 255, 0.7), rgba(248, 249, 250, 0.7))',
                backdropFilter: 'blur(16px)',
                border: darkMode ? '1px solid rgba(108, 117, 125, 0.3)' : '1px solid rgba(222, 226, 230, 0.3)'
              }}
            >
              <motion.h2
                className={`h2 fw-bold mb-4 ${darkMode ? 'text-white' : 'text-dark'}`}
                whileInView={{ scale: [0.9, 1.05, 1] }}
                transition={{ duration: 0.6 }}
              >
                Get In Touch
              </motion.h2>
              <div className="row g-4">
                <div className="col-md-6">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="card border-0 h-100"
                    style={{
                      background: darkMode ? 'rgba(52, 58, 64, 0.5)' : 'rgba(255, 255, 255, 0.8)',
                      border: darkMode ? '1px solid rgba(108, 117, 125, 0.5)' : '1px solid rgba(222, 226, 230, 0.5)'
                    }}
                  >
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-3">
                        <span className="fs-2 me-3">📧</span>
                        <h5 className={`card-title fw-bold mb-0 ${darkMode ? 'text-white' : 'text-dark'}`}>Email</h5>
                      </div>
                      <p className={`card-text ${darkMode ? 'text-primary' : 'text-primary'} text-decoration-underline`}
                        style={{ cursor: 'pointer' }}>
                        sherylanne@example.com
                      </p>
                    </div>
                  </motion.div>
                </div>
                
                <div className="col-md-6">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="card border-0 h-100"
                    style={{
                      background: darkMode ? 'rgba(52, 58, 64, 0.5)' : 'rgba(255, 255, 255, 0.8)',
                      border: darkMode ? '1px solid rgba(108, 117, 125, 0.5)' : '1px solid rgba(222, 226, 230, 0.5)'
                    }}
                  >
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-3">
                        <span className="fs-2 me-3">💼</span>
                        <h5 className={`card-title fw-bold mb-0 ${darkMode ? 'text-white' : 'text-dark'}`}>LinkedIn</h5>
                      </div>
                      <p className={`card-text ${darkMode ? 'text-primary' : 'text-primary'} text-decoration-underline`}
                        style={{ cursor: 'pointer' }}>
                        linkedin.com/in/sherylannebargado
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </motion.main>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`text-center py-4 mt-5 border-top ${darkMode ? 'text-light border-secondary' : 'text-muted border-light'}`}
      >
        <div className="container">
          <motion.p
            whileHover={{ scale: 1.05 }}
            className="mb-0 fw-medium"
          >
            © 2025 Sheryl Anne S. Bargado. Crafted with ❤️ and modern tech.
          </motion.p>
        </div>
      </motion.footer>
    </div>
  );
}