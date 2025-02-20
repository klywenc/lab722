import React from 'react';
import './App.css';
import ReusableComponent from './components/ReusableComponent';
import Counter from './components/Counter';
import ToDoApp from './components/ToDoApp';
import ApiFetcher from './components/ApiFetcher';
import { ThemeProvider, ThemeToggler, ThemeContext } from './components/ThemeContext';
import TextInputFocus from './components/TextInputFocus';

const AppContent = () => {
    const { theme } = React.useContext(ThemeContext);

    return (
        <div
            className="container"
            style={{
                backgroundColor: theme === 'jasny' ? '#ffffff' : '#444444', // Tło kontenera
                color: theme === 'jasny' ? '#333333' : '#f4f4f9', // Kolor tekstu
            }}
        >
            <h1>LAB 7 - React (Po polsku)</h1>

            <h2>Przełącznik motywu</h2>
            <ThemeToggler />

            <h2>Komponent wielokrotnego użytku</h2>
            <ReusableComponent etykieta="Kliknij mnie" kolor="blue" />

            <h2>Przykład useState</h2>
            <Counter />

            <h2>Przykład useReducer</h2>
            <ToDoApp />

            <h2>Przykład useEffect</h2>
            <ApiFetcher />

            <h2>Przykład useRef</h2>
            <TextInputFocus />
        </div>
    );
};

const App = () => {
    return (
        <ThemeProvider>
            <AppContent />
        </ThemeProvider>
    );
};

export default App;
