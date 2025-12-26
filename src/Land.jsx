import img from './assets/img.png';
import previewGif from './assets/preview.webp';
import './Land.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './fontawsome'; // Icons already configured here
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState, lazy, Suspense } from 'react';
import BlurText from './Blur/Blur';
import ClickSpark from './Click/Click';
import FullPageShader, { GlassCard } from './components/ui/hero';

// Lazy load AnalyticsDashboard
const AnalyticsDashboard = lazy(() => import('./components/ui/AnalyticsDashboard').then(module => ({ default: module.AnalyticsDashboard })));
import { motion } from 'framer-motion';
import { TechCarousel, HTMLIcon, CSSIcon, ReactIcon, NodeIcon, JSIcon, PythonIcon, GitIcon, FigmaIcon } from './components/TechCarousel';

function Land() {
    useEffect(() => {
        AOS.init({
            duration: 1200,
        })
    }, []);

    // Placeholder reviews data
    const reviews = [
        {
            name: "John Marston",
            role: "Tech Lead @Outlaw",
            text: "Sahir delivered exceptional work on our project. His attention to detail and modern design sensibilities really elevated our product.",
            rating: 5
        },
        {
            name: "Arthur Morgan",
            role: "Product Manager @Outlaw",
            text: "Working with Sahir was a great experience. He understood our requirements quickly and delivered ahead of schedule.",
            rating: 5
        },
        {
            name: "Dutch van der Linde",
            role: "Founder @Outlaw",
            text: "Impressive skills in React and modern web technologies. Would definitely recommend for any frontend project.",
            rating: 5
        }
    ];

    return (
        <>
            {/* Fixed Animated Background */}
            <FullPageShader />




            {/* Click Spark Effect */}
            <ClickSpark
                sparkColor='#06b6d4'
                sparkSize={10}
                sparkRadius={15}
                sparkCount={8}
                duration={400}
            >
                {/* Main Content - Scrollable, Above Shader */}
                <main className="content-layer">

                    {/* ========== HERO SECTION ========== */}
                    <section id="home" className="hero-section">
                        {/* Glass Navigation Header */}
                        <GlassCard className="nav-glass" style={{ margin: '1rem', padding: '0.75rem 1.5rem' }}>
                            <header className="glass-header">
                                <motion.div
                                    className="logo-container"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    <span className="logo-text">S</span>
                                </motion.div>

                                <nav className="glass-nav">
                                    <a href="#home" className="nav-link active">Home</a>
                                    <a href="#about" className="nav-link">About</a>
                                    <a href="#reviews" className="nav-link">Reviews</a>
                                    <a href="#contact" className="nav-link">Contact</a>
                                </nav>

                                <div className="social-links">
                                    <a href="https://github.com/sahiee-dev" target="_blank" rel="noopener noreferrer">
                                        <motion.button className="social-btn" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                                            <FontAwesomeIcon icon={['fab', 'github']} />
                                        </motion.button>
                                    </a>
                                    <a href="https://www.linkedin.com/in/shaik-ahamed-sahir/" target="_blank" rel="noopener noreferrer">
                                        <motion.button className="social-btn" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                                            <FontAwesomeIcon icon={['fab', 'linkedin']} />
                                        </motion.button>
                                    </a>
                                    <a href="mailto:sahir150305@gmail.com" target="_blank" rel="noopener noreferrer">
                                        <motion.button className="social-btn" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                                            <FontAwesomeIcon icon={['fas', 'envelope']} />
                                        </motion.button>
                                    </a>
                                </div>
                            </header>
                        </GlassCard>

                        {/* Hero Content */}
                        <div className="hero-container">
                            <div className="hero-content">
                                <div className="hero-title">
                                    <BlurText
                                        text="Hey there, I am"
                                        delay={80}
                                        animateBy="words"
                                        direction="top"
                                        className="hero-greeting"
                                    />
                                    <h1 className="hero-name">Sahir</h1>
                                    <BlurText
                                        text="I create things on the web."
                                        delay={80}
                                        animateBy="words"
                                        direction="top"
                                        className="hero-tagline"
                                    />
                                </div>

                                <div className="hero-description-wrapper">
                                    <BlurText
                                        text="Currently studying computer science engineering at Sri Venkateswara University. This is my journey to become a fully fledged Engineer."
                                        delay={60}
                                        animateBy="words"
                                        direction="top"
                                        className="hero-description"
                                    />
                                </div>

                                <motion.div
                                    className="hero-buttons"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 1.0 }}
                                >
                                    <motion.a
                                        href="https://github.com/sahiee-dev/portfolio"
                                        target="_blank"
                                        className="btn-glass"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        View Code
                                    </motion.a>
                                    <motion.a
                                        href="mailto:sahir150305@gmail.com"
                                        className="btn-gradient"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Get in Touch
                                    </motion.a>
                                </motion.div>

                                {/* Mobile-only Scroll Down Indicator */}
                                <motion.a
                                    href="#about"
                                    className="scroll-down-indicator"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 1.5 }}
                                >
                                    <div className="scroll-arrow-wrapper">
                                        <div className="scroll-arrow-line"></div>
                                        <div className="scroll-arrow-chevron">
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                    <span className="scroll-text">Scroll</span>
                                </motion.a>
                            </div>

                            <motion.div
                                className="hero-image-wrapper"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                <GlassCard className="image-card">
                                    <img className='hero-image' src={img} alt="Profile" />
                                </GlassCard>
                            </motion.div>
                        </div>
                    </section>

                    {/* ========== ABOUT SECTION ========== */}
                    <section id='about' className="glass-section">
                        <GlassCard className="section-card" style={{ padding: '3rem' }} data-aos="fade-up">
                            <h2 className="section-title gradient-text">About Me</h2>

                            <div className="about-grid">
                                <GlassCard className="role-card" data-aos="fade-right">
                                    <h3 className="role-title">Student</h3>
                                    <BlurText
                                        text="Pursuing Computer Science Engineering"
                                        delay={50}
                                        animateBy="words"
                                        direction="top"
                                        className="role-desc"
                                    />
                                </GlassCard>

                                <GlassCard className="role-card" data-aos="fade-left">
                                    <h3 className="role-title">Developer</h3>
                                    <BlurText
                                        text="Building modern web experiences"
                                        delay={50}
                                        animateBy="words"
                                        direction="top"
                                        className="role-desc"
                                    />
                                </GlassCard>
                            </div>

                            <div className="tech-stack">
                                <h3 className="tech-title">Tech Stack</h3>
                                <TechCarousel
                                    logos={[
                                        { name: 'HTML5', icon: HTMLIcon },
                                        { name: 'CSS3', icon: CSSIcon },
                                        { name: 'React', icon: ReactIcon },
                                        { name: 'Node', icon: NodeIcon },
                                        { name: 'JavaScript', icon: JSIcon },
                                        { name: 'Python', icon: PythonIcon },
                                        { name: 'Git', icon: GitIcon },
                                        { name: 'Figma', icon: FigmaIcon },
                                    ]}
                                    speed={30}
                                />
                            </div>
                        </GlassCard>
                    </section>

                    {/* ========== ANALYTICS SECTION ========== */}
                    <section id='analytics' className="glass-section">
                        <GlassCard className="section-card" style={{ padding: '3rem' }} data-aos="fade-up">
                            <h2 className="section-title gradient-text">Analytics Dashboard</h2>
                            <Suspense fallback={<div style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.5)' }}>Loading Dashboard...</div>}>
                                <AnalyticsDashboard />
                            </Suspense>
                        </GlassCard>
                    </section>

                    {/* ========== REVIEWS SECTION ========== */}
                    <ReviewsSection reviews={reviews} previewGif={previewGif} />

                    {/* ========== CONTACT SECTION ========== */}
                    <section id='contact' className="glass-section">
                        <GlassCard className="section-card contact-card" style={{ padding: '3rem' }} data-aos="fade-up">
                            <h2 className="section-title gradient-text">Better Together</h2>

                            <div className="contact-grid">
                                <div className="contact-text" data-aos="fade-right">
                                    <BlurText
                                        text='I enjoy working with dedicated creatives from around the world. We can do much together.'
                                        delay={50}
                                        animateBy='words'
                                        direction='top'
                                        className='contact-line'
                                    />
                                </div>

                                <div className="contact-links" data-aos="fade-left">
                                    <GlassCard className="contact-link-card">
                                        <a href="mailto:sahir150305@gmail.com">
                                            <FontAwesomeIcon icon="fa-solid fa-envelope" className="contact-icon" />
                                            <span>sahir150305@gmail.com</span>
                                        </a>
                                    </GlassCard>
                                    <GlassCard className="contact-link-card">
                                        <a href="https://www.linkedin.com/in/shaik-ahamed-sahir/" target="_blank">
                                            <FontAwesomeIcon icon="fa-brands fa-linkedin" className="contact-icon" />
                                            <span>Shaik Ahamed Sahir</span>
                                        </a>
                                    </GlassCard>
                                    <GlassCard className="contact-link-card">
                                        <a href="tel:8977637897">
                                            <FontAwesomeIcon icon="fa-solid fa-phone" className="contact-icon" />
                                            <span>8977637897</span>
                                        </a>
                                    </GlassCard>
                                </div>
                            </div>
                        </GlassCard>

                        <BlurText
                            text="made with ❤️ by sahir"
                            delay={80}
                            animateBy="words"
                            direction="top"
                            className="footer-text"
                        />
                    </section>
                </main>
            </ClickSpark>
        </>
    );
}

// Reviews Section with Hover GIF Overlay
function ReviewsSection({ reviews, previewGif }) {
    const [showGif, setShowGif] = useState(false);

    return (
        <section
            id='reviews'
            className="glass-section reviews-section-wrapper"
            onMouseEnter={() => setShowGif(true)}
            onMouseLeave={() => setShowGif(false)}
        >
            <GlassCard className="section-card" style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }} data-aos="fade-up">
                <h2 className="section-title gradient-text">What People Say</h2>

                <div className="reviews-grid">
                    {reviews.map((review, index) => (
                        <GlassCard key={index} className="review-card" data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="review-stars">
                                {[...Array(review.rating)].map((_, i) => (
                                    <span key={i} className="star">★</span>
                                ))}
                            </div>
                            <p className="review-text">"{review.text}"</p>
                            <div className="review-author">
                                <div className="review-avatar">{review.name.charAt(0)}</div>
                                <div className="review-info">
                                    <h4 className="review-name">{review.name}</h4>
                                    <p className="review-role">{review.role}</p>
                                </div>
                            </div>
                        </GlassCard>
                    ))}
                </div>

                {/* GIF Overlay on Hover */}
                <motion.div
                    className="gif-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: showGif ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ pointerEvents: showGif ? 'auto' : 'none' }}
                >
                    <div className="gif-overlay-content">
                        <img src={previewGif} alt="Preview" className="gif-overlay-image" />
                        <p className="gif-overlay-text">really bro? 😂</p>
                    </div>
                </motion.div>
            </GlassCard>
        </section>
    );
}

export default Land;
