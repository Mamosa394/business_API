import React, { useState, useEffect } from "react";
import "../styles/Community.css";
import Header from "../components/Header";

export default function Community() {
  const [activeTab, setActiveTab] = useState("discussions");
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", content: "" });
  const [comments, setComments] = useState({});
  const [newComments, setNewComments] = useState({});
  const [currentUser] = useState({
    id: 1,
    name: "You",
    avatar: "👤",
    role: "Developer"
  });

  // Sample initial data
  useEffect(() => {
    const samplePosts = [
      {
        id: 1,
        title: "Getting 429 Rate Limit Errors - Any Solutions?",
        content: "I've been hitting rate limits frequently with our production app. Has anyone found good strategies for handling this besides just increasing the tier?",
        author: { name: "Thabo TLou", avatar: "👩‍💻", role: "Senior Developer" },
        timestamp: "2 hours ago",
        likes: 24,
        comments: 8,
        tags: ["rate-limiting", "help", "production"],
        category: "help"
      },
      {
        id: 2,
        title: "New WebSocket Features Are Live! 🚀",
        content: "We just deployed real-time notifications and presence features to our WebSocket API. Check out the updated documentation and let us know what you think!",
        author: { name: "API Hub Team", avatar: "⚡", role: "Official" },
        timestamp: "5 hours ago",
        likes: 42,
        comments: 15,
        tags: ["announcement", "websocket", "new-feature"],
        category: "announcement"
      },
      {
        id: 3,
        title: "Best Practices for API Key Rotation?",
        content: "Looking for advice on implementing secure API key rotation in a microservices architecture. How often should we rotate keys and what's the best way to handle the transition?",
        author: { name: "Thabo TLou", avatar: "👨‍💼", role: "DevOps Engineer" },
        timestamp: "1 day ago",
        likes: 18,
        comments: 12,
        tags: ["security", "best-practices", "authentication"],
        category: "discussion"
      },
      {
        id: 4,
        title: "JavaScript SDK TypeScript Support",
        content: "I've created TypeScript definitions for the JavaScript SDK. Would the maintainers be interested in a PR? The community could really benefit from proper type safety.",
        author: { name: "Mamosa Motsie", avatar: "👨‍💻", role: "Full Stack Developer" },
        timestamp: "2 days ago",
        likes: 31,
        comments: 6,
        tags: ["typescript", "sdk", "feature-request"],
        category: "feature"
      }
    ];

    const sampleComments = {
      1: [
        {
          id: 1,
          content: "We implemented exponential backoff with jitter and it helped a lot. Also caching responses where possible.",
          author: { name: "Mamosa Motsie", avatar: "👨‍🔬", role: "Backend Engineer" },
          timestamp: "1 hour ago",
          likes: 5
        },
        {
          id: 2,
          content: "Contact support for a temporary limit increase while you optimize. They're usually pretty responsive.",
          author: { name: "Thato Chelane", avatar: "👩‍🎓", role: "Tech Lead" },
          timestamp: "45 minutes ago",
          likes: 3
        }
      ],
      2: [
        {
          id: 1,
          content: "The presence feature is exactly what we needed for our collaborative editing feature! Great work team!",
          author: { name: "Keletso Hato", avatar: "🧑‍💻", role: "Product Engineer" },
          timestamp: "3 hours ago",
          likes: 8
        }
      ]
    };

    setPosts(samplePosts);
    setComments(sampleComments);
  }, []);

  const handleCreatePost = (e) => {
    e.preventDefault();
    if (!newPost.title.trim() || !newPost.content.trim()) return;

    const post = {
      id: posts.length + 1,
      title: newPost.title,
      content: newPost.content,
      author: currentUser,
      timestamp: "Just now",
      likes: 0,
      comments: 0,
      tags: [],
      category: "discussion"
    };

    setPosts([post, ...posts]);
    setNewPost({ title: "", content: "" });
  };

  const handleAddComment = (postId) => {
    const commentText = newComments[postId];
    if (!commentText?.trim()) return;

    const comment = {
      id: (comments[postId]?.length || 0) + 1,
      content: commentText,
      author: currentUser,
      timestamp: "Just now",
      likes: 0
    };

    setComments(prev => ({
      ...prev,
      [postId]: [...(prev[postId] || []), comment]
    }));

    // Update post comment count
    setPosts(prev => prev.map(post => 
      post.id === postId 
        ? { ...post, comments: post.comments + 1 }
        : post
    ));

    setNewComments(prev => ({ ...prev, [postId]: "" }));
  };

  const handleLikePost = (postId) => {
    setPosts(prev => prev.map(post => 
      post.id === postId 
        ? { ...post, likes: post.likes + 1 }
        : post
    ));
  };

  const handleLikeComment = (postId, commentId) => {
    setComments(prev => ({
      ...prev,
      [postId]: prev[postId].map(comment =>
        comment.id === commentId
          ? { ...comment, likes: comment.likes + 1 }
          : comment
      )
    }));
  };

  const categories = [
    { id: "all", name: "All Discussions", count: posts.length },
    { id: "announcement", name: "Announcements", count: posts.filter(p => p.category === "announcement").length },
    { id: "help", name: "Help & Support", count: posts.filter(p => p.category === "help").length },
    { id: "discussion", name: "General Discussion", count: posts.filter(p => p.category === "discussion").length },
    { id: "feature", name: "Feature Requests", count: posts.filter(p => p.category === "feature").length },
    { id: "showcase", name: "Project Showcase", count: posts.filter(p => p.category === "showcase").length }
  ];

  const filteredPosts = activeTab === "all" 
    ? posts 
    : posts.filter(post => post.category === activeTab);

  return (
    <div className="community">
      <Header />
      
      <div className="community-container">
        {/* Hero Section */}
        <section className="community-hero">
          <div className="hero-content">
            <h1>API Hub Community</h1>
            <p>Connect with developers, share knowledge, and get help from the community and our team.</p>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">{posts.length}+</div>
                <div className="stat-label">Discussions</div>
              </div>
              <div className="stat">
                <div className="stat-number">1.2k+</div>
                <div className="stat-label">Developers</div>
              </div>
              <div className="stat">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Active Community</div>
              </div>
            </div>
          </div>
        </section>

        <div className="community-layout">
          {/* Sidebar */}
          <aside className="community-sidebar">
            <div className="sidebar-section">
              <h3>Categories</h3>
              <nav className="category-nav">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`category-item ${activeTab === category.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(category.id)}
                  >
                    <span className="category-name">{category.name}</span>
                    <span className="category-count">{category.count}</span>
                  </button>
                ))}
              </nav>
            </div>

            <div className="sidebar-section">
              <h3>Community Guidelines</h3>
              <div className="guidelines">
                <p>• Be respectful and inclusive</p>
                <p>• Keep discussions relevant</p>
                <p>• Share code responsibly</p>
                <p>• Help each other learn</p>
              </div>
            </div>

            <div className="sidebar-section">
              <h3>Top Contributors</h3>
              <div className="contributors">
                {[
                  { name: "Thabo Tlou", posts: 42, avatar: "👩‍💻" },
                  { name: "Mamosa Motsie", posts: 38, avatar: "👨‍💼" },
                  { name: "Thato Chelane", posts: 31, avatar: "👨‍💻" },
                  { name: "Keletso Hato", posts: 28, avatar: "👩‍🎓" }
                ].map((contributor, index) => (
                  <div key={index} className="contributor">
                    <span className="contributor-avatar">{contributor.avatar}</span>
                    <div className="contributor-info">
                      <div className="contributor-name">{contributor.name}</div>
                      <div className="contributor-posts">{contributor.posts} posts</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="community-main">
            {/* Create Post */}
            <section className="create-post">
              <div className="create-post-header">
                <h2>Start a Discussion</h2>
                <p>Share your thoughts, ask questions, or help others</p>
              </div>
              <form onSubmit={handleCreatePost} className="post-form">
                <input
                  type="text"
                  placeholder="What's on your mind?"
                  value={newPost.title}
                  onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                  className="post-title-input"
                  required
                />
                <textarea
                  placeholder="Share your thoughts, questions, or ideas..."
                  value={newPost.content}
                  onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                  className="post-content-input"
                  rows="4"
                  required
                />
                <div className="post-actions">
                  <button type="submit" className="btn btn-primary">
                    Post Discussion
                  </button>
                </div>
              </form>
            </section>

            {/* Posts Feed */}
            <section className="posts-feed">
              <div className="feed-header">
                <h2>Recent Discussions</h2>
                <div className="feed-filters">
                  <select className="filter-select">
                    <option>Newest First</option>
                    <option>Most Popular</option>
                    <option>Most Comments</option>
                  </select>
                </div>
              </div>

              <div className="posts-list">
                {filteredPosts.map(post => (
                  <article key={post.id} className="post-card">
                    <div className="post-header">
                      <div className="post-author">
                        <span className="author-avatar">{post.author.avatar}</span>
                        <div className="author-info">
                          <div className="author-name">{post.author.name}</div>
                          <div className="author-role">{post.author.role}</div>
                        </div>
                      </div>
                      <div className="post-meta">
                        <span className="post-time">{post.timestamp}</span>
                        {post.tags.map(tag => (
                          <span key={tag} className="post-tag">#{tag}</span>
                        ))}
                      </div>
                    </div>

                    <div className="post-content">
                      <h3 className="post-title">{post.title}</h3>
                      <p className="post-body">{post.content}</p>
                    </div>

                    <div className="post-actions">
                      <button 
                        className="action-btn like-btn"
                        onClick={() => handleLikePost(post.id)}
                      >
                        <span>👍</span>
                        <span>{post.likes}</span>
                      </button>
                      <button className="action-btn comment-btn">
                        <span>💬</span>
                        <span>{post.comments}</span>
                      </button>
                      <button className="action-btn share-btn">
                        <span>↗️</span>
                        <span>Share</span>
                      </button>
                    </div>

                    {/* Comments Section */}
                    <div className="comments-section">
                      {comments[post.id]?.map(comment => (
                        <div key={comment.id} className="comment">
                          <div className="comment-author">
                            <span className="comment-avatar">{comment.author.avatar}</span>
                            <div className="comment-author-info">
                              <div className="comment-author-name">{comment.author.name}</div>
                              <div className="comment-time">{comment.timestamp}</div>
                            </div>
                          </div>
                          <div className="comment-content">
                            <p>{comment.content}</p>
                          </div>
                          <button 
                            className="comment-like-btn"
                            onClick={() => handleLikeComment(post.id, comment.id)}
                          >
                            <span>👍</span>
                            <span>{comment.likes}</span>
                          </button>
                        </div>
                      ))}

                      {/* Add Comment */}
                      <div className="add-comment">
                        <div className="comment-input-wrapper">
                          <input
                            type="text"
                            placeholder="Write a comment..."
                            value={newComments[post.id] || ""}
                            onChange={(e) => setNewComments({
                              ...newComments,
                              [post.id]: e.target.value
                            })}
                            className="comment-input"
                          />
                          <button 
                            className="btn btn-primary comment-submit"
                            onClick={() => handleAddComment(post.id)}
                          >
                            Post
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </main>

          {/* Right Sidebar */}
          <aside className="community-sidebar-right">
            <div className="sidebar-section">
              <h3>Trending Topics</h3>
              <div className="trending-topics">
                {[
                  { tag: "rate-limiting", posts: 24 },
                  { tag: "websocket", posts: 18 },
                  { tag: "authentication", posts: 15 },
                  { tag: "graphql", posts: 12 },
                  { tag: "typescript", posts: 10 }
                ].map((topic, index) => (
                  <div key={index} className="trending-topic">
                    <span className="topic-tag">#{topic.tag}</span>
                    <span className="topic-count">{topic.posts} posts</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="sidebar-section">
              <h3>Community Events</h3>
              <div className="events-list">
                <div className="event">
                  <div className="event-date">
                    <div className="event-day">15</div>
                    <div className="event-month">JAN</div>
                  </div>
                  <div className="event-info">
                    <div className="event-title">API Hub Live Q&A</div>
                    <div className="event-time">2:00 PM EST</div>
                  </div>
                </div>
                <div className="event">
                  <div className="event-date">
                    <div className="event-day">22</div>
                    <div className="event-month">JAN</div>
                  </div>
                  <div className="event-info">
                    <div className="event-title">WebSocket Workshop</div>
                    <div className="event-time">3:00 PM EST</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sidebar-section">
              <h3>Quick Links</h3>
              <div className="quick-links">
                <a href="/documentation" className="quick-link">📚 Documentation</a>
                <a href="/api-reference" className="quick-link">🔗 API Reference</a>
                <a href="/status" className="quick-link">📊 Status Page</a>
                <a href="/support" className="quick-link">💬 Support</a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}