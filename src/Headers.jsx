import React, { useState, useEffect } from 'react';
import './Headers.css';

function Headers () {
  const [theme, setTheme] = useState('light');

  function toggleTheme () {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.className = theme + '-theme';
  }, [theme]);

  return (
    <header>
      <a href="#" onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </a>
    </header>
  );
};

export default Headers;