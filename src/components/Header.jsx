import { useTranslation } from 'react-i18next';
import LightMode from '@mui/icons-material/LightMode';
import DarkMode from '@mui/icons-material/DarkMode';

function Header({ isDark, toggleTheme, changeLanguage }) {
    const { t, i18n } = useTranslation();

    return (
        <header className="nav-header">
            <div className="nav-inner site-shell">
                <a className="wordmark" href="#about" aria-label={t('homeLabel')}>
                    RuslanName
                </a>
                <nav className="nav-links" aria-label={t('navigationLabel')}>
                    <a href="#about">{t('about')}</a>
                    <a href="#technologies">{t('technologies')}</a>
                    <a href="#contact">{t('contact')}</a>
                </nav>
                <div className="header-controls">
                    <div className="language-controls" role="group" aria-label={t('languageLabel')}>
                        {['ru', 'en'].map(language => (
                            <button
                                key={language}
                                type="button"
                                aria-pressed={i18n.resolvedLanguage === language}
                                aria-label={language === 'ru' ? 'Русский' : 'English'}
                                onClick={() => changeLanguage(language)}
                            >
                                {language.toUpperCase()}
                            </button>
                        ))}
                    </div>
                    <button
                        type="button"
                        className="theme-toggle"
                        onClick={toggleTheme}
                        aria-label={t(isDark ? 'switchToLight' : 'switchToDark')}
                        title={t(isDark ? 'switchToLight' : 'switchToDark')}
                    >
                        {isDark ? <LightMode fontSize="small" /> : <DarkMode fontSize="small" />}
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
