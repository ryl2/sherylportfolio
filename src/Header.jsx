import React from 'react';
import { motion } from 'framer-motion';

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky-top shadow ${darkMode ? 'bg-dark bg-opacity-90 border-secondary' : 'bg-white bg-opacity-90 border-light'} border-bottom`}
      style={{ 
        backdropFilter: 'blur(20px)',
        transition: 'all 0.3s ease'
      }}
    >
      <div className="container">
        <div className="row align-items-center py-3">
          <div className="col-md-8">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="d-flex align-items-center"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold fs-4 me-3 shadow"
                style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(45deg, #007bff, #6f42c1)'
                }}
              >
                SB
              </motion.div>
              <div>
                <h1 className="h3 mb-0 fw-bold" style={{
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
              </div>
            </motion.div>
          </div>

          <div className="col-md-4">
            <nav className="d-none d-md-flex justify-content-center mb-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    color: darkMode ? '#60a5fa' : '#2563eb'
                  }}
                  className={`nav-link fw-medium me-3 ${darkMode ? 'text-light' : 'text-dark'} text-decoration-none position-relative`}
                  style={{
                    transition: 'all 0.3s ease',
                    fontSize: '0.9rem'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = darkMode ? '#60a5fa' : '#2563eb';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = darkMode ? '#f8f9fa' : '#212529';
                  }}
                >
                  {item}
                </motion.a>
              ))}
            </nav>
            
            <div className="d-flex justify-content-end">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleDarkMode}
                className={`btn ${darkMode ? 'btn-outline-light' : 'btn-outline-dark'} rounded-3 shadow-sm`}
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
      </div>
    </motion.header>
  );
};

export default Header;
