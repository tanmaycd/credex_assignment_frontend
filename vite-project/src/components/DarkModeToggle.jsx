import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    // Initialize based on system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed top-4 right-4 z-50 p-3 rounded-full shadow-md transition bg-black text-white dark:bg-yellow-300 dark:text-black"
    >
      {isDark ? '🌞 Light Mode' : '🌙 Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
