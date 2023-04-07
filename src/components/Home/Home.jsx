import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const TShirts=useLoaderData();
    return (
        <div>
            <h1>Home :{TShirts.length}</h1>
        </div>
    );
};

export default Home;