import { createStore, applyMiddleware } from 'redux';
import rootReducer from './root.reducer';
import thunk from 'redux-thunk';
import { createHooksMiddleware } from './middlewares/hooks.middleware';

import hooks from './middlewares/hooksConfig';

//TODO remove from prod build
import { composeWithDevTools } from 'redux-devtools-extension';

export const configureStore = initialState => {
    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(
                thunk,
                createHooksMiddleware(hooks)
            )
        )
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

