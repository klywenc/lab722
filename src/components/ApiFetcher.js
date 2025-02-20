import React, { useEffect, useState } from 'react';

const ApiFetcher = () => {
    const [dane, ustawDane] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => ustawDane(json));
    }, []);

    return (
        <div>
            <h3>Pobrane dane</h3>
            <ul>
                {dane.slice(0, 5).map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default ApiFetcher;
