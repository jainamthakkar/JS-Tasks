import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>
      Switch to {isDark ? 'Light' : 'Dark'} Mode
    </button>
  );
};

export default ThemeToggle;