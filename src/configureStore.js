import { createStore } from 'redux';
import rootReducer from './root.reducer';
//TODO remove from prod build
import { composeWithDevTools } from 'redux-devtools-extension';

export const configureStore = initialState => {
    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools()
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

