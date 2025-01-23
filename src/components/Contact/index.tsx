import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Loader from 'react-loaders';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const contactArray = ['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e'];
    
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass} 
                            strArray={contactArray} 
                            idx={9} 
                        />
                    </h1>

                    <section className="contact-container">
                        <form action="" className="contact-form">
                            <div className="input-box">
                                <label>Full Name</label>
                                <input 
                                    required 
                                    type="text" 
                                    className="input-field" 
                                    placeholder='Enter your name' 
                                />
                            </div>
                            <div className="input-box">
                                <label>Email Address</label>
                                <input 
                                    required 
                                    type="text" 
                                    className="input-field" 
                                    placeholder='Enter your email' 
                                />
                            </div>
                            <div className="input-box">
                                <label>Your Message</label>
                                <textarea 
                                    required 
                                    name="" 
                                    id="" 
                                    className="input-field-message"
                                    placeholder='Enter your message'
                                />
                                <button 
                                    type="submit" 
                                    className="sendBtn">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
            <Loader type="pacman" active={true} />
        </>
    );
}

export default Contact;