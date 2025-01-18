import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Loader from 'react-loaders';

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
                </div>
            </div>
            <Loader type="pacman" active={true} />
        </>
    );
}

export default Projects;