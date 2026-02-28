import { useEffect, useState } from 'react';

function ThemeToggle() {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                return savedTheme;
            }
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
                return 'light';
            }
        }
        return 'dark';
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <button
            onClick={() => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))}
            className="theme-toggle-btn"
            aria-label={`切換至${theme === 'light' ? '深色' : '淺色'}主題`}
            title={`切換至${theme === 'light' ? '深色' : '淺色'}主題`}
        >
            {theme === 'light' ? '🌙' : '☀️'}
        </button>
    );
}

export default ThemeToggle;
