import './index.scss';
import Loader from 'react-loaders';

const Skills = () => {


    return (
        <>
            <div className='container skills-page'>
                <h1>Skills</h1>
            </div>  
            <Loader type="pacman" active={true} />
        </>
    );
};

export default Skills;