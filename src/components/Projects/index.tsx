import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Loader from 'react-loaders';
import { projectsData } from './projectsDataConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const projectsArray = ['P', 'r', 'o', 'j', 'e', 'c', 't', 's'];

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <>
            <div className='container projects-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass} 
                            strArray={projectsArray} 
                            idx={8} 
                        />
                    </h1>

                    <div className='projects-container'>
                        {projectsData.map((project) => (
                            <div key={project.id} className='project-card'>
                                <div className='project-header'>
                                    <div className="project-image">
                                        <img src={project.projectImage} alt={project.projectName} />
                                    </div>
                                    <h2>{project.projectName}</h2>
                                </div>
                                <div className="tech-stack">
                                    {project.projectTechnologies.map((tech, index) => (
                                        <span key={index} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                                <div className="project-description">
                                    <p>{project.projectDescription}</p>
                                </div>
                                <div className="project-links">
                                    {project.projectLinks.github && (
                                        <a href={project.projectLinks.github} target="_blank" rel="noreferrer">
                                            <FontAwesomeIcon icon={faGithub} />
                                        </a>
                                    )}
                                    {project.projectLinks.demoVideo && (
                                        <a href={project.projectLinks.demoVideo} target="_blank" rel="noreferrer">
                                            <FontAwesomeIcon icon={faVideo} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Loader type="pacman" active={true} />
        </>
    );
}

export default Projects;