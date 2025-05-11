import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage for theme preference or fallback to system preference
    return localStorage.getItem('theme') === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark'); // Add 'dark' class to <html>
      localStorage.setItem('theme', 'dark'); // Save preference to localStorage
    } else {
      document.documentElement.classList.remove('dark'); // Remove 'dark' class from <html>
      localStorage.setItem('theme', 'light'); // Save preference to localStorage
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="dark-mode-toggle"
    >
      {isDark ? '🌞 Light Mode' : '🌙 Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;