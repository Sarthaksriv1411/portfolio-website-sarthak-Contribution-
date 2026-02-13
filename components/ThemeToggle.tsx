'use client';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        // Check for saved theme preference or default to dark
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        const isDarkMode = savedTheme === 'dark' || (!savedTheme && prefersDark);
        setIsDark(isDarkMode);
        
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        
        if (newTheme) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-background-light transition-all duration-300 hover:scale-110"
            aria-label="Toggle theme"
        >
            {isDark ? (
                <Sun size={22} className="text-yellow-400 hover:rotate-90 transition-transform duration-300" />
            ) : (
                <Moon size={22} className="text-slate-700 hover:-rotate-12 transition-transform duration-300" />
            )}
        </button>
    );
};

export default ThemeToggle;
