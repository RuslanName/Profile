import Profile from './components/Profile.jsx';
import { useState } from 'react';

function App() {
    const [isDark, setIsDark] = useState(true);

    return (
        <div className={`app-container ${isDark ? 'dark' : 'light'}`}>
            <Profile isDark={isDark} onThemeChange={setIsDark} />
        </div>
    );
}

export default App;
