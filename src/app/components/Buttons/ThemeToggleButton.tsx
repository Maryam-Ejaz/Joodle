import React from 'react';
import { useTheme } from '../Theme/ThemeProvider'; // Adjust the import path as necessary
import './ThemeToggleButton.css'; // Assuming you will include the CSS styles here

const ThemeToggleButton: React.FC = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <div className={`theme-toggle-container ${isDarkMode ? 'dark' : 'light'}`}>
            <div className={`theme-toggle-border ${isDarkMode ? 'dark' : 'light'}`}>
                <div
                    className={`theme-toggle-button ${isDarkMode ? 'dark' : 'light'}`}
                    onClick={toggleTheme}
                />
            </div>
        </div>
    );
};

export default ThemeToggleButton;
