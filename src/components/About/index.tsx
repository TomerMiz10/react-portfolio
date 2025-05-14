import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Typescript_logo from '@assets/images/typescript-logo.png';
console.log('Typescript_logo path:', Typescript_logo);

import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const aboutArray = ['A', 'b', 'o', 'u', 't', ' ', 'M', 'e'];

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, import.meta.env.VITE_ANIMATION_DELAY_MS);
        return () => clearTimeout(timeoutId);
    }, []);
    
    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass} 
                            strArray={aboutArray} 
                            idx={15} 
                        />
                    </h1>
                    <div className='content-wrapper'>
                        <div className='text-content'>

                            <p>
                                My name is Tomer Mizrahi, and I am a highly motivated Junior Software Developer, with 
                                a B.Sc. degree in Computer Science at the &nbsp;
                                <a href="https://www.colman.ac.il" target="_blank" rel="noopener noreferrer">
                                    College of Management Academic Studies
                                </a>
                                &nbsp;in&nbsp; 
                                <span className='inline-flag'>&nbsp;
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/1280px-Flag_of_Israel.svg.png" alt="Israel Flag" />
                                </span>
                                <br />
                            </p>
                            <p>
                                In my studies, I majored in Full-Stack Development. Throughout my academic and professional journey, I have cultivated expertise in 
                                Python, JavaScript, TypeScript, React, and Node.js, with a strong foundation in backend 
                                frameworks such as NestJS, Docker, and cloud technologies like AWS. My experience 
                                extends to automating workflows, building robust CI/CD pipelines, and creating scalable 
                                applications. 
                            </p>
                        </div>
                    </div>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faHtml5} color='#e34c26' />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#61DBFB" />
                        </div>
                        <div className="face5">
                            <img  src={Typescript_logo} color="#007ACC" alt='Typescript'/>
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#f1502f" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" active={true} />
        </>
    );
};

export default About;