import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import { configureStore } from './configureStore';

import 'reset-css/reset.css';
import './assets/styles/common.scss'

import App from './App'

const renderToRoot = Component => {
    render(
        <AppContainer>
            <Provider store={configureStore()}>
                <Component/>
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    );
};

renderToRoot(App);

if (module.hot) module.hot.accept('./App', () => renderToRoot(require('./App').default));