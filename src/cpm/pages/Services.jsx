import React, { useState } from 'react';
// import './style.css';

const Services = () => {
  const [activeTab, setActiveTab] = useState('all');

  const services = [
    {
      id: 1,
      title: 'Web Development',
      category: 'development',
      icon: 'web',
      description: 'Custom web applications built with modern technologies and best practices.',
      features: ['Responsive Design', 'SEO Optimization', 'Performance Optimization', 'Security Implementation'],
      price: 'Starting from $999',
      duration: '2-4 weeks',
      popular: false
    },
    {
      id: 2,
      title: 'Mobile App Development',
      category: 'development',
      icon: 'mobile',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['Cross-platform Support', 'App Store Deployment', 'Push Notifications', 'Offline Functionality'],
      price: 'Starting from $1999',
      duration: '4-8 weeks',
      popular: true
    },
    {
      id: 3,
      title: 'UI/UX Design',
      category: 'design',
      icon: 'design',
      description: 'Beautiful and intuitive user interfaces that enhance user experience.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
      price: 'Starting from $499',
      duration: '1-3 weeks',
      popular: false
    },
    {
      id: 4,
      title: 'Digital Marketing',
      category: 'marketing',
      icon: 'marketing',
      description: 'Comprehensive digital marketing strategies to grow your online presence.',
      features: ['SEO Optimization', 'Social Media Marketing', 'Content Creation', 'Analytics & Reporting'],
      price: 'Starting from $299/month',
      duration: 'Ongoing',
      popular: false
    },
    {
      id: 5,
      title: 'E-commerce Solutions',
      category: 'development',
      icon: 'ecommerce',
      description: 'Complete e-commerce platforms with payment integration and inventory management.',
      features: ['Payment Gateway Integration', 'Inventory Management', 'Order Processing', 'Customer Portal'],
      price: 'Starting from $1499',
      duration: '3-6 weeks',
      popular: true
    },
    {
      id: 6,
      title: 'Consulting Services',
      category: 'consulting',
      icon: 'consulting',
      description: 'Expert advice and strategic guidance for your digital transformation.',
      features: ['Technology Assessment', 'Strategy Planning', 'Process Optimization', 'Team Training'],
      price: 'Starting from $199/hour',
      duration: 'Flexible',
      popular: false
    }
  ];

  const filteredServices = activeTab === 'all'
    ? services
    : services.filter(service => service.category === activeTab);

  const getIcon = (iconName) => {
    const icons = {
      web: (
        <svg className="service-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
        </svg>
      ),
      mobile: (
        <svg className="service-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
        </svg>
      ),
      design: (
        <svg className="service-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
        </svg>
      ),
      marketing: (
        <svg className="service-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path>
        </svg>
      ),
      ecommerce: (
        <svg className="service-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
        </svg>
      ),
      consulting: (
        <svg className="service-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
        </svg>
      )
    };
    return icons[iconName] || icons.web;
  };

  return (
    <div className="services-container">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-content">
          <h1 className="services-hero-title">Our Services</h1>
          <p className="services-hero-subtitle">
            Comprehensive digital solutions tailored to transform your business and drive growth
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          {/* Filter Tabs */}
          <div className="services-tabs">
            <button
              className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Services
            </button>
            <button
              className={`tab-btn ${activeTab === 'development' ? 'active' : ''}`}
              onClick={() => setActiveTab('development')}
            >
              Development
            </button>
            <button
              className={`tab-btn ${activeTab === 'design' ? 'active' : ''}`}
              onClick={() => setActiveTab('design')}
            >
              Design
            </button>
            <button
              className={`tab-btn ${activeTab === 'marketing' ? 'active' : ''}`}
              onClick={() => setActiveTab('marketing')}
            >
              Marketing
            </button>
            <button
              className={`tab-btn ${activeTab === 'consulting' ? 'active' : ''}`}
              onClick={() => setActiveTab('consulting')}
            >
              Consulting
            </button>
          </div>

          {/* Services Grid */}
          <div className="services-grid">
            {filteredServices.map(service => (
              <div key={service.id} className={`service-card ${service.popular ? 'popular' : ''}`}>
                {service.popular && <div className="popular-badge">Most Popular</div>}

                <div className="service-header">
                  <div className="service-icon">
                    {getIcon(service.icon)}
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                </div>

                <p className="service-description">{service.description}</p>

                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index} className="service-feature">
                      <svg className="feature-check" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="service-footer">
                  <div className="service-pricing">
                    <span className="price">{service.price}</span>
                    <span className="duration">{service.duration}</span>
                  </div>
                  <button className="service-btn">Get Started</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2 className="process-title">Our Process</h2>
          <div className="process-grid">
            <div className="process-step">
              <div className="process-number">01</div>
              <h3 className="process-step-title">Discovery</h3>
              <p className="process-description">
                We start by understanding your business goals, target audience, and project requirements.
              </p>
            </div>
            <div className="process-step">
              <div className="process-number">02</div>
              <h3 className="process-step-title">Planning</h3>
              <p className="process-description">
                Our team creates a detailed project roadmap with timelines, milestones, and deliverables.
              </p>
            </div>
            <div className="process-step">
              <div className="process-number">03</div>
              <h3 className="process-step-title">Development</h3>
              <p className="process-description">
                We build your solution using industry best practices and cutting-edge technologies.
              </p>
            </div>
            <div className="process-step">
              <div className="process-number">04</div>
              <h3 className="process-step-title">Testing</h3>
              <p className="process-description">
                Rigorous testing ensures your solution meets quality standards and performs flawlessly.
              </p>
            </div>
            <div className="process-step">
              <div className="process-number">05</div>
              <h3 className="process-step-title">Launch</h3>
              <p className="process-description">
                We deploy your solution and provide ongoing support to ensure continued success.
              </p>
            </div>
            <div className="process-step">
              <div className="process-number">06</div>
              <h3 className="process-step-title">Support</h3>
              <p className="process-description">
                Continuous maintenance and updates to keep your solution current and optimized.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Get Started?</h2>
            <p className="cta-description">
              Let's discuss your project and create something amazing together.
            </p>
            <a href="/contact" className="cta-btn">Contact Us Today</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
