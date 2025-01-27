'use client';
import React from 'react';
import '../src/app/styles/Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Wie Design Thinking Innovation antreibt',
      date: '25. Januar 2025',
      excerpt: 'Erfahren Sie, wie Design Thinking hilft, kreative Lösungen für komplexe Probleme zu entwickeln.',
      link: '../blog/design-thinking',
    },
    {
      id: 2,
      title: 'Trends im Webdesign 2025',
      date: '15. Januar 2025',
      excerpt: 'Entdecken Sie die neuesten Trends im Webdesign, die in diesem Jahr die Branche prägen werden.',
      link: '../blog/webdesign-trends',
    },
    {
      id: 3,
      title: 'Warum Mobile-First so wichtig ist',
      date: '5. Januar 2025',
      excerpt: 'Erfahren Sie, warum Mobile-First-Ansätze für moderne Websites unverzichtbar sind.',
      link: '../blog/mobile-first',
    },
    {
      id: 4,
      title: 'Usability Testing: Best Practices',
      date: '1. Januar 2025',
      excerpt: 'Tipps und Tricks, wie Sie Usability Tests effektiv durchführen, um die Nutzerfreundlichkeit zu verbessern.',
      link: '../blog/usability-testing',
    },
  ];

  return (
    <section className="blog-section">
      <div className="blog-header">
        <h1>Unser Blog</h1>
        <p>Erfahren Sie mehr über aktuelle Themen und Trends aus der Welt des Designs und der Entwicklung.</p>
      </div>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post">
            <h2>{post.title}</h2>
            <p className="blog-date">{post.date}</p>
            <p>{post.excerpt}</p>
            <a href={post.link} className="read-more">
              Weiterlesen &rarr;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
