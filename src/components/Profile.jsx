import { useTranslation } from 'react-i18next';
import Header from './Header';
import profileImg from '../assets/profile.png';
import { techGroups, contactIcons } from '../constants';
import { getAge } from '../utils/age.js';

function Profile({ isDark, onThemeChange }) {
    const { t, i18n } = useTranslation();
    const pressIcon = event => event.currentTarget.classList.add('is-pressed');
    const releaseIcon = event => event.currentTarget.classList.remove('is-pressed');

    return (
        <div className="profile-page">
            <a className="skip-link" href="#about">{t('skipToContent')}</a>
            <Header
                isDark={isDark}
                toggleTheme={() => onThemeChange(!isDark)}
                changeLanguage={language => i18n.changeLanguage(language)}
            />
            <main className="profile-container site-shell">
                <div className="profile-image">
                    <div className="sticky-profile">
                        <img
                            src={profileImg}
                            alt={t('portraitAlt')}
                            className="profile-portrait"
                            fetchPriority="high"
                            onTouchStart={pressIcon}
                            onTouchEnd={releaseIcon}
                            onTouchCancel={releaseIcon}
                            onTouchMove={releaseIcon}
                        />
                    </div>
                </div>
                <div className="profile-text">
                    <section id="about" className="intro" aria-labelledby="profile-name">
                        <div className="identity">
                            <h1 id="profile-name" className="title">
                                <span>{t('firstName')}</span>{' '}
                                <span>{t('lastName')}</span>
                            </h1>
                            <p className="age">{t('age', { count: getAge() })}</p>
                        </div>
                        <div className="intro-details">
                            <p className="professional-role">{t('title')}</p>
                        </div>
                        <div className="intro-description">
                            {t('introText').split('\n').map(paragraph => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                        </div>
                    </section>

                    <section id="technologies" className="technologies" aria-labelledby="technologies-heading">
                        <h2 id="technologies-heading">{t('technologies')}</h2>
                        <div id="technology-list" className="technology-list">
                            {techGroups.map(group => (
                                <div className="technology-group" key={group.id}>
                                    <h3>{t(`techCategories.${group.id}`)}</h3>
                                    <ul className="icons-grid">
                                        {group.icons.map(icon => (
                                            <li
                                                className="tech-icon"
                                                key={icon.alt}
                                                title={icon.alt}
                                                onTouchStart={pressIcon}
                                                onTouchEnd={releaseIcon}
                                                onTouchCancel={releaseIcon}
                                                onTouchMove={releaseIcon}
                                            >
                                                <img
                                                    src={isDark && icon.darkSrc ? icon.darkSrc : icon.src}
                                                    alt={icon.alt}
                                                    width="44"
                                                    height="44"
                                                    loading="lazy"
                                                />
                                                <span aria-hidden="true">{icon.alt}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section id="contact" className="contact" aria-labelledby="contact-heading">
                        <h2 id="contact-heading">{t('contact')}</h2>
                        <div className="contact-links">
                            {contactIcons.map(icon => (
                                <a
                                    key={icon.alt}
                                    href={icon.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`contact-link${icon.alt === 'Telegram' ? ' contact-link-primary' : ''}`}
                                    aria-label={icon.alt}
                                    title={icon.alt}
                                    onTouchStart={pressIcon}
                                    onTouchEnd={releaseIcon}
                                    onTouchCancel={releaseIcon}
                                    onTouchMove={releaseIcon}
                                >
                                    <img src={isDark && icon.darkSrc ? icon.darkSrc : icon.src} alt="" width="44" height="44" />
                                    <span className="contact-label">{icon.alt}</span>
                                    <span className="link-arrow-slot" aria-hidden="true">
                                        <svg className="link-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" focusable="false">
                                            <path d="M7 17 17 7M7 7h10v10" />
                                        </svg>
                                    </span>
                                </a>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default Profile;
