import img from './assets/img.png';
import vox from './assets/vox.jpg';
import insta from './assets/insta.png';
import typing from './assets/typing.jpg'
import sapt from './assets/sapt.jpg';
import pyth from './assets/pyth.jpg'
import './Land.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './fontawsome';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import BlurText from './Blur/Blur';
import InfiniteMenu from './menu/Menu';
import ClickSpark from './Click/Click';
import Aurora from './Aurora/Aurora';


// Add FontAwesome icons to library
library.add(fab, fas);

function Land() {

    useEffect(() => {
        AOS.init({
            duration: 1200,
        })
    }, []);

    const [showProjectsPopup, setShowProjectsPopup] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                const rect = projectsSection.getBoundingClientRect();
                if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                    setShowProjectsPopup(true);
                } else {
                    setShowProjectsPopup(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <ClickSpark
                sparkColor='#fff'
                sparkSize={10}
                sparkRadius={15}
                sparkCount={8}
                duration={400}
            >

                <main>
                    <section id="home">
                        <header>
                            <nav>
                                <ul>
                                    <a href="#"><li>Home</li></a>
                                    <a href="#about"><li>About</li></a>
                                    <a href="#projects"><li>Projects</li></a>
                                    <a href="#contact"><li>Contact</li></a>
                                </ul>
                            </nav>
                            <Aurora
                                colorStops={["#b97be5", "#fff", "#cd18fa"]}
                                blend={0.5}
                                amplitude={1.0}
                                speed={0.5}
                            />
                        </header>


                        <div className="icons" >
                            <div className="left-side-icons">
                                <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
                                    <button><FontAwesomeIcon icon={['fab', 'github']} /></button>
                                </a>
                                <a href="https://linkedin.com/in/shaikahamedsahir" target="_blank" rel="noopener noreferrer">
                                    <button><FontAwesomeIcon icon={['fab', 'linkedin']} /></button>
                                </a>
                            </div>
                            <div className="right-side-icons">
                                <a href="mailto:sahir150305@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <button><FontAwesomeIcon icon={['fas', 'envelope']} /></button>
                                </a>
                            </div>
                        </div>

                        <div className="container">
                            <div className="left-container" data-aos="fade-right">
                                <div style={{ marginTop: '4rem' }}>
                                    <BlurText
                                        text="Hey there, I am"
                                        delay={150}
                                        animateBy="words"
                                        direction="top"
                                        className="text-2xl mb-2"
                                    />
                                </div>
                                <h1>
                                    <span>
                                        Sahir
                                    </span>
                                </h1>
                                <h2>
                                    <BlurText
                                        text="I create things on the web."
                                        delay={150}
                                        animateBy="words"
                                        direction="top"
                                        className="text-2xl mb-2"
                                    />
                                </h2>

                                <BlurText
                                    text="Currently studying computer science engineering at"
                                    delay={150}
                                    animateBy="words"
                                    direction="top"
                                    className="text-2xl mb-2"
                                />
                                <a href="https://svu.edu.in/" target="_blank">
                                    <BlurText
                                        text="Sri Venkateshwara University"
                                        delay={150}
                                        animateBy="words"
                                        direction="top"
                                        className="text-2xl mb-2"
                                    />
                                </a>
                                <BlurText
                                    text="This is my journey to become a fully fledged Engineer."
                                    delay={150}
                                    animateBy="words"
                                    direction="top"
                                    className="text-2xl mb-2"
                                />
                                <br />
                                <a href="https://github.com/sahiee-dev/portfolio" target="_blank">
                                    <button className="web-code-btn">
                                        view website code
                                    </button>
                                </a>
                                <BlurText
                                    text="Need a website as cool as this one? Shoot me an"
                                    delay={150}
                                    animateBy="words"
                                    direction="top"
                                    className="text-2xl mb-2"
                                />
                                <a href="mailto:sahir150305@gmail.com">
                                    <BlurText
                                        text=" email"
                                        delay={150}
                                        animateBy="words"
                                        direction="top"
                                        className="text-2xl mb-2"
                                    />
                                </a>

                            </div>
                            <div className="right-container" data-aos="fade-left">
                                <div className="img-container">
                                    <img className='image' src={img} alt="Profile" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id='about'>
                        <h1>About</h1>
                        <div className="slide-left" data-aos="fade-right">
                            <h2>student</h2>
                        </div>
                        <div className="slide-right" data-aos="fade-left">
                            <h2 className='tech-title'>Developer</h2>
                        </div>
                        <div className="tech">
                            <h1 data-aos="fade-right">Tech Stack</h1>
                            <FontAwesomeIcon icon="fa-brands fa-html5" size='3x' className="fa-icon" data-aos="flip-up" />
                            <FontAwesomeIcon icon="fa-brands fa-css3-alt" size='3x' className="fa-icon" data-aos="flip-up" />
                            <FontAwesomeIcon icon="fa-brands fa-react" size='3x' className="fa-icon" data-aos="flip-up" />
                            <FontAwesomeIcon icon="fa-brands fa-node" size='3x' className="fa-icon" data-aos="flip-up" />
                            <FontAwesomeIcon icon="fa-solid fa-database" size='3x' className="fa-icon" data-aos="flip-up" />
                            <br />
                            <FontAwesomeIcon icon="fa-brands fa-js" size='3x' className="fa-icon" data-aos="flip-up" data-aos-duration="7000" />
                            <FontAwesomeIcon icon="fa-brands fa-python" size='3x' className="fa-icon" data-aos="flip-up" data-aos-duration="7000" />
                            <FontAwesomeIcon icon="fa-solid fa-c" size='3x' className="fa-icon" data-aos="flip-up" data-aos-duration="7000" />
                            <FontAwesomeIcon icon="fa-brands fa-figma" size='3x' className="fa-icon" data-aos="flip-up" data-aos-duration="7000" />
                            <FontAwesomeIcon icon="fa-brands fa-git-alt" size='3x' className="fa-icon" data-aos="flip-up" data-aos-duration="7000" />
                        </div>
                    </section>
                    <section id='projects'>
                        <h1 className='heading'>Projects</h1>
                        {showProjectsPopup && (
                            <div style={{
                                textAlign: 'center',
                                fontSize: '1.2rem',
                                margin: '20px 0 40px',
                                color: '#fff'
                            }} data-aos="fade-up">
                                Click and drag any image to view all projects
                            </div>
                        )}
                        <div className="project-cont">
                            <div style={{
                                width: '80vw',
                                height: '60vh',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '2rem 0',
                                borderRadius: '20px'
                            }}>
                                <InfiniteMenu
                                    items={[
                                        {
                                            title: 'insta',
                                            description: 'Instagram video downloader',
                                            link: 'https://github.com/sahiee-dev/instagram-downloader',
                                            image: insta
                                        },
                                        {
                                            title: 'Endpoint detection',
                                            description: 'Endpoint detection tool for your pc',
                                            image: pyth
                                        },
                                        {
                                            title: 'Vox vision',
                                            description: 'Fun real time communication app',
                                            link: 'https://voxvision.netlify.app',
                                            image: vox
                                        },
                                        {
                                            title: 'sapt',
                                            description: 'Ai chatbot',
                                            link: 'https://github.com/sahiee-dev/sa-pt',
                                            image: sapt
                                        },
                                        {
                                            title: 'typing test',
                                            description: 'Typing speed testing app',
                                            link: 'https://qwertyquest.netlify.app',
                                            image: typing
                                        }
                                    ]}
                                    speed={30}
                                    direction="left"
                                    renderItem={(item) => (
                                        <div className="project-item" style={{ position: 'relative', margin: '0 10px' }}>
                                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                                <img src={item.image} alt={item.title} style={{ width: '100%', borderRadius: '10px' }} />
                                                <div className="overlay" style={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    bottom: 0,
                                                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                                    color: '#fff',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    opacity: 0,
                                                    transition: 'opacity 0.3s ease',
                                                    borderRadius: '10px'
                                                }}>
                                                    <h3>{item.title}</h3>
                                                    <p>{item.description}</p>
                                                </div>
                                            </a>
                                        </div>
                                    )}
                                />
                            </div>
                        </div>
                        <br />
                        <hr />
                    </section>
                    <section id='contact'>
                        <h1>Better together</h1>
                        <div className="contact">
                            <div className="left-contact" data-aos="fade-left">
                                <BlurText text='I enjoy working with dedicated creatives from' delay={150} animateBy='words' direction='top' className='text-2xl' />
                                <br />
                                <BlurText text='Around the world' delay={150} animateBy='words' direction='top' className='text-2xl ' />
                                <br />
                                <BlurText text='We can do much Together' delay={150} animateBy='words' direction='top' className='text-2xl' />
                            </div>
                            <div className="right-contact" data-aos="fade-right">
                                <a href="mailto:sahir150305@gmail.com"><FontAwesomeIcon icon="fa-solid fa-envelope" /> sahir150305@gmail.com</a>
                                <br />
                                <a href=""><FontAwesomeIcon icon="fa-brands fa-linkedin" /> Shaik ahamed Sahir</a>
                                <br />
                                <a href="callto:8977637897"><FontAwesomeIcon icon="fa-solid fa-phone" /> 8977637897</a>
                            </div>
                        </div>
                        <hr />
                        <p>made with ❤️ by sahir</p>
                    </section>
                </main>
            </ClickSpark>
        </>
    );
}

export default Land;

