import React from 'react';
import './TechCarousel.css';

// Import icons from react-icons (Simple Icons for brand logos)
import {
    SiPython,
    SiJavascript,
    SiC,
    SiCplusplus,
    SiReact,
    SiNodedotjs,
    SiExpress,
    SiNextdotjs,
    SiFlask,
    SiTailwindcss,
    SiMysql,
    SiMongodb,
    SiSqlite,
    SiAmazonwebservices,
    SiHtml5,
    SiCss3,
    SiGit,
    SiFigma
} from 'react-icons/si';

// Icon wrapper components with brand colors
const PythonIcon = (props) => <SiPython color="#3776AB" {...props} />;
const JSIcon = (props) => <SiJavascript color="#F7DF1E" {...props} />;
const CIcon = (props) => <SiC color="#A8B9CC" {...props} />;
const CPPIcon = (props) => <SiCplusplus color="#00599C" {...props} />;
const ReactIcon = (props) => <SiReact color="#61DAFB" {...props} />;
const NodeIcon = (props) => <SiNodedotjs color="#339933" {...props} />;
const ExpressIcon = (props) => <SiExpress color="#FFFFFF" {...props} />;
const NextIcon = (props) => <SiNextdotjs color="#FFFFFF" {...props} />;
const FlaskIcon = (props) => <SiFlask color="#FFFFFF" {...props} />;
const TailwindIcon = (props) => <SiTailwindcss color="#06B6D4" {...props} />;
const MySQLIcon = (props) => <SiMysql color="#4479A1" {...props} />;
const MongoDBIcon = (props) => <SiMongodb color="#47A248" {...props} />;
const SQLiteIcon = (props) => <SiSqlite color="#003B57" {...props} />;
const AWSIcon = (props) => <SiAmazonwebservices color="#FF9900" {...props} />;
const HTMLIcon = (props) => <SiHtml5 color="#E34F26" {...props} />;
const CSSIcon = (props) => <SiCss3 color="#1572B6" {...props} />;
const GitIcon = (props) => <SiGit color="#F05032" {...props} />;
const FigmaIcon = (props) => <SiFigma color="#F24E1E" {...props} />;

const TechCarousel = ({ logos, speed = 40 }) => {
    const duplicatedLogos = [...logos, ...logos];

    return (
        <div className="tech-carousel-wrapper">
            <div className="tech-carousel-track" style={{ '--speed': `${speed}s` }}>
                {duplicatedLogos.map((logo, index) => (
                    <div key={index} className="tech-carousel-item">
                        <div className="tech-carousel-icon-wrapper">
                            {React.createElement(logo.icon, { className: "tech-carousel-icon", size: 48 })}
                        </div>
                        <span className="tech-carousel-name">{logo.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export { TechCarousel, HTMLIcon, CSSIcon, ReactIcon, NodeIcon, JSIcon, PythonIcon, GitIcon, FigmaIcon, CIcon, CPPIcon, ExpressIcon, NextIcon, FlaskIcon, TailwindIcon, MySQLIcon, MongoDBIcon, SQLiteIcon, AWSIcon };
