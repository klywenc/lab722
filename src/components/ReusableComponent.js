import React from 'react';

const ReusableComponent = ({ label, color }) => {
    return (
        <button style={{ backgroundColor: color, padding: '10px', margin: '5px', color: 'white' }}>
            {label}
        </button>
    );
};

export default ReusableComponent;