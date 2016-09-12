/* global require, __dirname */
const app = require('../dist/node/app');
const express = require('express');
const React = require('react');
const ReactDOM = require('react-dom/server');
const server = express();

server.use('/static', express.static(`${__dirname}/../dist/web`));
server.use('/static', express.static(`${__dirname}/static`));

server.use((req, res, next) => {
    app.router.route(
        req.method,
        req.url,
        {
            callback: ({template, error, pageData}) => {
                res.send(ReactDOM.renderToString(
                    React.createElement(
                        app.BasePage,
                        {
                            error,
                            PageComponent: template,
							pageData
                        }
                    )
                ));
            }
        }
    );
    next();
});

server.listen(2000, () => {
    console.log('Server listening on port 2000'); // eslint-disable-line
});