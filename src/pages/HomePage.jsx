import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -100px 0px',
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
    <div className="portfolio-site">
      {/* Navigation - Floating Glass Pill */}
      <nav className="nav glass" id="nav">
        <div className="nav__container">
          <Link to="/" className="nav__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="nav__logo-wrapper">
              <img src="/assets/images/logos/ad.png" alt="Aswanth D" className="nav__logo-img" />
            </div>
          </Link>

          <ul className={`nav__links ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#projects" className="nav__link" onClick={closeMenu}>Work</a></li>
            <li><a href="#contact" className="nav__link nav__link--cta" onClick={closeMenu}>Get in Touch</a></li>
          </ul>

          <button
            className={`nav__menu-btn hidden ${isMenuOpen ? 'active' : ''}`}
            aria-label="Toggle menu"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Hero Section - Luxe Depth */}
      <section className="hero section" id="home">
        <div className="hero__background-glow"></div>
        <div className="container">
          <div className="hero__card glass fade-in">
            <div className="hero__content">
              <p className="hero__greeting">UI/UX Designer & Web Developer</p>
              <h1 className="hero__name font-display">Aswanth D</h1>
              <p className="hero__title text-gradient">
                Crafting high-fidelity <span className="text-accent">digital experiences</span> through design and code.
              </p>
              <p className="hero__description">
                Bridging the gap between aesthetics and functionality. I specialize in minimal designs that solve complex problems.
              </p>
              <div className="hero__cta">
                <a href="#projects" className="btn btn--primary">
                  Explore Work
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="#contact" className="btn btn--secondary">The Process</a>
              </div>
            </div>

            <div className="hero__images">
              <div className="hero__illustration" aria-hidden="true">
                <img src="/assets/images/hero-shapes.png" alt="" className="hero__illustration-shapes" />
              </div>
              <div className="hero__design-elements" aria-hidden="true">
                <img src="/assets/images/design-elements.png" alt="" className="hero__design-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Visual Impact */}
      <section className="projects section" id="projects">
        <div className="projects__bg-pattern" aria-hidden="true">
          <img src="/assets/images/grid-pattern.png" alt="" />
        </div>

        <div className="container">
          <header className="section__header fade-in">
            <h2 className="section__title font-display">Selected <span className="text-gradient">Artifacts</span></h2>
            <p className="section__subtitle">A deep dive into visual research and digital execution.</p>
          </header>

          <div className="projects__grid">
            {[
              { id: 1, title: 'Lumina App', tag1: 'UI Design', tag2: 'Product', bg: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)' },
              { id: 2, title: 'Vortex UI', tag1: 'UX Design', tag2: 'System', bg: 'linear-gradient(135deg, #450a0a 0%, #7f1d1d 100%)' },
              { id: 3, title: 'Aura Brand', tag1: 'Branding', tag2: 'Identity', bg: 'linear-gradient(135deg, #064e3b 0%, #065f46 100%)' },
              { id: 4, title: 'Nexus SaaS', tag1: 'Dashboard', tag2: 'SaaS', bg: 'linear-gradient(135deg, #4c1d95 0%, #5b21b6 100%)' }
            ].map((project, index) => (
              <Link key={project.id} to={`/projects/${project.id}`} className="project-card fade-in">
                <div className="project-card__image" style={{ background: project.bg }}></div>
                <div className="project-card__overlay">
                  <span className="project-card__number">Artifact 0{project.id}</span>
                  <h3 className="project-card__title font-display">{project.title}</h3>
                  <div className="project-card__tags">
                    <span className="project-card__tag">{project.tag1}</span>
                    <span className="project-card__tag">{project.tag2}</span>
                  </div>
                </div>
                <div className="project-card__arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="24" height="24">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - High Impact */}
      <section className="contact section" id="contact">
        <div className="container">
          <div className="contact__content">
            <p className="contact__label fade-in">Collaboration</p>
            <h2 className="contact__title font-display fade-in">Have a bold idea? <br /> Let's build it.</h2>

            <a href="mailto:hello@aswanthd.com" className="contact__email fade-in">
              hello@aswanthd.com
            </a>

            <div className="contact__socials fade-in">
              <a href="#" class="contact__social-link">LN</a>
              <a href="#" class="contact__social-link">BE</a>
              <a href="#" class="contact__social-link">GH</a>
              <a href="#" class="contact__social-link">TW</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer__content">
          <p className="footer__copyright">© 2026 Developed by <span>Aswanth D</span></p>
          <a href="#home" className="footer__back-to-top" onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}>
            <span className="font-bold">UP</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
