import React, { useState, useEffect } from "react";
import "../styles/enterprise.css";
import Header from "../components/Header";
/*
import securityShield from "../assets/security-shield.svg";
import scalability from "../assets/scalability.svg";
import support from "../assets/support.svg";
*/
export default function EnterprisePage() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    companySize: "",
    useCase: "",
    message: ""
  });

  const enterpriseFeatures = [
    {
      icon: "🛡️",
      title: "Enterprise-Grade Security",
      description: "SOC 2 Type II compliant, GDPR ready, and end-to-end encryption for your most sensitive data.",
      features: ["SSO/SAML Integration", "Advanced RBAC", "Audit Logs", "Data Encryption at Rest & Transit"]
    },
    {
      icon: "📈",
      title: "Unmatched Scalability",
      description: "Handle millions of requests with sub-50ms latency and 99.99% uptime SLA.",
      features: ["Auto-scaling Infrastructure", "Global CDN", "Load Balancing", "Real-time Monitoring"]
    },
    {
      icon: "🔧",
      title: "Dedicated Support",
      description: "24/7 premium support with dedicated technical account managers and SLAs.",
      features: ["24/7 Phone Support", "Dedicated TAM", "1-hour Response SLA", "Custom Training"]
    },
    {
      icon: "🌐",
      title: "Global Infrastructure",
      description: "Deploy across 15 global regions with data residency options and compliance certifications.",
      features: ["15 Global Regions", "Data Residency", "Multi-cloud Deployment", "Disaster Recovery"]
    }
  ];

  const pricingTiers = [
    {
      name: "Business",
      price: "$999",
      period: "month",
      description: "For growing teams needing advanced features",
      features: [
        "Up to 10M requests/month",
        "99.9% Uptime SLA",
        "Standard Support",
        "Basic Analytics",
        "5 Team Members"
      ],
      cta: "Start Business Trial"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "month",
      description: "Full enterprise capabilities with custom solutions",
      features: [
        "Unlimited Requests",
        "99.99% Uptime SLA",
        "24/7 Premium Support",
        "Advanced Analytics",
        "Unlimited Team Members",
        "SAML/SSO Integration",
        "Custom SLAs",
        "Dedicated Infrastructure"
      ],
      highlighted: true,
      cta: "Contact Sales"
    },
    {
      name: "Elite",
      price: "Custom",
      period: "month",
      description: "Maximum performance and compliance requirements",
      features: [
        "Everything in Enterprise +",
        "Private Cloud Deployment",
        "Custom Security Protocols",
        "On-premise Options",
        "Dedicated Engineering Support",
        "Custom Feature Development"
      ],
      cta: "Schedule Consultation"
    }
  ];

  const caseStudies = [
    {
      company: "Fortune 500 FinTech",
      logo: "🏦",
      challenge: "Needed to process 100M+ daily transactions with PCI DSS compliance",
      solution: "Custom API infrastructure with dedicated regional deployment",
      results: ["63% faster transaction processing", "99.99% uptime achieved", "PCI DSS Level 1 certified"]
    },
    {
      company: "Global E-Commerce Platform",
      logo: "🛒",
      challenge: "Handling seasonal traffic spikes of 500% during holiday sales",
      solution: "Auto-scaling API architecture with global load balancing",
      results: ["Zero downtime during Black Friday", "45% cost reduction", "Improved customer experience"]
    },
    {
      company: "Healthcare Provider Network",
      logo: "🏥",
      challenge: "HIPAA compliant data exchange between 200+ facilities",
      solution: "Secure API gateway with audit trails and encryption",
      results: ["HIPAA compliance achieved", "Real-time data sync", "Enhanced patient care coordination"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % enterpriseFeatures.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Enterprise form submitted:", formData);
  };

  return (
    <div className="enterprise-page">
      <Header />
      
      {/* Hero Section */}
      <section className="enterprise-hero">
        <div className="hero-background">
          <div className="enterprise-orb orb-1"></div>
          <div className="enterprise-orb orb-2"></div>
        </div>
        
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="enterprise-pulse-dot"></span>
              Enterprise Grade API Platform
            </div>
            
            <h1 className="hero-title">
              Scale Your Business with
              <span className="gradient-text"> Mission-Critical</span>
              <br />
              API Infrastructure
            </h1>
            
            <p className="hero-description">
              Trusted by Fortune 500 companies to power their most demanding applications. 
              Enterprise-grade security, scalability, and support for your business needs.
            </p>
            
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="stat-value">99.99%</div>
                <div className="stat-label">Uptime SLA</div>
              </div>
              <div className="hero-stat">
                <div className="stat-value">24/7</div>
                <div className="stat-label">Premium Support</div>
              </div>
              <div className="hero-stat">
                <div className="stat-value">50ms</div>
                <div className="stat-label">Global Latency</div>
              </div>
              <div className="hero-stat">
                <div className="stat-value">SOC 2</div>
                <div className="stat-label">Compliant</div>
              </div>
            </div>
            
            <div className="hero-actions">
              <button className="btn btn-primary enterprise-btn">
                Schedule Demo
                <span className="btn-icon">🎯</span>
              </button>
              <button className="btn btn-secondary">
                Contact Sales
                <span className="btn-icon">📞</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="enterprise-features">
        <div className="container">
          <div className="section-header">
            <h2>Enterprise-Grade Features</h2>
            <p>Everything you need to build and scale mission-critical applications</p>
          </div>
          
          <div className="features-grid">
            {enterpriseFeatures.map((feature, index) => (
              <div 
                key={index}
                className={`feature-card ${activeFeature === index ? 'active' : ''}`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <ul className="feature-list">
                  {feature.features.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="enterprise-pricing">
        <div className="container">
          <div className="section-header">
            <h2>Enterprise Pricing</h2>
            <p>Flexible plans designed to scale with your business needs</p>
          </div>
          
          <div className="pricing-grid">
            {pricingTiers.map((tier, index) => (
              <div 
                key={index} 
                className={`pricing-card ${tier.highlighted ? 'highlighted' : ''}`}
              >
                {tier.highlighted && <div className="popular-badge">Most Popular</div>}
                
                <div className="pricing-header">
                  <h3>{tier.name}</h3>
                  <div className="price">
                    {tier.price}
                    {tier.period && <span>/{tier.period}</span>}
                  </div>
                  <p className="tier-description">{tier.description}</p>
                </div>
                
                <ul className="features-list">
                  {tier.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="check-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`btn ${tier.highlighted ? 'btn-primary' : 'btn-secondary'} full-width`}>
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="case-studies">
        <div className="container">
          <div className="section-header">
            <h2>Enterprise Success Stories</h2>
            <p>See how industry leaders leverage our platform</p>
          </div>
          
          <div className="case-studies-grid">
            {caseStudies.map((study, index) => (
              <div key={index} className="case-study-card">
                <div className="company-logo">{study.logo}</div>
                <h3>{study.company}</h3>
                <div className="challenge">
                  <strong>Challenge:</strong> {study.challenge}
                </div>
                <div className="solution">
                  <strong>Solution:</strong> {study.solution}
                </div>
                <div className="results">
                  <strong>Results:</strong>
                  <ul>
                    {study.results.map((result, idx) => (
                      <li key={idx}>{result}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="enterprise-contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Ready to Transform Your API Strategy?</h2>
              <p>Our enterprise specialists are ready to help you build scalable, secure API solutions tailored to your business needs.</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div>
                    <div className="contact-label">Sales Team</div>
                    <div className="contact-value">1-888-API-HUB1</div>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <div>
                    <div className="contact-label">Email</div>
                    <div className="contact-value">enterprise@apihub.com</div>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">🕒</div>
                  <div>
                    <div className="contact-label">Response Time</div>
                    <div className="contact-value">Within 2 business hours</div>
                  </div>
                </div>
              </div>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="company">Company *</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Work Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="companySize">Company Size *</label>
                <select
                  id="companySize"
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select company size</option>
                  <option value="1-50">1-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-1000">201-1,000 employees</option>
                  <option value="1000+">1,000+ employees</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="useCase">Primary Use Case *</label>
                <select
                  id="useCase"
                  name="useCase"
                  value={formData.useCase}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select use case</option>
                  <option value="internal-tools">Internal Tools</option>
                  <option value="customer-facing">Customer-Facing Apps</option>
                  <option value="partner-integration">Partner Integration</option>
                  <option value="mobile-backend">Mobile Backend</option>
                  <option value="data-processing">Data Processing</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary full-width">
                Request Enterprise Demo
                <span className="btn-arrow">→</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="trusted-by">
        <div className="container">
          <div className="section-header">
            <h3>Trusted by Industry Leaders</h3>
          </div>
          <div className="logos-grid">
            {["Fortune 500", "Tech Unicorns", "Financial Institutions", "Healthcare Providers", "E-commerce Giants", "SaaS Platforms"].map((industry, index) => (
              <div key={index} className="logo-item">
                <div className="industry-icon">🏢</div>
                <span>{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}