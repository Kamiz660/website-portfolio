import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      {/* Navigation */}
      <nav className="nav" id="nav">
        <div className="container nav__container">
          <Link to="/" className="nav__logo">
            <span className="nav__logo-icon">A</span>
            Aswanth D
          </Link>

          <ul className={`nav__links ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#projects" className="nav__link" onClick={closeMenu}>Projects</a></li>
            <li><a href="#contact" className="nav__link nav__link--cta" onClick={closeMenu}>Contact Me</a></li>
          </ul>

          <button
            className={`nav__menu-btn ${isMenuOpen ? 'active' : ''}`}
            aria-label="Toggle menu"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero section" id="home">
        <div className="container">
          <div className="hero__content">
            <div className="hero__card fade-in">
              {/* Decorative illustrations can be re-added here if assets exist */}
              <p className="hero__greeting">Hello, I'm</p>
              <h1 className="hero__name">Aswanth D</h1>
              <p className="hero__title">
                <span className="text-accent">UI/UX Designer</span> & Web Developer
              </p>
              <p className="hero__description">
                I design and build clean, user-friendly digital experiences.
                Focused on creating interfaces that feel intuitive and look beautiful.
              </p>
              <div className="hero__cta">
                <a href="#projects" className="btn btn--primary">
                  View My Work
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="#contact" className="btn btn--secondary">Get in Touch</a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero__scroll fade-in">
          <span>Scroll</span>
          <div className="hero__scroll-line"></div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects section" id="projects">
        {/* Background grid pattern */}
        <div className="projects__bg-pattern" aria-hidden="true">
          <img src="/assets/images/grid-pattern.png" alt="" />
        </div>

        <div className="container">
          <header className="section__header">
            <p className="section__label fade-in">Portfolio</p>
            <h2 className="section__title fade-in">Selected Projects</h2>
            <p className="section__subtitle fade-in">A showcase of my recent work in UI/UX design and development</p>
          </header>

          <div className="projects__grid">
            {/* Project Cards - Re-using original structure */}
            {[
              { id: 1, title: 'Project One', tag1: 'UI/UX Design', tag2: 'Web App', bg: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' },
              { id: 2, title: 'Project Two', tag1: 'Mobile App', tag2: 'UX Research', bg: 'linear-gradient(135deg, #2d132c 0%, #801336 50%, #c72c41 100%)' },
              { id: 3, title: 'Project Three', tag1: 'Branding', tag2: 'Web Design', bg: 'linear-gradient(135deg, #1b4332 0%, #2d6a4f 50%, #40916c 100%)' },
              { id: 4, title: 'Project Four', tag1: 'Dashboard', tag2: 'SaaS', bg: 'linear-gradient(135deg, #240046 0%, #5a189a 50%, #7b2cbf 100%)' }
            ].map(project => (
              <Link key={project.id} to={`/projects/${project.id}`} className="project-card fade-in">
                <div className="project-card__image" style={{ background: project.bg }}></div>
                <div className="project-card__overlay">
                  <span className="project-card__number">Project 0{project.id}</span>
                  <h3 className="project-card__title">{project.title}</h3>
                  <div className="project-card__tags">
                    <span className="project-card__tag">{project.tag1}</span>
                    <span className="project-card__tag">{project.tag2}</span>
                  </div>
                </div>
                <div className="project-card__arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact section" id="contact">
        <div className="container">
          <div className="contact__content">
            <p className="contact__label fade-in">✨ Let's Connect</p>
            <h2 className="contact__title fade-in">Have a project in mind?<br />Let's work together</h2>
            <p className="contact__description fade-in">
              I'm always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision.
            </p>

            <a href="mailto:hello@aswanthd.com" className="contact__email fade-in">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="40" height="40">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              hello@aswanthd.com
            </a>

            <div className="contact__socials fade-in">
              <a href="#" className="contact__social-link" aria-label="LinkedIn">Li</a>
              <a href="#" className="contact__social-link" aria-label="Dribbble">Dr</a>
              <a href="#" className="contact__social-link" aria-label="GitHub">Gh</a>
              <a href="#" className="contact__social-link" aria-label="Twitter">Tw</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer__content">
          <p className="footer__copyright">© 2026 <span>Aswanth D</span>. Crafted with passion.</p>
          <a href="#home" className="footer__back-to-top" onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}>
            Back to top
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </a>
        </div>
      </footer>
    </>
  )
}

export default HomePage
