import Profile from './components/Profile.jsx';
import { useState } from 'react';

function App() {
    const [isDark, setIsDark] = useState(false);

    const handleThemeChange = (darkMode) => {
        setIsDark(darkMode);
    };

    return (
        <div className={`min-h-screen flex items-center justify-center p-2 transition-all duration-500 animate-gradient ${
            isDark
                ? 'bg-gradient-to-br from-[#1d4ed8] via-[#3b82f6] via-[#6d28d9] via-[#a855f7] to-[#1d4ed8]'
                : 'bg-gradient-to-br from-[#38bdf8] via-[#60a5fa] via-[#a78bfa] via-[#f0abfc] to-[#38bdf8]'
        }`}>
            <Profile onThemeChange={handleThemeChange} />
        </div>
    );
}

export default App;