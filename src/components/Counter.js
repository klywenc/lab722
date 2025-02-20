import React, { useState } from 'react';

const Counter = () => {
    const [licznik, ustawLicznik] = useState(0);

    return (
        <div>
            <h3>Licznik: {licznik}</h3>
            <button onClick={() => ustawLicznik(licznik + 1)}>Zwiększ</button>
            <button onClick={() => ustawLicznik(licznik - 1)}>Zmniejsz</button>
        </div>
    );
};

export default Counter;
