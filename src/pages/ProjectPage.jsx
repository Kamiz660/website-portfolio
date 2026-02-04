import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

function ProjectPage() {
    const [searchParams] = useSearchParams()
    const projectId = searchParams.get('id') || '1'
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        // Scroll Animations
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -50px 0px',
            threshold: 0.1
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible')
                    observer.unobserve(entry.target)
                }
            })
        }, observerOptions)

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el)
        })

        window.scrollTo(0, 0)

        return () => observer.disconnect()
    }, [])

    return (
        <div className="project-detail-page portfolio-site">
            {/* Navigation - Same as Home for Consistency */}
            <nav className="nav glass" id="nav">
                <div className="nav__container">
                    <Link to="/" className="nav__logo">
                        <div className="nav__logo-wrapper">
                            <img src="/assets/images/logos/ad.png" alt="Aswanth D" className="nav__logo-img" />
                        </div>
                    </Link>

                    <ul className={`nav__links ${isMenuOpen ? 'active' : ''}`}>
                        <li><Link to="/#projects" className="nav__link" onClick={() => setIsMenuOpen(false)}>Work</Link></li>
                        <li><Link to="/#contact" className="nav__link nav__link--cta" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
                    </ul>

                    <button
                        className={`nav__menu-btn hidden ${isMenuOpen ? 'active' : ''}`}
                        aria-label="Toggle menu"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>

            <main className="project-detail section">
                <div className="container">
                    {/* Back Link */}
                    <Link to="/#projects" className="project-detail__back fade-in">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                        </svg>
                        Return to Work
                    </Link>

                    {/* Header */}
                    <header className="project-detail__header">
                        <h1 className="project-detail__title font-display fade-in">Artifact 0{projectId}</h1>

                        <div className="project-detail__meta fade-in glass">
                            <div className="project-detail__meta-item">
                                <span className="project-detail__meta-label">Discipline</span>
                                <span className="project-detail__meta-value">UI/UX Designer</span>
                            </div>
                            <div className="project-detail__meta-item">
                                <span className="project-detail__meta-label">Duration</span>
                                <span className="project-detail__meta-value">3 Months</span>
                            </div>
                            <div className="project-detail__meta-item">
                                <span className="project-detail__meta-label">Stack</span>
                                <span className="project-detail__meta-value">Figma, React</span>
                            </div>
                            <div className="project-detail__meta-item">
                                <span className="project-detail__meta-label">Category</span>
                                <span className="project-detail__meta-value">Web Application</span>
                            </div>
                        </div>
                    </header>

                    {/* Hero Image */}
                    <div className="project-detail__hero-image fade-in"
                        style={{
                            background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
                            borderRadius: 'var(--radius-2xl)',
                            boxShadow: 'var(--shadow-lg)'
                        }}></div>

                    {/* Content */}
                    <div className="project-detail__content">
                        {/* Overview */}
                        <section className="project-detail__section fade-in">
                            <h2 className="project-detail__section-title font-display">Strategic Context</h2>
                            <p className="project-detail__section-text">
                                This initiative focuses on solving high-impact user problems through rigorous research
                                and visual storytelling. The goal was to create a seamless interface that balances
                                complex data with intuitive navigation.
                            </p>
                        </section>

                        {/* Gallery */}
                        <div className="project-detail__gallery fade-in">
                            <div className="glass" style={{ aspectRatio: '16/9', borderRadius: 'var(--radius-lg)' }}></div>
                            <div className="glass" style={{ aspectRatio: '16/9', borderRadius: 'var(--radius-lg)' }}></div>
                        </div>

                        {/* Results */}
                        <section className="project-detail__section fade-in">
                            <h2 className="project-detail__section-title font-display">Outcome</h2>
                            <p className="project-detail__section-text">
                                The final solution achieved a measurable increase in user engagement and successfully
                                met all stakeholder objectives. It stands as a testament to the power of design-led development.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <footer className="footer">
                <div className="container footer__content">
                    <p className="footer__copyright">© 2026 Crafted by <span>Aswanth D</span></p>
                    <button className="footer__back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <span className="font-bold">UP</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M18 15l-6-6-6 6" />
                        </svg>
                    </button>
                </div>
            </footer>
        </div>
    )
}

export default ProjectPage
