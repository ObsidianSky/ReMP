import { createStore, applyMiddleware } from 'redux';
import rootReducer from './root.reducer';
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

function getMiddleware() {
    let middleware = [
        thunk
    ];

    if (process.env.DEV) {
        return composeWithDevTools(
            applyMiddleware.apply(null, middleware)
        )
    }

    return applyMiddleware.apply(null, middleware);
}

export const configureStore = initialState => {
    const store = createStore(
        rootReducer,
        initialState,
        getMiddleware()
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers/index');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
};

