import { useTranslation } from 'react-i18next';
import Header from './Header';
import profileImg from '../assets/profile.png';
import { techIcons, contactIcons } from '../constants';

function Profile({ isDark, onThemeChange }) {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const toggleTheme = () => {
        onThemeChange(!isDark);
    };

    const handleTouchStart = (e) => {
        e.currentTarget.classList.add('glowing');
    };

    const handleTouchEnd = (e) => {
        e.currentTarget.classList.remove('glowing');
    };

    return (
        <div className="w-full">
            <Header isDark={isDark} toggleTheme={toggleTheme} changeLanguage={changeLanguage} />
            <div className={`profile-container shadow-xl rounded-b-2xl flex flex-col md:flex-row animate-fadeIn transition-all duration-300 ${isDark ? 'dark' : 'light'}`}>
                <div className="w-full md:w-1/2 p-8 flex justify-center items-start relative profile-image">
                    <div className={`sticky-profile rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 ${isDark ? 'dark' : 'light'}`}>
                        <img
                            src={profileImg}
                            alt="Profile"
                            className={`w-full h-full rounded-lg object-cover shadow-2xl ${isDark ? 'dark' : 'light'}`}
                        />
                    </div>
                </div>

                <div className="profile-text w-full md:w-1/2 p-8 pt-16 md:pt-8">
                    <h1 className={`title text-4xl font-normal mb-3 transition-all duration-300 ${isDark ? 'dark' : 'light'}`}>
                        {t('title')}
                    </h1>
                    <h2 className={`text-2xl font-normal mb-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        {t('name')}
                    </h2>

                    <div id="about" className="mb-8 animate-slideInLeft">
                        <h3 className={`text-xl font-normal mb-2 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                            {t('about')}
                        </h3>
                        <p className={`leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            {t('aboutText')}
                        </p>
                    </div>

                    <div id="skills" className="mb-8 animate-slideInLeft">
                        <h3 className={`text-xl font-normal mb-2 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                            {t('skills')}
                        </h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {t('skillsList', { returnObjects: true }).map((skill, index) => (
                                <li
                                    key={index}
                                    className={`flex items-center space-x-2 transition-all duration-300 hover:scale-105 glowing ${isDark ? 'dark text-gray-400' : 'light text-gray-600'}`}
                                    onTouchStart={handleTouchStart}
                                    onTouchEnd={handleTouchEnd}
                                >
                                    <span className="text-blue-500">•</span>
                                    <span>{skill}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div id="technologies" className="mb-8 animate-slideInLeft">
                        <h3 className={`text-xl font-normal mb-3 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                            {t('technologies')}
                        </h3>
                        <div className="icons-grid">
                            {techIcons.map((icon, index) => (
                                <div
                                    key={index}
                                    className={`tech-icon ${isDark ? 'dark' : 'light'} rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300`}
                                    onTouchStart={handleTouchStart}
                                    onTouchEnd={handleTouchEnd}
                                >
                                    <img src={isDark && icon.darkSrc ? icon.darkSrc : icon.src} alt={icon.alt} className="object-contain" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div id="projects" className="mb-6 animate-slideInLeft">
                        <h3 className={`text-xl font-normal mb-2 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                            {t('projects')}
                        </h3>
                        <ul className="grid grid-cols-1 gap-4">
                            {t('projectsList', { returnObjects: true }).map((project, index) => (
                                <li
                                    key={index}
                                    className="transition-all duration-300 hover:scale-105 glowing"
                                    onTouchStart={handleTouchStart}
                                    onTouchEnd={handleTouchEnd}
                                >
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 font-normal hover:underline"
                                    >
                                        {project.title}
                                    </a>
                                    <p className={`mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {project.description}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div id="contact" className="animate-slideInLeft">
                        <h3 className={`text-xl font-normal mb-3 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                            {t('contact')}
                        </h3>
                        <div className="flex justify-evenly flex-wrap gap-2.5">
                            {contactIcons.map((icon, index) => (
                                <a
                                    key={index}
                                    href={icon.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`contact-icon ${isDark ? 'dark' : 'light'} flex items-center justify-center transition-all duration-300`}
                                    onTouchStart={handleTouchStart}
                                    onTouchEnd={handleTouchEnd}
                                >
                                    <img src={isDark && icon.darkSrc ? icon.darkSrc : icon.src} alt={icon.alt} className="object-contain" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;