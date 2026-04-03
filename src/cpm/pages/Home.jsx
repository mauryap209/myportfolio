import React from 'react';
// import './style.css';

const Home = () => {
  return (
    <div className="portfolio-home">
      <section className="portfolio-hero">
        <div className="portfolio-hero-content">
          <h1 className="portfolio-name">Pankaj Maurya</h1>
          <p className="portfolio-title">Web Developer & IT Support Engineer</p>
          <p className="portfolio-summary">
            Professional IT support and web development specialist with a strong technical background and customer-focused approach.
            Skilled in full-stack web development and infrastructure support, with hands-on experience in hardware assembly, OS installation, and user training.
          </p>
          <a href="./contact" className="cta-btn">Contact Me</a>
        </div>
      </section>

      <section className="portfolio-section">
        <div className="container">
          <h2 className="section-title">Professional Summary</h2>
          <p className="section-text">
            Experienced IT support engineer with expertise in deploying and managing Windows and Linux environments, diagnosing and resolving software/hardware issues, setting up LAN connections, and providing user support across small businesses and enterprise teams.
            In web development, I build responsive and accessible websites using HTML, CSS, Bootstrap, Tailwind, JavaScript, React, and GitHub.
          </p>
        </div>
      </section>

      <section className="portfolio-section skills-section">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skills-group">
              <h3>Frontend</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>Tailwind</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>GitHub</li>
              </ul>
            </div>
            <div className="skills-group">
              <h3>IT Support</h3>
              <ul>
                <li>Computer hardware assembling & maintenance</li>
                <li>Windows
dan Linux installation & configuration</li>
                <li>Microsoft Office & LibreOffice</li>
                <li>Printer installation & sharing</li>
                <li>Antivirus installation</li>
              </ul>
            </div>
            <div className="skills-group">
              <h3>Technical Responsibilities</h3>
              <ul>
                <li>Install and configure Windows and Linux OS</li>
                <li>Perform system formatting and driver installation</li>
                <li>Diagnose and resolve hardware and software issues</li>
                <li>Configure LAN connections</li>
                <li>Provide technical support to users</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-section achievements-section">
        <div className="container">
          <h2 className="section-title">Key Achievements</h2>
          <ul className="achievement-list">
            <li>Delivered multiple responsive web applications with modern UI/UX.</li>
            <li>Reduced support ticket resolution time by 40% through structured troubleshooting.
            </li>
            <li>Successfully deployed and managed mixed OS networks with high availability.</li>
            <li>Provided training to non-technical staff on productivity software and security best practices.</li>
          </ul>
        </div>
      </section>

      <section className="portfolio-section cta-section">
        <div className="container">
          <h2 className="section-title">Let's Build Together</h2>
          <p className="section-text">Ready to take your project or IT environment to the next level? Contact me today for custom solutions and reliable support.</p>
          <a href="/contact" className="cta-btn">Get in Touch</a>
        </div>
      </section>
    </div>
  );
};

export default Home;