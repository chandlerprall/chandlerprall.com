/* global require, __dirname */
const app = require('../dist/node/app');
const express = require('express');
const React = require('react');
const ReactDOM = require('react-dom/server');
const server = express();

server.use(`/static/${app.BUNDLE}/`, express.static(`${__dirname}/../dist/web`, {maxAge: 7 * 24 * 60 * 60 * 1000})); // cache for 7 days
server.use('/static/', express.static(`${__dirname}/static`, {maxAge: 1 * 60 * 60 * 1000})); // cache for 1 hour

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