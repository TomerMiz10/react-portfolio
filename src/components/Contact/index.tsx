import './index.scss';
import Loader from 'react-loaders';

const Contact = () => {
    return (
        <>
            <div className='container contact-page'>
                <h1>Contact</h1>
            </div>
            <Loader type="pacman" active={true} />
        </>
    );
}

export default Contact;