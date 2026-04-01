import React from 'react';
// import './style.css';

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-hero-title">About Us</h1>
          <p className="about-hero-subtitle">Learn more about our mission, values, and the team behind our success</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-content">
              <h2 className="section-title">Our Mission</h2>
              <p className="mission-text">
                We are dedicated to providing high-quality services and innovative solutions to our customers. Our mission is to make technology accessible and user-friendly for everyone.
              </p>
              <p className="mission-text">
                Founded in 2023, we have been at the forefront of digital innovation, helping businesses and individuals achieve their goals through cutting-edge technology.
              </p>
              <div className="mission-stats">
                <div className="stat-item">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Happy Clients</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Support</div>
                </div>
              </div>
            </div>
            <div className="mission-image">
              <div className="image-placeholder">
                <svg className="placeholder-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title text-center">What We Do</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <svg className="icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
              <h3 className="service-title">Web Development</h3>
              <p className="service-description">Creating responsive and modern websites using the latest technologies and best practices.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg className="icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="service-title">Mobile App Development</h3>
              <p className="service-description">Building native and cross-platform mobile applications for iOS and Android devices.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg className="icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
                </svg>
              </div>
              <h3 className="service-title">UI/UX Design</h3>
              <p className="service-description">Designing intuitive and beautiful user interfaces that provide exceptional user experiences.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg className="icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 className="service-title">Consulting Services</h3>
              <p className="service-description">Providing expert advice and strategic guidance to help businesses achieve their digital goals.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg className="icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path>
                </svg>
              </div>
              <h3 className="service-title">Digital Marketing</h3>
              <p className="service-description">Helping businesses grow their online presence through effective digital marketing strategies.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg className="icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 className="service-title">Content Creation</h3>
              <p className="service-description">Creating engaging content that resonates with your audience and drives meaningful interactions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title text-center">Our Team</h2>
          <p className="team-description">
            Our team consists of passionate professionals with years of experience in their respective fields. We believe in collaboration, innovation, and delivering exceptional results.
          </p>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">
                <svg className="avatar-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <h3 className="member-name">John Doe</h3>
              <p className="member-role">CEO & Founder</p>
              <p className="member-bio">Visionary leader with 10+ years of experience in tech innovation and business development.</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <svg className="avatar-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <h3 className="member-name">Jane Smith</h3>
              <p className="member-role">Lead Developer</p>
              <p className="member-bio">Full-stack developer passionate about creating scalable and efficient web applications.</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <svg className="avatar-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <h3 className="member-name">Mike Johnson</h3>
              <p className="member-role">UI/UX Designer</p>
              <p className="member-bio">Creative designer focused on crafting beautiful and intuitive user experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title text-center">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <svg className="icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="value-title">Quality</h3>
              <p className="value-description">We never compromise on quality, ensuring every project meets the highest standards.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg className="icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="value-title">Collaboration</h3>
              <p className="value-description">We believe in the power of teamwork and open communication to achieve great results.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg className="icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="value-title">Innovation</h3>
              <p className="value-description">We stay ahead of the curve by embracing new technologies and creative solutions.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;