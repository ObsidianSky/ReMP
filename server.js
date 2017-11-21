import express from 'express'
import fs from 'fs';
import React from 'react'
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux'
import { StaticRouter as Router } from 'react-router-dom';
import { matchRoutes } from 'react-router-config'

import App from './src/App';
import { configureStore } from './src/configureStore';
import routes from './src/routeConfig';

const app = express();
const port = 3000;

app.use(express.static(__dirname + '/build'));

app.use(handleRender);

function handleRender(req, res) {
    const store = configureStore();
    const context = {};
    const branch = matchRoutes(routes, req.path);

    const stateToResolve = branch.map(({ route, match}) => {
        return route.component.prepareState(store, match, req.query);
    });

    return Promise.all(stateToResolve).then(() => {
        fs.readFile('./build/template.html', 'utf8', (err, data) => {
            if (err) throw err;

            const html = renderToString(
                <Provider store={store}>
                    <Router location={req.url} context={context}>
                        <App />
                    </Router>
                </Provider>
            );

            const preloadedState = JSON.stringify(store.getState()).replace(/</g, '\\u003c');

            const document = data
                .replace(/<!--HTML-->/, html)
                .replace(/<!--PRELOADED_STATE_SCRIPT-->/, `<script>window.__PRELOADED_STATE__ = ${preloadedState}</script>`);

            res.send(document);
        });
    });
}

app.listen(port);