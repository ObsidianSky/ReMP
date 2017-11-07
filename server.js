import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux'
import { StaticRouter as Router } from 'react-router-dom';
import { matchRoutes } from 'react-router-config'
import routes from './src/routeConfig';

import App from './src/App';
import { configureStore } from './src/configureStore';

const app = express();
const port = 3000;

app.use(express.static(__dirname + '/build'));

app.get('*', handleRender);

function handleRender(req, res) {
    const store = configureStore();
    const context = {};
    const branch = matchRoutes(routes, req.path);

    const stateToResolve = branch.map(({ route, match}) => {
        return route.component.prepareState(store, match, req.query);
    });

    return Promise.all(stateToResolve).then(() => {
        const html = renderToString(
            <Provider store={store}>
                <Router location={req.url} context={context}>
                    <App />
                </Router>
            </Provider>
        );

        res.send(renderFullPage(html, store.getState()));
    });
}

function renderFullPage(html, preloadedState) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8">
            <title>Netflix Search App</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link href="/style.css" rel="stylesheet">
        </head>
        <body>
            <div id="root">${html}</div>
            <script>
                window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
            </script>
            <script type="text/javascript" src="/common.js"></script>
            <script type="text/javascript" src="/index.bundle.js"></script>
        </body>
        </html>
    `
}

app.listen(port);