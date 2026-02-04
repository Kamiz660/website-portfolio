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
        <div className="project-detail-page">
            <nav className="nav" id="nav">
                <div className="container nav__container">
                    <Link to="/" className="nav__logo">
                        <span className="nav__logo-icon">A</span>
                        Aswanth D
                    </Link>

                    <ul className={`nav__links ${isMenuOpen ? 'active' : ''}`}>
                        <li><Link to="/#projects" className="nav__link" onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
                        <li><Link to="/#contact" className="nav__link nav__link--cta" onClick={() => setIsMenuOpen(false)}>Contact Me</Link></li>
                    </ul>

                    <button
                        className={`nav__menu-btn ${isMenuOpen ? 'active' : ''}`}
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
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Projects
                    </Link>

                    {/* Header */}
                    <header className="project-detail__header">
                        <h1 className="project-detail__title fade-in">Project Title 0{projectId}</h1>

                        <div className="project-detail__meta fade-in">
                            <div className="project-detail__meta-item">
                                <span className="project-detail__meta-label">Role</span>
                                <span className="project-detail__meta-value">UI/UX Designer</span>
                            </div>
                            <div className="project-detail__meta-item">
                                <span className="project-detail__meta-label">Timeline</span>
                                <span className="project-detail__meta-value">3 Months</span>
                            </div>
                            <div className="project-detail__meta-item">
                                <span className="project-detail__meta-label">Tools</span>
                                <span className="project-detail__meta-value">Figma, React, CSS</span>
                            </div>
                            <div className="project-detail__meta-item">
                                <span className="project-detail__meta-label">Type</span>
                                <span className="project-detail__meta-value">Web Application</span>
                            </div>
                        </div>
                    </header>

                    {/* Hero Image */}
                    <div className="project-detail__hero-image fade-in"
                        style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}></div>

                    {/* Content */}
                    <div className="project-detail__content">
                        {/* Overview */}
                        <section className="project-detail__section fade-in">
                            <h2 className="project-detail__section-title">Overview</h2>
                            <p className="project-detail__section-text">
                                This is a placeholder for the project overview. Describe the project's purpose,
                                the problem it solves, and the impact it creates. Give readers a clear understanding
                                of what this project is about and why it matters.
                            </p>
                        </section>

                        {/* Challenge */}
                        <section className="project-detail__section fade-in">
                            <h2 className="project-detail__section-title">The Challenge</h2>
                            <p className="project-detail__section-text">
                                Placeholder for the challenge description. What problems did users face?
                                What were the constraints? What goals did you set out to achieve?
                                This section should set up the context for your design decisions.
                            </p>
                        </section>

                        {/* Gallery */}
                        <div className="project-detail__gallery fade-in">
                            <div style={{ background: 'linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)', aspectAspectRatio: '4/3', borderRadius: '16px' }}></div>
                            <div style={{ background: 'linear-gradient(135deg, #e5e5e5 0%, #d5d5d5 100%)', aspectAspectRatio: '4/3', borderRadius: '16px' }}></div>
                        </div>

                        {/* Solution */}
                        <section className="project-detail__section fade-in">
                            <h2 className="project-detail__section-title">The Solution</h2>
                            <p className="project-detail__section-text">
                                Placeholder for the solution description. How did you approach the problem?
                                What design decisions did you make and why? Walk through your process
                                and explain how your solution addresses the challenges outlined above.
                            </p>
                        </section>

                        {/* Results */}
                        <section className="project-detail__section fade-in">
                            <h2 className="project-detail__section-title">Results & Impact</h2>
                            <p className="project-detail__section-text">
                                Placeholder for results. What was the outcome of your work?
                                Include metrics if available, user feedback, or other measures of success.
                                This section demonstrates the real-world impact of your design work.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <footer className="footer" style={{ background: 'var(--color-gray-900)' }}>
                <div className="container footer__content">
                    <p className="footer__copyright">© 2026 <span>Aswanth D</span>. Crafted with passion.</p>
                    <button className="footer__back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        Back to top
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 15l-6-6-6 6" />
                        </svg>
                    </button>
                </div>
            </footer>
        </div>
    )
}

export default ProjectPage
