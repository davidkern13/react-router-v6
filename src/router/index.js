import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import HomeContainer from '../containers/HomeContainer';
import ArticlesContainer from '../containers/ArticlesContainer';
import ArticleContainer from '../containers/ArticleContainer';

function RouterContainer({Navigation}) {
    return (
        <>
            <Router>
                <Navigation />
                <Routes>
                    <Route path={'/'} element={<HomeContainer/>}/>
                    <Route path={'/articles'} element={<ArticlesContainer/>}>
                        <Route path={':id'} element={<ArticleContainer/>}/>
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default RouterContainer;
