import Profile from './components/Profile.jsx';
import { useState } from 'react';

function App() {
    const [isDark, setIsDark] = useState(true);

    const handleThemeChange = (darkMode) => {
        setIsDark(darkMode);
    };

    return (
        <div className={`min-h-screen flex items-center justify-center p-2 transition-all duration-500 animate-gradient app-container ${isDark ? 'dark' : 'light'}`}>
            <Profile isDark={isDark} onThemeChange={handleThemeChange} />
        </div>
    );
}

export default App;