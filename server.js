import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server';
import App from './src/App';

const app = express();
const port = 3000;

app.use('/build/', express.static('static'));

app.use(handleRender);

function handleRender(req, res) {
    const html = renderToString(
        <App />
    );

    res.send(renderFullPage(html, { data: 'data' }))
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