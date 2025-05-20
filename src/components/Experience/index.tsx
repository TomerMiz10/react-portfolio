import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Loader from 'react-loaders';

const Experience = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const contactArray = ['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e'];
    
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, import.meta.env.VITE_ANIMATION_DELAY_MS);
        return () => clearTimeout(timeoutId);
    }, []);


  return (
    <>
      <div className='container experience-page'>
        <div className="text-zone">
            <h1>
                <AnimatedLetters 
                    letterClass={letterClass} 
                    strArray={contactArray} 
                    idx={9}
                />
            </h1>

            <section className="experience-container">

            </section>
        </div>
        <div className='test'>
          <h1 className="test-header">I'm going to be the Pirate King</h1>
          <h1 className="test-header">Yeah buddy light weight</h1>
        </div>
      </div>
      <Loader type="pacman" active={true} />
    </>
  )
}

export default Experience
