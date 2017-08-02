import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import routes from './routes';
import RootComponent from './components/Root';

const render = (Root) => {
    ReactDOM.render(
        <AppContainer>
            <Root routes={routes}/>
        </AppContainer>, document.getElementById('app'));
}

render(RootComponent);

if (module.hot) {
    module.hot.accept(['./components/Root', './routes'], () => {
        const NextRoot = require('./components/Root');
        render(NextRoot);
    });
}