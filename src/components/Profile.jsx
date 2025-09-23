import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Header from './Header';

import profileImg from '../assets/profile.png';

import gitIcon from '../assets/icons/git.png';
import jsIcon from '../assets/icons/js.png';
import tsIcon from '../assets/icons/ts.png';
import javaIcon from '../assets/icons/java.png';
import htmlIcon from '../assets/icons/html.png';
import cssIcon from '../assets/icons/css.png';
import nodeIcon from '../assets/icons/node.png';
import springIcon from '../assets/icons/spring.png';
import nestIcon from '../assets/icons/nest.png';
import reactIcon from '../assets/icons/react.png';
import nextIcon from '../assets/icons/next.png';
import scssIconDark from '../assets/icons/scss.png';
import tailwindIcon from '../assets/icons/tailwind.png';
import webpackIcon from '../assets/icons/webpack.png';
import viteIcon from '../assets/icons/vite.png';
import kafkaIcon from '../assets/icons/kafka.png';
import rabbitIcon from '../assets/icons/rabbitmq.png';
import postgresIcon from '../assets/icons/postgres.png';
import mongodbIcon from '../assets/icons/mongodb.png';
import redisIcon from '../assets/icons/redis.png';
import elasticsearch from '../assets/icons/elasticsearch.png';
import dockerIcon from '../assets/icons/docker.png';
import composeIcon from '../assets/icons/compose.png';
import figmaIcon from '../assets/icons/figma.png';

import kafkaIconDark from '../assets/icons/kafka-dark.png';
import nextIconDark from '../assets/icons/next-dark.png';
import githubIconDark from '../assets/icons/github-dark.png';
import upworkIconDark from '../assets/icons/upwork-dark.png';

import telegramIcon from '../assets/icons/telegram.png';
import githubIcon from '../assets/icons/github.png';
import fiverrIcon from '../assets/icons/fiverr.png';
import upworkIcon from '../assets/icons/upwork.png';
import kworkIcon from '../assets/icons/kwork.png';

function Profile({ onThemeChange }) {
    const { t, i18n } = useTranslation();
    const [isDark, setIsDark] = useState(false);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const toggleTheme = () => {
        setIsDark(!isDark);
        onThemeChange(!isDark);
    };

    const techIcons = [
        { src: gitIcon, alt: 'Git' },
        { src: jsIcon, alt: 'JavaScript' },
        { src: tsIcon, alt: 'TypeScript' },
        { src: javaIcon, alt: 'Java' },
        { src: htmlIcon, alt: 'HTML' },
        { src: cssIcon, alt: 'CSS' },
        { src: nodeIcon, alt: 'Node.js' },
        { src: springIcon, alt: 'Spring' },
        { src: nestIcon, alt: 'Nest.js' },
        { src: reactIcon, alt: 'React' },
        { src: isDark ? nextIconDark : nextIcon, alt: 'Next.js' },
        { src: scssIconDark, alt: 'SCSS' },
        { src: tailwindIcon, alt: 'Tailwind CSS' },
        { src: webpackIcon, alt: 'Webpack' },
        { src: viteIcon, alt: 'Vite' },
        { src: isDark ? kafkaIconDark : kafkaIcon, alt: 'Kafka' },
        { src: rabbitIcon, alt: 'RabbitMQ' },
        { src: postgresIcon, alt: 'PostgreSQL' },
        { src: mongodbIcon, alt: 'MongoDB' },
        { src: redisIcon, alt: 'Redis' },
        { src: elasticsearch, alt: 'Elasticsearch' },
        { src: dockerIcon, alt: 'Docker' },
        { src: composeIcon, alt: 'Docker сompose' },
        { src: figmaIcon, alt: 'Figma' }
    ];

    const contactIcons = [
        { src: telegramIcon, alt: 'Telegram', href: 'https://t.me/MrHumansuit' },
        { src: isDark ? githubIconDark : githubIcon, alt: 'Github', href: 'https://github.com/RuslanName' },
        { src: fiverrIcon, alt: 'Fiverr', href: 'https://www.fiverr.com/ruslankuzmin' },
        { src: isDark ? upworkIconDark : upworkIcon, alt: 'Upwork', href: 'https://www.upwork.com/freelancers/~01a5b24e89f9b20644' },
        { src: kworkIcon, alt: 'Kwork', href: 'https://kwork.ru/user/ruslankuzmin' }
    ];

    return (
        <div className="w-full">
            <Header isDark={isDark} toggleTheme={toggleTheme} changeLanguage={changeLanguage} />
            <div className={`profile-container shadow-xl rounded-b-2xl flex flex-col md:flex-row animate-fadeIn transition-all duration-300 ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
                <div className="w-full md:w-1/2 p-8 flex justify-center items-start relative profile-image">
                    <div className={`sticky-profile rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 ${isDark ? 'dark' : 'light'}`}>
                        <img
                            src={profileImg}
                            alt="Profile"
                            className={`w-full h-full rounded-lg object-cover shadow-2xl ${isDark ? 'animate-glow-dark' : 'animate-glow-light'}`}
                        />
                    </div>
                </div>

                <div className="profile-text w-full md:w-1/2 p-8 pt-16 md:pt-8">
                    <h1 className={`text-4xl font-normal mb-3 transition-all duration-300 transform hover:scale-105 hover:text-blue-600 origin-center ${isDark ? 'text-white' : 'text-gray-800'}`}>
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
                                    className={`flex items-center space-x-2 transition-all duration-300 hover:scale-105 hover:text-blue-500 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
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
                                    className={`tech-icon ${isDark ? 'dark' : 'light'} rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
                                >
                                    <img src={icon.src} alt={icon.alt} className="object-contain" />
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
                                    className="transition-all duration-300 hover:scale-105"
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
                                    className="contact-icon flex items-center justify-center hover:scale-110 transition-all duration-300"
                                >
                                    <img src={icon.src} alt={icon.alt} className="object-contain" />
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