import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './index.scss';
import LogoT from '../../assets/logo/t-capital-png-no-bg.png';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo/index.tsx';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['o', 'm', 'e', 'r', ' ', 'M', 'i', 'z', 'r', 'a', 'h', 'i'];
    const jobArray = ['a',' ', 'S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r'];

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, import.meta.env.VITE_ANIMATION_DELAY_MS);
        return () => clearTimeout(timeoutId);
      }, []);

    return (
        <>
            <div className='container home-page'>
                <div className='text-zone'>
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <img className='logo' src={LogoT} alt='Software Engineer' />
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={8} />
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={nameArray.length} />

                    </h1>
                    <h2>Full Stack | Backend | Frontend Developer</h2>
                    <Link to="/contact" className="flat-button">CONTACT ME</Link>
                </div>
                <Logo />
            </div>
            {/* Pacman Loader */}
        </>
    );
}

export default Home;