import React, { useEffect, useRef } from "react";
import "../styles/LandingPage.css";
import server from "../assets/server.gif";
import Header from "../components/Header";

export default function LandingPage() {
  const canvasRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Enhanced floating particles
    const createParticles = () => {
      const container = document.querySelector(".particles");
      container.innerHTML = ''; // Clear existing particles
      
      for (let i = 0; i < 20; i++) {
        const p = document.createElement("span");
        p.classList.add("particle");
        p.style.left = `${Math.random() * 100}vw`;
        p.style.animationDuration = `${4 + Math.random() * 6}s`;
        p.style.animationDelay = `${Math.random() * 3}s`;
        p.style.width = `${1 + Math.random() * 3}px`;
        p.style.height = p.style.width;
        container.appendChild(p);
      }
    };

    // Matrix rain effect
    const setupMatrix = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const chars = "01APIHUB";
      const fontSize = Math.max(12, window.innerWidth / 100);
      const columns = Math.floor(canvas.width / fontSize);
      const drops = Array(columns).fill(1);

      const drawMatrix = () => {
        ctx.fillStyle = 'rgba(10, 15, 26, 0.03)';
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
      };

      return setInterval(drawMatrix, 40);
    };

    // Typing animation
    const startTypingEffect = () => {
      const texts = ["Developers", "Innovators", "Creators", "Visionaries"];
      let textIndex = 0;
      let charIndex = 0;
      let isDeleting = false;

      const typeEffect = () => {
        const current = texts[textIndex];
        
        if (isDeleting) {
          charIndex--;
        } else {
          charIndex++;
        }

        if (textRef.current) {
          textRef.current.textContent = current.substring(0, charIndex);
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
      };

      setTimeout(typeEffect, 1000);
    };

    // Initialize effects
    createParticles();
    const matrixInterval = setupMatrix();
    startTypingEffect();

    // Handle resize
    const handleResize = () => {
      createParticles();
      if (matrixInterval) {
        clearInterval(matrixInterval);
        setupMatrix();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (matrixInterval) clearInterval(matrixInterval);
      window.removeEventListener('resize', handleResize);
    };
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
        <div className="floating-card">
          <div className="card-icon">🔌</div>
          <span>REST APIs</span>
        </div>
        <div className="floating-card">
          <div className="card-icon">🌐</div>
          <span>WebSocket</span>
        </div>
        <div className="floating-card">
          <div className="card-icon">⚡</div>
          <span>GraphQL</span>
        </div>
      </div>

      <div className="landing-content">
        <div className="text-section">
          <div className="badge">
            <span className="pulse-dot"></span>
            Trusted by 15,000+ developers
          </div>
          
          <h1>
            Empower <span className="typed-text" ref={textRef}>Developers</span>
            <br />
            <span className="highlight">With Next-Gen APIs</span>
          </h1>
          
          <p className="lead-text">
            Build, connect, and scale your applications faster with our 
            <span className="gradient-text"> high-performance API platform</span>. 
            Enterprise-grade reliability with real-time capabilities.
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
            <button className="btn btn-primary">
              Explore APIs
              <span className="btn-arrow">→</span>
            </button>
            <button className="btn btn-secondary">
              View Documentation
            </button>
          </div>
        </div>

        <div className="image-section">
          <div className="glow-effect"></div>
          <img src={server} alt="API Server Platform" className="server-image" />
          <div className="rotating-ring ring-1"></div>
          <div className="rotating-ring ring-2"></div>
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