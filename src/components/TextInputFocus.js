import React, { useRef } from 'react';

const TextInputFocus = () => {
    const inputRef = useRef();

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Kliknij, aby skupić!" />
            <button onClick={() => inputRef.current.focus()}>Skup na polu</button>
        </div>
    );
};

export default TextInputFocus;
