import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Loader from 'react-loaders';
import { useContactForm } from './useContactForm';
import FormField from './FormField';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const contactArray = ['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e'];
    const { formRef, formStatus, handleSubmit, resetForm } = useContactForm();
    
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, import.meta.env.VITE_ANIMATION_DELAY_MS);
        
        return () => clearTimeout(timeoutId);
    }, []);

    const renderForm = () => (
        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <FormField 
                type="text"
                name="user_name"
                placeholder="Your Name" 
                disabled={formStatus.submitting}
            />
            <FormField 
                type="email"
                name="user_email"
                placeholder="Your Email Address" 
                disabled={formStatus.submitting}
            />
            <FormField 
                type="text"
                name="subject"
                placeholder="Subject" 
                disabled={formStatus.submitting}
            />
            <FormField 
                type="textarea"
                name="message"
                placeholder="Your Message"
                disabled={formStatus.submitting}
            />
            
            <div className="button-container">
                <button 
                    type="submit" 
                    className="sendBtn"
                    disabled={formStatus.submitting}
                    aria-busy={formStatus.submitting}
                >
                    {formStatus.submitting ? 'Sending...' : 'Send Message'}
                </button>
            </div>
            
            {formStatus.error && (
                <p className="error-message" role="alert">{formStatus.message}</p>
            )}
        </form>
    );

    const renderSuccessMessage = () => (
        <div className="success-message" role="status">
            <p>{formStatus.message}</p>
            <button 
                onClick={resetForm}
                className="sendBtn">
                Send Another Message
            </button>
        </div>
    );

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
                        {formStatus.submitted ? renderSuccessMessage() : renderForm()}
                    </section>
                </div>
            </div>
            <Loader type="pacman" active={true} />
        </>
    );
};

export default Contact;