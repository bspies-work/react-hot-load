import React from 'react';
import { Route, IndexRoute } from 'react-router';
// pages
import Main from './components/Main';
import HomePage from './pages/HomePage';

export default (
    <Route component={Main} path="/">
        <IndexRoute component={HomePage}/>
    </Route>
);