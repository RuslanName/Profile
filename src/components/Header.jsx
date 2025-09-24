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

    const handleTouchStart = (e) => {
        e.currentTarget.classList.add('glowing');
    };

    const handleTouchEnd = (e) => {
        e.currentTarget.classList.remove('glowing');
    };

    return (
        <header className={`nav-header shadow-md rounded-t-2xl ${isDark ? 'dark' : 'light'}`}>
            {!isMobile && (
                <nav className="nav-links">
                    <a href="#about" className={isDark ? 'dark' : 'light'} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                        {t('about')}
                    </a>
                    <span>|</span>
                    <a href="#skills" className={isDark ? 'dark' : 'light'} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                        {t('skills')}
                    </a>
                    <span>|</span>
                    <a href="#projects" className={isDark ? 'dark' : 'light'} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                        {t('projects')}
                    </a>
                    <span>|</span>
                    <a href="#technologies" className={isDark ? 'dark' : 'light'} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                        {t('technologies')}
                    </a>
                    <span>|</span>
                    <a href="#contact" className={isDark ? 'dark' : 'light'} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                        {t('contact')}
                    </a>
                </nav>
            )}
            <div className="language-controls">
                <button
                    onClick={toggleTheme}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    onTouchCancel={handleTouchEnd}
                    className={isDark ? 'dark' : 'light'}
                >
                    {isDark ? <LightMode /> : <DarkMode />}
                </button>
                <button
                    onClick={() => changeLanguage('ru')}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    onTouchCancel={handleTouchEnd}
                    className={i18n.language === 'ru' ? 'active' : isDark ? 'dark' : 'light'}
                >
                    RU
                </button>
                <span>|</span>
                <button
                    onClick={() => changeLanguage('en')}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    onTouchCancel={handleTouchEnd}
                    className={i18n.language === 'en' ? 'active' : isDark ? 'dark' : 'light'}
                >
                    EN
                </button>
            </div>
        </header>
    );
}

export default Header;