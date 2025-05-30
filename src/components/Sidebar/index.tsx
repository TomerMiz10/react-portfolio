import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoT from '@assets/images/logo-and-sub2.png';
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
    faBriefcase,
    faCog,
  } from '@fortawesome/free-solid-svg-icons'
import { applicationRoutes } from '../../utils/constants';
import { useContext } from 'react';
import { ThemeModeContext } from '@context/ThemeModeContext';

const Sidebar = () => {
    const themeContext = useContext(ThemeModeContext);
    if (!themeContext) {
        throw new Error('ThemeModeContext not found');
    }
    const { isDarkMode, setIsDarkMode } = themeContext;

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
                    className="home-link"
                    to='/' >
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
                </NavLink>
                <NavLink 
                    end 
                    className="about-link"
                    to={applicationRoutes.about}>
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
                </NavLink>
                <NavLink 
                    end 
                    className="skills-link"
                    to={applicationRoutes.skills}>
                    <FontAwesomeIcon icon={faCog} color='#4d4d4e'/>
                </NavLink>
                <NavLink 
                    end 
                    className="projects-link"
                    to={applicationRoutes.projects}>
                    <FontAwesomeIcon icon={faProjectDiagram} color='#4d4d4e'/>
                </NavLink>
                <NavLink 
                    end 
                    className="experience-link"
                    to={applicationRoutes.experience}>
                    <FontAwesomeIcon icon={faBriefcase} color='#4d4d4e'/>
                </NavLink>
                <NavLink 
                    end 
                    className="contact-link"
                    to={applicationRoutes.contact}>
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
                </NavLink>
            </nav>
            <ul>
                <li>
                    <div
                        className={`theme-toggle-switch-vertical${isDarkMode ? ' dark' : ' light'}`}
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        role="button"
                        tabIndex={0}
                        aria-label="Toggle color mode"
                        onKeyPress={e => {
                            if (e.key === 'Enter' || e.key === ' ') setIsDarkMode(!isDarkMode);
                        }}
                    >
                        <div className="toggle-bg-vertical">
                            <div className="toggle-stars-vertical"></div>
                            <div className="toggle-clouds-vertical"></div>
                            <div className="toggle-sun-vertical"></div>
                            <div className="toggle-moon-vertical"></div>
                        </div>
                        <div className="toggle-knob-vertical">
                            {isDarkMode ? (
                                <span className="toggle-icon-vertical" role="img" aria-label="Moon">🌙</span>
                            ) : (
                                <span className="toggle-icon-vertical" role="img" aria-label="Sun">☀️</span>
                            )}
                        </div>
                    </div>
                </li>
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