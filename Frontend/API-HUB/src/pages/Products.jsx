import React, { useState } from "react";
import "../styles/Products.css";
import Header from "../components/Header";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("popular");

  const categories = [
    { id: "all", name: "All APIs", count: 24 },
    { id: "ecommerce", name: "E-Commerce", count: 8 },
    { id: "payments", name: "Payments", count: 5 },
    { id: "communication", name: "Communication", count: 4 },
    { id: "data", name: "Data & Analytics", count: 3 },
    { id: "ai", name: "AI & Machine Learning", count: 4 }
  ];

  const products = [
    {
      id: 1,
      name: "Payment Processing API",
      description: "Secure payment processing with support for 100+ payment methods worldwide. PCI DSS compliant with fraud detection.",
      category: "payments",
      price: { monthly: 1499, annually: 14390 },
      rating: 4.9,
      reviews: 1247,
      features: ["PCI DSS Compliant", "100+ Payment Methods", "Fraud Detection", "Recurring Billing", "Mobile SDKs"],
      documentation: "https://docs.apihub.com/payments",
      status: "popular",
      usage: "10M+ requests/month"
    },
    {
      id: 2,
      name: "E-Commerce Platform API",
      description: "Complete e-commerce solution with product management, inventory tracking, and order processing capabilities.",
      category: "ecommerce",
      price: { monthly: 2249, annually: 21590 },
      rating: 4.8,
      reviews: 892,
      features: ["Product Catalog", "Inventory Management", "Order Processing", "Shipping Integration", "Tax Calculation"],
      documentation: "https://docs.apihub.com/ecommerce",
      status: "featured",
      usage: "5M+ products managed"
    },
    {
      id: 3,
      name: "Shopping Cart API",
      description: "Flexible cart management with real-time pricing, discounts, and abandoned cart recovery.",
      category: "ecommerce",
      price: { monthly: 749, annually: 7190 },
      rating: 4.7,
      reviews: 567,
      features: ["Real-time Pricing", "Discount Engine", "Cart Recovery", "Multi-currency", "Tax Support"],
      documentation: "https://docs.apihub.com/cart",
      status: "popular",
      usage: "2M+ active carts"
    },
    {
      id: 4,
      name: "SMS & Voice API",
      description: "Global SMS and voice communication with delivery tracking and two-factor authentication support.",
      category: "communication",
      price: { monthly: 379, annually: 3638 },
      rating: 4.6,
      reviews: 423,
      features: ["Global Coverage", "Delivery Reports", "2FA Support", "Voice Calls", "Number Verification"],
      documentation: "https://docs.apihub.com/sms",
      status: "new",
      usage: "50M+ messages sent"
    },
    {
      id: 5,
      name: "Email Marketing API",
      description: "Transactional and marketing email delivery with advanced analytics and template management.",
      category: "communication",
      price: { monthly: 1199, annually: 11510 },
      rating: 4.5,
      reviews: 334,
      features: ["Transactional Emails", "Marketing Campaigns", "Analytics", "Template Builder", "A/B Testing"],
      documentation: "https://docs.apihub.com/email",
      status: "popular",
      usage: "100M+ emails delivered"
    },
    {
      id: 6,
      name: "AI Product Recommendations",
      description: "Machine learning-powered product recommendations based on user behavior and purchase history.",
      category: "ai",
      price: { monthly: 2999, annually: 28790 },
      rating: 4.9,
      reviews: 278,
      features: ["ML Algorithms", "Real-time Updates", "Personalization", "A/B Testing", "Analytics Dashboard"],
      documentation: "https://docs.apihub.com/recommendations",
      status: "featured",
      usage: "1B+ recommendations"
    },
    {
      id: 7,
      name: "Inventory Management API",
      description: "Real-time inventory tracking across multiple warehouses with low-stock alerts and automated ordering.",
      category: "ecommerce",
      price: { monthly: 1349, annually: 12950 },
      rating: 4.7,
      reviews: 445,
      features: ["Multi-warehouse", "Low Stock Alerts", "Automated Orders", "Barcode Support", "Reporting"],
      documentation: "https://docs.apihub.com/inventory",
      status: "popular",
      usage: "500K+ SKUs managed"
    },
    {
      id: 8,
      name: "Fraud Detection API",
      description: "Advanced fraud detection using machine learning to identify suspicious transactions in real-time.",
      category: "ai",
      price: { monthly: 4499, annually: 43190 },
      rating: 4.8,
      reviews: 189,
      features: ["Real-time Analysis", "ML Models", "Custom Rules", "Risk Scoring", "Chargeback Protection"],
      documentation: "https://docs.apihub.com/fraud",
      status: "featured",
      usage: "10M+ transactions analyzed"
    },
    {
      id: 9,
      name: "Shipping & Logistics API",
      description: "Multi-carrier shipping integration with real-time rates, tracking, and label generation.",
      category: "ecommerce",
      price: { monthly: 1049, annually: 10070 },
      rating: 4.6,
      reviews: 312,
      features: ["Multi-carrier", "Real-time Rates", "Tracking", "Label Generation", "Returns Management"],
      documentation: "https://docs.apihub.com/shipping",
      status: "popular",
      usage: "1M+ shipments"
    },
    {
      id: 10,
      name: "Customer Data Platform",
      description: "Unified customer profiles with segmentation, analytics, and cross-channel tracking.",
      category: "data",
      price: { monthly: 2699, annually: 25910 },
      rating: 4.7,
      reviews: 223,
      features: ["Customer Profiles", "Segmentation", "Event Tracking", "Analytics", "GDPR Compliant"],
      documentation: "https://docs.apihub.com/cdp",
      status: "new",
      usage: "50M+ customer profiles"
    },
    {
      id: 11,
      name: "Price Optimization API",
      description: "Dynamic pricing engine that adjusts prices based on demand, competition, and market conditions.",
      category: "ai",
      price: { monthly: 3749, annually: 35990 },
      rating: 4.8,
      reviews: 156,
      features: ["Dynamic Pricing", "Competitor Monitoring", "Demand Forecasting", "A/B Testing", "Revenue Analytics"],
      documentation: "https://docs.apihub.com/pricing",
      status: "featured",
      usage: "5M+ price updates"
    },
    {
      id: 12,
      name: "Subscription Billing API",
      description: "Recurring billing and subscription management with dunning management and revenue recognition.",
      category: "payments",
      price: { monthly: 1949, annually: 18710 },
      rating: 4.7,
      reviews: 278,
      features: ["Recurring Billing", "Dunning Management", "Revenue Recognition", "Multiple Plans", "Trial Management"],
      documentation: "https://docs.apihub.com/subscriptions",
      status: "popular",
      usage: "2M+ active subscriptions"
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price.monthly - b.price.monthly;
      case "price-high":
        return b.price.monthly - a.price.monthly;
      case "rating":
        return b.rating - a.rating;
      case "reviews":
        return b.reviews - a.reviews;
      default:
        return b.reviews - a.reviews; // popular
    }
  });

  const formatPrice = (price) => {
    return `M${price.toLocaleString('en-US')}`;
  };

  const getSavings = (monthly, annually) => {
    const savings = ((monthly * 12) - annually) / (monthly * 12) * 100;
    return Math.round(savings);
  };

  return (
    <div className="products">
      <Header />
      
      <div className="products-container">
        {/* Hero Section */}
        <section className="products-hero">
          <div className="hero-content">
            <h1>Powerful APIs for Modern Businesses</h1>
            <p>Build, scale, and innovate with our comprehensive suite of APIs. From e-commerce to AI, we've got you covered.</p>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Uptime SLA</div>
              </div>
              <div className="stat">
                <div className="stat-number">700 000+</div>
                <div className="stat-label">API Calls/Month</div>
              </div>
              <div className="stat">
                <div className="stat-number">5K+</div>
                <div className="stat-label">Developers</div>
              </div>
              <div className="stat">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support</div>
              </div>
            </div>
          </div>
        </section>

        <div className="products-layout">
          {/* Sidebar */}
          <aside className="products-sidebar">
            <div className="sidebar-section">
              <h3>Categories</h3>
              <nav className="category-nav">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`category-item ${activeCategory === category.id ? 'active' : ''}`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    <span className="category-name">{category.name}</span>
                    <span className="category-count">{category.count}</span>
                  </button>
                ))}
              </nav>
            </div>

            <div className="sidebar-section">
              <h3>Filter by</h3>
              <div className="filter-options">
                <div className="filter-group">
                  <label>Price Range</label>
                  <select className="filter-select">
                    <option>Any Price</option>
                    <option>Under M1,500/month</option>
                    <option>M1,500 - M5,000/month</option>
                    <option>M5,000 - M10,000/month</option>
                    <option>Over M10,000/month</option>
                  </select>
                </div>
                <div className="filter-group">
                  <label>Rating</label>
                  <select className="filter-select">
                    <option>Any Rating</option>
                    <option>4.5+ Stars</option>
                    <option>4.0+ Stars</option>
                    <option>3.5+ Stars</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="sidebar-section">
              <h3>Why Choose Us?</h3>
              <div className="benefits">
                <div className="benefit">
                  <span className="benefit-icon">⚡</span>
                  <div className="benefit-text">
                    <strong>High Performance</strong>
                    <span>99.9% uptime guarantee</span>
                  </div>
                </div>
                <div className="benefit">
                  <span className="benefit-icon">🔒</span>
                  <div className="benefit-text">
                    <strong>Enterprise Security</strong>
                    <span>SOC 2 & GDPR compliant</span>
                  </div>
                </div>
                <div className="benefit">
                  <span className="benefit-icon">📚</span>
                  <div className="benefit-text">
                    <strong>Comprehensive Docs</strong>
                    <span>Detailed API references</span>
                  </div>
                </div>
                <div className="benefit">
                  <span className="benefit-icon">💬</span>
                  <div className="benefit-text">
                    <strong>24/7 Support</strong>
                    <span>Developer-first support</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="products-main">
            {/* Search and Sort */}
            <div className="products-header">
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Search APIs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
                <span className="search-icon">🔍</span>
              </div>
              
              <div className="sort-options">
                <span className="sort-label">Sort by:</span>
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="sort-select"
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="reviews">Most Reviews</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="products-grid">
              {sortedProducts.map(product => (
                <div key={product.id} className="product-card">
                  {product.status === "featured" && (
                    <div className="product-badge featured">Featured</div>
                  )}
                  {product.status === "new" && (
                    <div className="product-badge new">New</div>
                  )}
                  {product.status === "popular" && (
                    <div className="product-badge popular">Popular</div>
                  )}
                  
                  <div className="product-header">
                    <h3 className="product-name">{product.name}</h3>
                    <div className="product-rating">
                      <span className="rating-stars">{"★".repeat(Math.floor(product.rating))}</span>
                      <span className="rating-value">{product.rating}</span>
                      <span className="rating-count">({product.reviews})</span>
                    </div>
                  </div>

                  <p className="product-description">{product.description}</p>

                  <div className="product-features">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <span key={index} className="feature-tag">{feature}</span>
                    ))}
                    {product.features.length > 3 && (
                      <span className="feature-more">+{product.features.length - 3} more</span>
                    )}
                  </div>

                  <div className="product-usage">
                    <span className="usage-label">Usage:</span>
                    <span className="usage-value">{product.usage}</span>
                  </div>

                  <div className="product-pricing">
                    <div className="price-monthly">
                      <span className="price-amount">{formatPrice(product.price.monthly)}</span>
                      <span className="price-period">/month</span>
                    </div>
                    <div className="price-annually">
                      <span className="price-amount">{formatPrice(product.price.annually)}</span>
                      <span className="price-period">/year</span>
                      <span className="price-savings">
                        Save {getSavings(product.price.monthly, product.price.annually)}%
                      </span>
                    </div>
                  </div>

                  <div className="product-actions">
                    <button className="btn btn-primary">
                      Get Started
                    </button>
                    <button className="btn btn-outline">
                      View Docs
                    </button>
                  </div>

                  <div className="product-footer">
                    <span className="category-tag">{product.category}</span>
                    <a href={product.documentation} className="docs-link">
                      API Documentation →
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {sortedProducts.length === 0 && (
              <div className="no-results">
                <div className="no-results-icon">🔍</div>
                <h3>No APIs Found</h3>
                <p>Try adjusting your search or filter criteria</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => {
                    setSearchTerm("");
                    setActiveCategory("all");
                  }}
                >
                  Clear Filters
                </button>
              </div>
            )}
          </main>
        </div>

        {/* CTA Section */}
        <section className="products-cta">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Join thousands of developers building with our APIs. Start free with 10,000 requests per month.</p>
            <div className="cta-actions">
              <button className="btn btn-primary btn-large">
                Start Free Trial
              </button>
              <button className="btn btn-outline btn-large">
                Contact Sales
              </button>
            </div>
            <div className="cta-features">
              <span>✓ No credit card required</span>
              <span>✓ 30-day free trial</span>
              <span>✓ Full API access</span>
              <span>✓ Developer support</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}