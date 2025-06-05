import './index.scss';
import LogoT from '@assets/images/capital-T.png';
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
import { useContext } from 'react';
import { ThemeModeContext } from '@context/ThemeModeContext';
import { useScrollNavigation } from '@context/hooks/useScrollNavigation';


const Sidebar = () => {
    const themeContext = useContext(ThemeModeContext);
    if (!themeContext) {
        throw new Error('ThemeModeContext not found');
    }
    const { isDarkMode, setIsDarkMode, theme } = themeContext;
    const { scrollToSection, handleHomeClick } = useScrollNavigation();


    return (
        <div
            className='nav-bar'
        >
            <a className='logo' href='#home' onClick={handleHomeClick}>
                <img className='logo' src={LogoT} alt='Logo'/>
            </a>

            <nav>
                <button
                    className="home-link"
                    onClick={handleHomeClick}
                    aria-label="Home"
                >
                    <FontAwesomeIcon icon={faHome} color={theme.textSecondary}/>
                </button>
                <button
                    className="about-link"
                    onClick={() => scrollToSection('about')}
                    aria-label="About"
                >
                    <FontAwesomeIcon icon={faUser} color={theme.textSecondary}/>
                </button>
                <button
                    className="skills-link"
                    onClick={() => scrollToSection('skills')}
                    aria-label="Skills"
                >
                    <FontAwesomeIcon icon={faCog} color={theme.textSecondary}/>
                </button>
                <button
                    className="projects-link"
                    onClick={() => scrollToSection('projects')}
                    aria-label="Projects"
                >
                    <FontAwesomeIcon icon={faProjectDiagram} color={theme.textSecondary}/>
                </button>
                <button
                    className="experience-link"
                    onClick={() => scrollToSection('experience')}
                    aria-label="Experience"
                >
                    <FontAwesomeIcon icon={faBriefcase} color={theme.textSecondary}/>
                </button>
                <button
                    className="contact-link"
                    onClick={() => scrollToSection('contact')}
                    aria-label="Contact"
                >
                    <FontAwesomeIcon icon={faEnvelope} color={theme.textSecondary}/>
                </button>
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
                            color={theme.textSecondary}
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
                        color={theme.textSecondary}
                        className="anchor-icon"
                        />
                    </a>
                </li>
            </ul>
        </div>
    )
};

export default Sidebar;