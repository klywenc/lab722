import React, { useReducer } from 'react';

const reducer = (stan, akcja) => {
    switch (akcja.typ) {
        case 'dodaj':
            return [...stan, { id: Date.now(), tekst: akcja.dane }];
        case 'usuń':
            return stan.filter(zadanie => zadanie.id !== akcja.dane);
        default:
            return stan;
    }
};

const ToDoApp = () => {
    const [zadania, dispatch] = useReducer(reducer, []);
    const [input, ustawInput] = React.useState('');

    return (
        <div>
            <h3>Lista zadań</h3>
            <input
                type="text"
                value={input}
                onChange={(e) => ustawInput(e.target.value)}
                placeholder="Dodaj zadanie"
            />
            <button onClick={() => {
                dispatch({ typ: 'dodaj', dane: input });
                ustawInput('');
            }}>
                Dodaj
            </button>
            <ul>
                {zadania.map(zadanie => (
                    <li key={zadanie.id}>
                        {zadanie.tekst}
                        <button onClick={() => dispatch({ typ: 'usuń', dane: zadanie.id })}>
                            Usuń
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ToDoApp;
