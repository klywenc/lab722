import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('jasny'); // Domyślny motyw to jasny

    const toggleTheme = () => {
        const nowyMotyw = theme === 'jasny' ? 'ciemny' : 'jasny';
        setTheme(nowyMotyw);

        // Zmiana stylu całej strony
        document.body.style.backgroundColor = nowyMotyw === 'jasny' ? '#f4f4f9' : '#333';
        document.body.style.color = nowyMotyw === 'jasny' ? '#333' : '#f4f4f9';
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

const ThemeToggler = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div style={{
            padding: '20px',
            textAlign: 'center',
            borderRadius: '5px'
        }}>
            <h3>Aktualny motyw: {theme === 'jasny' ? 'Jasny' : 'Ciemny'}</h3>
            <button onClick={toggleTheme}>
                Zmień motyw na {theme === 'jasny' ? 'Ciemny' : 'Jasny'}
            </button>
        </div>
    );
};

export { ThemeProvider, ThemeToggler, ThemeContext };
