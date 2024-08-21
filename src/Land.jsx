import img from './assets/img.png';
import vox from './assets/vox.png';
import qwerty from './assets/qwerty.png';
import cringe from './assets/cringe.png';
import temp from './assets/temp.png';
import './Land.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './fontawsome';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Land() {

    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, []);

    const toggleDarkMode = () => {
        const mode = document.body;
        mode.classList.toggle('darkmode');
    };

    return (
        <>
            <main>
                <section id="home">
                    <header>
                        <nav>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#projects">Projects</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                            <a>
                                <button id='switchmode' onClick={toggleDarkMode}><FontAwesomeIcon icon={['fas', 'moon']} /></button>
                            </a>
                        </nav>
                    </header>

                    <div className="icons">
                        <div className="left-side-icons">
                            <a href="https://github.com/sahiee-dev" target="_blank" rel="noopener noreferrer">
                                <button><FontAwesomeIcon icon={['fab', 'github']} /></button>
                            </a>
                            <a href="https://www.linkedin.com/in/shaik-ahamed-sahir-672562253/" target="_blank" rel="noopener noreferrer">
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
                            <h2>Hey there, I am</h2>
                            <br />
                            <h1><span>Sahir</span></h1>
                            <h2>I create things on the web.</h2>
                            <br />
                            <p>
                                Currently studying computer science engineering at <br /> 
                                <a href="https://svuniversity.edu.in/" target='_blank'>Sri Venkateshwara University</a> <br />
                                This is my journey to become a fully-fledged engineer.
                            </p>
                            <br /><br /><br />
                            <a href="https://github.com/sahiee-dev/portfolio" target='_blank'>
                                <button className='web-code-btn'>View Website Code</button>
                            </a>
                            <p className='small-txt'>
                                Need a website as cool as this one? Shoot me an <a href="mailto:sahir150305@gmail.com">email</a>
                            </p>
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
                    <FontAwesomeIcon icon="fa-brands fa-html5" size='3x'  className="fa-icon" data-aos="flip-up" />
                    <FontAwesomeIcon icon="fa-brands fa-css3-alt" size='3x' className="fa-icon" data-aos="flip-up"/>
                    <FontAwesomeIcon icon="fa-brands fa-react" size='3x' className="fa-icon" data-aos="flip-up" />
                    <FontAwesomeIcon icon="fa-brands fa-node" size='3x' className="fa-icon" data-aos="flip-up" />
                    <FontAwesomeIcon icon="fa-solid fa-database" size='3x' className="fa-icon" data-aos="flip-up" />
                    <br />
                    <FontAwesomeIcon icon="fa-brands fa-js" size='3x' className="fa-icon" data-aos="flip-up" data-aos-duration="7000"/>
                    <FontAwesomeIcon icon="fa-brands fa-python" size='3x' className="fa-icon" data-aos="flip-up" data-aos-duration="7000"/>
                    <FontAwesomeIcon icon="fa-solid fa-c" size='3x' className="fa-icon" data-aos="flip-up" data-aos-duration="7000"/>
                    <FontAwesomeIcon icon="fa-brands fa-figma" size='3x' className="fa-icon" data-aos="flip-up" data-aos-duration="7000"/>
                    <FontAwesomeIcon icon="fa-brands fa-git-alt" size='3x' className="fa-icon" data-aos="flip-up" data-aos-duration="7000"/>
                    </div>
                </section>

                <section id='projects'>
                    <h1 className='heading'>Projects</h1>
                    <div className="project-cont">
                        <div className="cont-single" id='1' data-aos="fade-right">
                            <a href="https://voxvision.netlify.app" target='_blank'><h1>VoxVision</h1></a>
                            <a href="https://voxvision.netlify.app/" target='_blank'><img className='project-img' src={vox} alt="" /></a>
                            <br />
                            <p>VoxVision: a cutting-edge web app using WebRTC for effortless virtual room connections via unique codes, breaking communication barriers with an intuitive interface for instant calls worldwide.</p>
                            <br />
                            <div className='skills'>
                                <button>javascript</button><button>Agora's SDK</button><button>Web RTC</button>
                            </div>
                            <a href="https://github.com/sahiee-dev/VoxVision" target='_blank'><FontAwesomeIcon icon="fa-brands fa-github" />GitHub</a>
                        </div>


                        <div className="cont-single" id='2' data-aos="fade-left">
                            <a href="https://qwertyquest.netlify.app" target='_blank'><h1>QwertyQuest</h1></a>
                            <a href="https://qwertyquest.netlify.app/" target='_blank'><img className='project-img' src={qwerty} alt="" /></a>
                            <br />
                            <p>Qwerty Quest is a web-based typing test platform designed to enhance your typing skills in an interactive and engaging way.</p>
                            <br />
                            <div className='skills'>
                                <button>HTML5</button><button>CSS</button><button>Javascript</button>
                            </div>
                            <a href="https://github.com/sahiee-dev/qwertyquest" target='_blank'><FontAwesomeIcon icon="fa-brands fa-github" />GitHub</a>
                        </div>


                        <div className="cont-single" id='3' data-aos="fade-right">
                            <a href="https://cringe-0-meter.netlify.app" target='_blank'><h1>Cringe-0-Meter</h1></a>
                            <a href="https://cringe-0-meter.netlify.app/" target='_blank'><img className='project-img' src={cringe} alt="" /></a>
                            <br />
                            <p>Cringe-O-Meter: The ultimate cringeness calculator. Get your cringe score and personalized certificate in seconds. Measure your cringe level with precision and humor.</p>
                            <br />
                            <div className='skills'>
                                <button>React</button><button>Javascript</button><button>JS pdf</button>
                            </div>
                            <a href="https://github.com/sahiee-dev/cringe-0-meter" target='_blank'><FontAwesomeIcon icon="fa-brands fa-github" />GitHub</a>
                        </div>


                        <div className="cont-single" id='4' data-aos="fade-left">
                            <a href="https://tempzen.netlify.app" target='_blank'><h1>TempZen</h1></a>
                            <a href="https://tempzen.netlify.app/" target='_blank'><img className='project-img' src={temp} alt="" /></a>
                            <br />
                            <p>TempZen: A tranquil weather forecasting realm powered by real-time data from OpenWeather API. Say goodbye to forecast frustration with TempZen's serene interface and effortless insights. Built with React, Axios, and OpenWeather API for seamless weather exploration.</p>
                            <br />
                            <div className='skills'>
                                <button>REST API</button><button>Axios</button><button>React</button><button>Geolocation API</button>
                            </div>
                            <a href="https://github.com/sahiee-dev/TempTrack" target='_blank'><FontAwesomeIcon icon="fa-brands fa-github" />GitHub</a>
                        </div>
                    </div>
                    <br />
                    <hr />
                </section>
                <section id='contact'>
                <h1>Better Together</h1>
                    <div className="contact">
                        <div className="left-contact" data-aos="fade-left">
                            <p>I enjoy working with dedicated creatives from <br /> places around the world.</p>
                            <br />
                            <p>we can do much together.</p>
                            <br/>
                            <p>🤍</p>
                        </div>
                        <div className="right-contact" data-aos="fade-right">
                            <a href="mailto:sahir150305@gmail.com"><FontAwesomeIcon icon="fa-solid fa-envelope" /> sahir150305@gmail.com</a>
                            <br />
                            <a href="https://www.linkedin.com/in/shaik-ahamed-sahir-672562253/"><FontAwesomeIcon icon="fa-brands fa-linkedin" /> Shaik ahamed Sahir</a>
                            <br />
                            <a href="callto:8977637897"><FontAwesomeIcon icon="fa-solid fa-phone" /> 8977637897</a>

                        </div>
                    </div>
                    <hr />
                    <p>made with ❤️ by sahir</p>
                </section>
            </main>
        </>
    );
}


export default Land;
