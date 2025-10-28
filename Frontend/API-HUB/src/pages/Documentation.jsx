import React, { useState } from "react";
import "../styles/Documentation.css";
import Header from "../components/Header";

export default function Documentation() {
  const [activeSection, setActiveSection] = useState("getting-started");

  const sections = [
    {
      id: "getting-started",
      title: "Getting Started",
      content: `
        Welcome to API Hub! Our platform provides powerful, scalable APIs for developers building modern applications.

        ## Quick Start
        1. **Sign Up**: Create your developer account
        2. **Get API Key**: Generate your unique API key from the dashboard
        3. **Make Your First Request**: Start integrating with our APIs
        4. **Explore Documentation**: Learn about available endpoints and features

        ## Prerequisites
        - Basic knowledge of REST APIs
        - HTTP client (cURL, Postman, or your preferred library)
        - Valid email address for account verification
      `
    },
    {
      id: "authentication",
      title: "Authentication",
      content: `
        All API requests require authentication using your API key.

        ## API Key Authentication
        Include your API key in the request header:

        \`\`\`bash
        curl -H "X-API-Key: your-api-key-here" \\
             https://api.apihub.com/v1/endpoint
        \`\`\`

        \`\`\`javascript
        const response = await fetch('https://api.apihub.com/v1/endpoint', {
          headers: {
            'X-API-Key': 'your-api-key-here',
            'Content-Type': 'application/json'
          }
        });
        \`\`\`

        ## Key Security
        - Keep your API key secure and never expose it in client-side code
        - Rotate keys regularly
        - Use environment variables for storage
        - Monitor your key usage in the dashboard
      `
    },
    {
      id: "rest-apis",
      title: "REST APIs",
      content: `
        Our REST APIs follow standard conventions and return JSON responses.

        ## Base URL
        \`\`\`
        https://api.apihub.com/v1
        \`\`\`

        ## Common Endpoints

        ### Users API
        \`\`\`http
        GET    /users          # List users
        POST   /users          # Create user
        GET    /users/{id}     # Get user
        PUT    /users/{id}     # Update user
        DELETE /users/{id}     # Delete user
        \`\`\`

        ### Products API
        \`\`\`http
        GET    /products       # List products
        POST   /products       # Create product
        GET    /products/{id}  # Get product details
        \`\`\`

        ## Response Format
        \`\`\`json
        {
          "success": true,
          "data": {
            "id": "123",
            "name": "Example Resource",
            "created_at": "2024-01-01T00:00:00Z"
          },
          "meta": {
            "page": 1,
            "total": 100,
            "limit": 10
          }
        }
        \`\`\`
      `
    },
    {
      id: "websocket",
      title: "WebSocket API",
      content: `
        Real-time communication through WebSocket connections.

        ## Connection
        \`\`\`javascript
        const socket = new WebSocket('wss://ws.apihub.com/v1');
        
        socket.onopen = () => {
          console.log('Connected to WebSocket');
          // Authenticate
          socket.send(JSON.stringify({
            type: 'auth',
            apiKey: 'your-api-key-here'
          }));
        };
        \`\`\`

        ## Events
        - \`message\`: Real-time data updates
        - \`notification\`: System notifications
        - \`error\`: Error messages
        - \`ping/pong\`: Connection health checks

        ## Example Subscription
        \`\`\`javascript
        // Subscribe to user updates
        socket.send(JSON.stringify({
          type: 'subscribe',
          channel: 'user_updates',
          userId: '123'
        }));
        \`\`\`
      `
    },
    {
      id: "graphql",
      title: "GraphQL API",
      content: `
        Flexible data querying with our GraphQL endpoint.

        ## Endpoint
        \`\`\`
        https://api.apihub.com/graphql
        \`\`\`

        ## Example Query
        \`\`\`graphql
        query GetUserWithProducts($userId: ID!) {
          user(id: $userId) {
            id
            name
            email
            products {
              id
              name
              price
              createdAt
            }
          }
        }
        \`\`\`

        ## Authentication
        Include API key in headers:
        \`\`\`http
        Authorization: Bearer your-api-key-here
        \`\`\`

        ## Schema Exploration
        Use GraphQL playground or introspection to explore available types and queries.
      `
    },
    {
      id: "rate-limiting",
      title: "Rate Limiting",
      content: `
        Fair usage policies to ensure service reliability.

        ## Limits
        - **Free Tier**: 1,000 requests/hour
        - **Pro Tier**: 10,000 requests/hour  
        - **Enterprise**: Custom limits

        ## Headers
        \`\`\`http
        X-RateLimit-Limit: 1000
        X-RateLimit-Remaining: 999
        X-RateLimit-Reset: 1640995200
        \`\`\`

        ## Best Practices
        - Implement exponential backoff for retries
        - Cache responses when appropriate
        - Monitor your usage dashboard
        - Contact support for limit increases
      `
    },
    {
      id: "error-handling",
      title: "Error Handling",
      content: `
        Standardized error responses across all APIs.

        ## Common HTTP Status Codes
        - \`200\` - Success
        - \`400\` - Bad Request
        - \`401\` - Unauthorized
        - \`403\` - Forbidden
        - \`404\` - Not Found
        - \`429\` - Rate Limit Exceeded
        - \`500\` - Internal Server Error

        ## Error Response Format
        \`\`\`json
        {
          "success": false,
          "error": {
            "code": "VALIDATION_ERROR",
            "message": "Invalid input data",
            "details": {
              "email": "Must be a valid email address"
            }
          }
        }
        \`\`\`

        ## Common Error Codes
        - \`INVALID_API_KEY\` - Authentication failed
        - \`RATE_LIMIT_EXCEEDED\` - Too many requests
        - \`VALIDATION_ERROR\` - Input validation failed
        - \`RESOURCE_NOT_FOUND\` - Requested resource doesn't exist
      `
    },
    {
      id: "best-practices",
      title: "Best Practices",
      content: `
        Recommendations for optimal API usage.

        ## Security
        - Store API keys securely using environment variables
        - Never commit API keys to version control
        - Use HTTPS for all requests
        - Implement proper error handling

        ## Performance
        - Implement request caching where appropriate
        - Use pagination for large datasets
        - Compress request/response bodies
        - Monitor response times

        ## Reliability
        - Implement retry logic with exponential backoff
        - Use circuit breakers for fault tolerance
        - Monitor API health and status
        - Set up alerts for unusual activity

        ## Development
        - Use official SDKs when available
        - Write comprehensive tests
        - Follow semantic versioning
        - Stay updated with API changes
      `
    },
    {
      id: "sdks",
      title: "SDKs & Libraries",
      content: `
        Official client libraries for popular programming languages.

        ## JavaScript/Node.js
        \`\`\`bash
        npm install @apihub/javascript-sdk
        \`\`\`

        \`\`\`javascript
        import { APIHub } from '@apihub/javascript-sdk';
        
        const client = new APIHub({
          apiKey: 'your-api-key-here'
        });
        
        const user = await client.users.get('123');
        \`\`\`

        ## Python
        \`\`\`bash
        pip install apihub-python
        \`\`\`

        \`\`\`python
        from apihub import APIHub
        
        client = APIHub(api_key='your-api-key-here')
        user = client.users.get('123')
        \`\`\`

        ## Community Libraries
        - **Go**: \`github.com/community/apihub-go\`
        - **Ruby**: \`gem 'apihub-ruby'\`
        - **PHP**: \`composer require apihub/php\`

        ## Contributing
        We welcome community contributions to our SDKs!
      `
    },
    {
      id: "support",
      title: "Support",
      content: `
        Get help and support for API Hub.

        ## Documentation
        - This documentation site
        - API reference
        - Tutorials and guides
        - Frequently asked questions

        ## Community
        - **GitHub Discussions**: Ask questions and share knowledge
        - **Discord Server**: Real-time community support
        - **Stack Overflow**: Tag questions with \`apihub\`

        ## Direct Support
        - **Email**: support@apihub.com
        - **Status Page**: status.apihub.com
        - **Twitter**: @apihubsupport

        ## Enterprise Support
        - Dedicated technical account manager
        - 24/7 priority support
        - Custom integration assistance
        - SLA guarantees

        ## Reporting Issues
        When reporting issues, please include:
        - API key (prefix only)
        - Request/response details
        - Timestamps
        - Error messages
        - Steps to reproduce
      `
    }
  ];

  return (
    <div className="documentation">
      <Header />
      
      <div className="doc-container">
        {/* Sidebar Navigation */}
        <nav className="doc-sidebar">
          <div className="sidebar-header">
            <h3>Documentation</h3>
          </div>
          <ul className="sidebar-nav">
            {sections.map(section => (
              <li key={section.id}>
                <button
                  className={`nav-item ${activeSection === section.id ? 'active' : ''}`}
                  onClick={() => setActiveSection(section.id)}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
          
          <div className="sidebar-footer">
            <div className="version">v2.1.0</div>
            <div className="last-updated">Updated Jan 2024</div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="doc-main">
          <div className="doc-content">
            {sections.map(section => (
              <section 
                key={section.id}
                id={section.id}
                className={`doc-section ${activeSection === section.id ? 'active' : ''}`}
              >
                <div className="section-header">
                  <h1>{section.title}</h1>
                  <div className="section-actions">
                    <button className="btn btn-outline">Edit this page</button>
                    <button className="btn btn-primary">Request changes</button>
                  </div>
                </div>
                
                <div className="section-content">
                  {section.content.split('\n').map((paragraph, index) => {
                    if (paragraph.startsWith('## ')) {
                      return <h2 key={index}>{paragraph.replace('## ', '')}</h2>;
                    } else if (paragraph.startsWith('### ')) {
                      return <h3 key={index}>{paragraph.replace('### ', '')}</h3>;
                    } else if (paragraph.startsWith('```')) {
                      const language = paragraph.replace('```', '') || 'text';
                      const codeBlock = section.content.split('\n')
                        .slice(index + 1)
                        .findIndex(line => line.startsWith('```'));
                      
                      if (codeBlock !== -1) {
                        const code = section.content.split('\n')
                          .slice(index + 1, index + 1 + codeBlock)
                          .join('\n');
                        
                        return (
                          <pre key={index} className={`code-block language-${language}`}>
                            <code>{code}</code>
                            <button 
                              className="copy-btn"
                              onClick={() => navigator.clipboard.writeText(code)}
                            >
                              Copy
                            </button>
                          </pre>
                        );
                      }
                    } else if (paragraph.trim() && !paragraph.startsWith('```')) {
                      return <p key={index}>{paragraph}</p>;
                    }
                    return null;
                  })}
                </div>

                <div className="section-footer">
                  <div className="pagination">
                    {sections.findIndex(s => s.id === activeSection) > 0 && (
                      <button 
                        className="pagination-btn prev"
                        onClick={() => {
                          const currentIndex = sections.findIndex(s => s.id === activeSection);
                          setActiveSection(sections[currentIndex - 1].id);
                        }}
                      >
                        ← Previous: {sections[sections.findIndex(s => s.id === activeSection) - 1].title}
                      </button>
                    )}
                    
                    {sections.findIndex(s => s.id === activeSection) < sections.length - 1 && (
                      <button 
                        className="pagination-btn next"
                        onClick={() => {
                          const currentIndex = sections.findIndex(s => s.id === activeSection);
                          setActiveSection(sections[currentIndex + 1].id);
                        }}
                      >
                        Next: {sections[sections.findIndex(s => s.id === activeSection) + 1].title} →
                      </button>
                    )}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </main>

        {/* Table of Contents */}
        <aside className="doc-toc">
          <div className="toc-header">
            <h4>On this page</h4>
          </div>
          <nav className="toc-nav">
            {activeSection && sections.find(s => s.id === activeSection)?.content
              .split('\n')
              .filter(line => line.startsWith('## '))
              .map((heading, index) => (
                <a 
                  key={index}
                  href={`#${heading.replace('## ', '').toLowerCase().replace(/\s+/g, '-')}`}
                  className="toc-item"
                >
                  {heading.replace('## ', '')}
                </a>
              ))
            }
          </nav>
        </aside>
      </div>
    </div>
  );
}