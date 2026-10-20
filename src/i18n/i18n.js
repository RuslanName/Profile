import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import ru from './ru.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            ru: { translation: ru },
        },
        lng: new URLSearchParams(window.location.search).get('lang') || 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

document.documentElement.lang = i18n.resolvedLanguage || 'en';
i18n.on('languageChanged', language => {
    document.documentElement.lang = language;
});

export default i18n;
