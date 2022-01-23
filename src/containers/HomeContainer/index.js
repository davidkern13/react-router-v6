import React from 'react';
import { Outlet } from 'react-router-dom';

import ArticlesContainer from '../ArticlesContainer';

function Home() {
    const first = (second) => {
        console.log("Home: ");
    };

    return (
        <>
            <h1>Home</h1>
            <ArticlesContainer />

            <Outlet />
        </>
    );
}

export default Home;
