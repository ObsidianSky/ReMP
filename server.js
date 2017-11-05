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

// app.use(express.static(__dirname + '/build'));

// app.get('/', function(req, res) {
//     res.sendFile(__dirname + '/build/index.html')
// });

app.use(handleRender);

function handleRender(req, res) {
    const store = configureStore();

    const branch = matchRoutes(routes, req.path);
    console.log(branch);
    const stateToResolve = branch.map(({ route, match}) => {
        return route.component.prepareState(store, req.query);
    });

    return Promise.all(stateToResolve).then(() => {
        const html = renderToString(
            <Provider store={store}>
                <Router location={req.url}>
                    <App />
                </Router>
            </Provider>
        );

        const preloadedState = store.getState();

        // Send the rendered page back to the client
        res.json(preloadedState)
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
            <link href="style.css" rel="stylesheet">
        </head>
        <body>
            <div id="root">${html}</div>
            <script>
                window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
            </script>
            <script type="text/javascript" src="common.js"></script>
            <script type="text/javascript" src="index.bundle.js"></script>
        </body>
        </html>
    `
}

app.listen(port);