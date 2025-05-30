import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Typescript_logo from '@assets/images/typescript-logo.png';
import './Cube.scss';

interface CubeProps {
  isDarkMode: boolean;
}

const Cube = ({ isDarkMode }: CubeProps) => (
  <div className='stage-cube-cont'>
    <div className={`cubespinner ${isDarkMode ? 'cube-dark' : 'cube-light'}`}>
      <div className='face1'>
        <FontAwesomeIcon icon={faHtml5} color='#e34c26' />
      </div>
      <div className="face2">
        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
      </div>
      <div className="face3">
        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
      </div>
      <div className="face4">
        <FontAwesomeIcon icon={faReact} color="#61DBFB" />
      </div>
      <div className="face5">
        <img src={Typescript_logo} color="#007ACC" alt='Typescript'/>
      </div>
      <div className="face6">
        <FontAwesomeIcon icon={faGitAlt} color="#f1502f" />
      </div>
    </div>
  </div>
);

export default Cube;
