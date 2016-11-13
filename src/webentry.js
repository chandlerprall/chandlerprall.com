/* global location document */

import React from 'react';
import ReactDOM from 'react-dom';
import * as app from './index';

app.router.route(
	'get',
	location.href,
	{
		callback: ({template, error, pageData}) => {
			ReactDOM.render(
				React.createElement(
					app.BasePage,
					{
						error,
						PageComponent: template,
						pageData
					}
				),
				document
			);
		}
	}
);