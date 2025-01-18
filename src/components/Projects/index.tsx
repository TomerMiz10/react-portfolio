import './index.scss';
import Loader from 'react-loaders';

const Projects = () => {
    return (
        <>
            <div className='container projects-page'>
                <h1>Projects</h1>
            </div>
            <Loader type="pacman" active={true} />
        </>
    );
}

export default Projects;