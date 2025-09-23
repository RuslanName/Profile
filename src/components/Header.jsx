import { useTranslation } from 'react-i18next';
import { LightMode, DarkMode } from '@mui/icons-material';
import { useState, useEffect } from 'react';

function Header({ isDark, toggleTheme, changeLanguage }) {
    const { t, i18n } = useTranslation();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getTranslationKey = (key) => isMobile ? `${key}Short` : key;

    return (
        <header className={`nav-header shadow-md rounded-t-2xl backdrop-blur-sm ${isDark ? 'bg-gray-900/90 text-white' : 'bg-white/90 text-gray-800'}`}>
            <nav className="nav-links">
                <a href="#about" className={isDark ? 'text-gray-300 hover:text-blue-500' : 'text-gray-700 hover:text-blue-500'}>
                    {t(getTranslationKey('about'))}
                </a>
                <span className={`self-center text-xl ${isDark ? 'text-gray-400' : 'text-gray-400'}`}>|</span>
                <a href="#skills" className={isDark ? 'text-gray-300 hover:text-blue-500' : 'text-gray-700 hover:text-blue-500'}>
                    {t(getTranslationKey('skills'))}
                </a>
                <span className={`self-center text-xl ${isDark ? 'text-gray-400' : 'text-gray-400'}`}>|</span>
                <a href="#projects" className={isDark ? 'text-gray-300 hover:text-blue-500' : 'text-gray-700 hover:text-blue-500'}>
                    {t(getTranslationKey('projects'))}
                </a>
                <span className={`self-center text-xl ${isDark ? 'text-gray-400' : 'text-gray-400'}`}>|</span>
                <a href="#technologies" className={isDark ? 'text-gray-300 hover:text-blue-500' : 'text-gray-700 hover:text-blue-500'}>
                    {t(getTranslationKey('technologies'))}
                </a>
                <span className={`self-center text-xl ${isDark ? 'text-gray-400' : 'text-gray-400'}`}>|</span>
                <a href="#contact" className={isDark ? 'text-gray-300 hover:text-blue-500' : 'text-gray-700 hover:text-blue-500'}>
                    {t(getTranslationKey('contact'))}
                </a>
            </nav>
            <div className="flex items-center space-x-3">
                <button
                    onClick={toggleTheme}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${isDark ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                >
                    {isDark ? <LightMode /> : <DarkMode />}
                </button>
                <div className="flex space-x-2">
                    <button
                        onClick={() => changeLanguage('ru')}
                        className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 text-sm ${i18n.language === 'ru' ? 'bg-blue-600 text-white shadow-lg' : `${isDark ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-blue-100'}`}`}
                    >
                        RU
                    </button>
                    <span className={`self-center text-xl ${isDark ? 'text-gray-400' : 'text-gray-400'}`}>|</span>
                    <button
                        onClick={() => changeLanguage('en')}
                        className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 text-sm ${i18n.language === 'en' ? 'bg-blue-600 text-white shadow-lg' : `${isDark ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-blue-100'}`}`}
                    >
                        EN
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;