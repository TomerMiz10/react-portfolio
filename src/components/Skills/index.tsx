import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Loader from 'react-loaders';

const Skills = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const skillsArray = ['S', 'k', 'i', 'l', 'l', 's'];

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
        return () => clearTimeout(timeoutId);
    }, []);


    return (
        <>
            <div className='container skills-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass} 
                            strArray={skillsArray} 
                            idx={6} 
                        />
                    </h1>
                </div>
            </div>  
            <Loader type="pacman" active={true} />
        </>
    );
};

export default Skills;