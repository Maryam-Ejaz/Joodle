"use client";

import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

// Define the type for the context value
interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

// Default values for the context
const defaultContextValue: ThemeContextType = {
  isDarkMode: false,
  toggleTheme: () => {},
};

// Create a Context for the theme
const ThemeContext = createContext<ThemeContextType>(defaultContextValue);

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

// ThemeProvider component to wrap around your application
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Check localStorage to see if a theme is set
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  // Function to toggle theme
  const toggleTheme = () => {
    const newTheme = !isDarkMode ? 'dark' : 'light';
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
