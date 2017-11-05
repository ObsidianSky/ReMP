import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { configureStore } from './configureStore';

if (process.env.BROWSER) {
    require('reset-css/reset.css');
	require('./assets/styles/common.scss');
}

import App from './App'
import { BrowserRouter as Router } from 'react-router-dom';

const renderToRoot = Component => {
    render(
        <AppContainer>
            <Provider store={configureStore()}>
                <Router>
                    <Component/>
                </Router>
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    );
};

renderToRoot(App);

if (module.hot) module.hot.accept('./App', () => renderToRoot(require('./App').default));