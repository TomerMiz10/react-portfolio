import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoT from '../../assets/logo/logo-and-sub2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLinkedin,
    faGithub,
  } from '@fortawesome/free-brands-svg-icons'
  import {
    faHome,
    faUser,
    faEnvelope,
    faProjectDiagram,
    faCog,
  } from '@fortawesome/free-solid-svg-icons'
import { applicationRoutes } from '../../utils/constants';

const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link 
                className='logo' 
                to='/'>
                <img className='logo' src={LogoT} alt='Logo'/>
            </Link>

            <nav>
                <NavLink 
                    end 
                    className={({ isActive }) => isActive ? "active" : ""}
                    to='/' >
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
                </NavLink>
                <NavLink 
                    end 
                    className={({ isActive }) => isActive ? "about-link" : ""} 
                    to={applicationRoutes.ABOUT}>
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
                </NavLink>
                <NavLink 
                    end 
                    className={({ isActive }) => isActive ? "skills-link" : ""}
                    to={applicationRoutes.SKILLS}>
                    <FontAwesomeIcon icon={faCog} color='#4d4d4e'/>
                </NavLink>
                <NavLink 
                    end 
                    className={({ isActive }) => isActive ? "projects-link" : ""}
                    to={applicationRoutes.PROJECTS}>
                    <FontAwesomeIcon icon={faProjectDiagram} color='#4d4d4e'/>
                </NavLink>
                <NavLink 
                    end 
                    className={({ isActive }) => isActive ? "contact-link" : ""}
                    to={applicationRoutes.CONTACT}>
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a
                        href="https://www.linkedin.com/in/tomer-mizrahi-389aaa246/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            color="#4d4d4e"
                            className="anchor-icon"
                        />
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/TomerMiz10"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon
                        icon={faGithub}
                        color="#4d4d4e"
                        className="anchor-icon"
                        />
                    </a>
                </li>
            </ul>
        </div>
    )
};

export default Sidebar;