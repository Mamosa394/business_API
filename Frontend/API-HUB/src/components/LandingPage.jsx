import React, { useEffect, useRef } from "react";
import "../styles/LandingPage.css";
import server from "../assets/server.gif";
import Header from "../components/Header";

export default function LandingPage() {
  const canvasRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Enhanced floating particles with trails
    const container = document.querySelector(".particles");
    for (let i = 0; i < 25; i++) {
      const p = document.createElement("span");
      p.classList.add("particle");
      p.style.left = `${Math.random() * 100}vw`;
      p.style.animationDuration = `${4 + Math.random() * 8}s`;
      p.style.animationDelay = `${Math.random() * 5}s`;
      p.style.width = `${2 + Math.random() * 4}px`;
      p.style.height = p.style.width;
      container.appendChild(p);
    }

    // Matrix rain effect
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = "01APIHUBBYTHABOTLOUMAMOSAMOTSIETHATOCHELANEKELETSOHATOBUSINESSPROTOTYPE";
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function drawMatrix() {
      ctx.fillStyle = 'rgba(10, 15, 26, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#00c7ff';
      ctx.font = `${fontSize}px JetBrains Mono`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const matrixInterval = setInterval(drawMatrix, 35);

    // Typing animation for main heading
    const texts = ["Developers", "Innovators", "Creators", "Visionaries"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
      const current = texts[textIndex];
      
      if (isDeleting) {
        charIndex--;
      } else {
        charIndex++;
      }

      if (textRef.current) {
        textRef.current.textContent = current.substring(0, charIndex);
        textRef.current.style.textShadow = `0 0 30px #00c7ff, 0 0 60px #00c7ff40`;
      }

      let typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === current.length) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typeSpeed = 500;
      }

      setTimeout(typeEffect, typeSpeed);
    }

    setTimeout(typeEffect, 1000);

    return () => clearInterval(matrixInterval);
  }, []);

  return (
    <section className="landing">
      <Header />
      <canvas ref={canvasRef} className="matrix-canvas" />
      
      <div className="particles"></div>
      <div className="gradient-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <div className="floating-elements">
        <div className="floating-card card-1">
          <div className="card-icon">🔌</div>
          <span>REST APIs</span>
        </div>
        <div className="floating-card card-2">
          <div className="card-icon">🌐</div>
          <span>WebSocket</span>
        </div>
        <div className="floating-card card-3">
          <div className="card-icon">⚡</div>
          <span>GraphQL</span>
        </div>
      </div>

      <div className="landing-content">
        <div className="text-section">
          <div className="badge">
            <span className="pulse-dot"></span>
            Trusted by 15,000+ developers worldwide
          </div>
          
          <h1>
            Empower <span className="typed-text" ref={textRef}>Developers</span>
            <br />
            <span className="highlight">With Next-Gen APIs</span>
          </h1>
          
          <p className="lead-text">
            Build, connect, and scale your applications faster with our 
            <span className="gradient-text"> high-performance API platform</span>. 
            Featuring real-time data, AI-powered insights, and enterprise-grade reliability.
          </p>

          <div className="stats">
            <div className="stat">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Uptime</div>
            </div>
            <div className="stat">
              <div className="stat-number">2.5B+</div>
              <div className="stat-label">Requests/Day</div>
            </div>
            <div className="stat">
              <div className="stat-number">50ms</div>
              <div className="stat-label">Avg. Latency</div>
            </div>
          </div>

          <div className="btn-group">
            <button className="btn-primary">
              <span className="btn-glow"></span>
              Explore APIs
              <span className="btn-arrow">→</span>
            </button>
            <button className="btn-secondary">
              <div className="btn-icon">📚</div>
              View Documentation
            </button>
          </div>
        </div>

        <div className="image-section">
          <div className="glow-effect"></div>
          <img src={server} alt="Tech Server" className="hero-image" />
          <div className="rotating-ring ring-1"></div>
          <div className="rotating-ring ring-2"></div>
          <div className="pulse-dots">
            <div className="pulse-dot"></div>
            <div className="pulse-dot"></div>
            <div className="pulse-dot"></div>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-content">
          <p>© {new Date().getFullYear()} API Hub — Powering the Future of Development</p>
          <div className="footer-links">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Security</span>
            <span>Status</span>
          </div>
        </div>
      </footer>
    </section>
  );
}