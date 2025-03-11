import React from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import ThemeToggle from "./ThemeToggle";
import './App.css';

function App() {
  const MainContent = () => {
    const { isDark } = useTheme();
    
    const themeStyle = {
      backgroundColor: isDark ? '#333' : '#fff',
      color: isDark ? '#fff' : '#333',
      minHeight: '100vh',
      padding: '20px'
    };
    
    return (
      <div style={themeStyle}>
        <ThemeToggle />
        <h1>My App</h1>
        <p>This is a simple theme toggle example.</p>
      </div>
    );
  };

  return (
    <ThemeProvider>
      <div className="App">
        <MainContent />
      </div>
    </ThemeProvider>
  );
}

export default App;