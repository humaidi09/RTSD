import { ArrowUpRight, Download, Mail, Terminal } from 'lucide-react'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />

      <div className="hero-content">
        <div className="availability">
          <span className="status-dot" />
          Available for Roles
        </div>

        <h1>
          Hi, I’m <span>Hussain</span>
          <br />
          Ahmed Humaidi
        </h1>

        <h2>CSE Student & Aspiring Software Engineer</h2>

        <div className="terminal-line">
          <span>~/humaidi $</span> Python
          <i />
        </div>

        <p className="hero-description">
          Computer Science & Engineering student passionate about
          competitive programming, problem solving, and building clean
          software with C++ and Python.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View Projects
            <ArrowUpRight size={19} />
          </a>

          <a href="#contact" className="btn btn-glass">
            <Mail size={18} />
            Contact Me
          </a>

          <a href="/cv.pdf" className="btn btn-glass">
            <Download size={18} />
            Download CV
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="profile-card">
          <div className="profile-glow" />

          <div className="cgpa-card">
            <strong>3.85</strong>
            <span>Current CGPA</span>
          </div>

          <div className="profile-image">
            <img src="/profile.png" alt="Hussain Ahmed Humaidi" />
          </div>

          <div className="project-badge">
            <strong>10+</strong>
            <span>Projects Built</span>
          </div>
        </div>

        <div className="code-window">
          <div className="window-header">
            <div className="window-dots">
              <span />
              <span />
              <span />
            </div>

            <span className="file-name">
              <Terminal size={15} />
              humaidi.js
            </span>
          </div>

          <pre>
{`const humaidi = {
  role: "Aspiring Software Engineer",
  focus: ["DSA", "OOP"],
  stack: ["C++", "Python", "JS"],
  cgpa: 3.85,
  competitiveProgrammer: true,
  openToWork: true
};`}
          </pre>
        </div>
      </div>
    </section>
  )
}