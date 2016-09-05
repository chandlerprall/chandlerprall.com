import React, {Component, PropTypes} from 'react';
import BaseHeader from './BaseHeader';
import router from '../routes/router';

const INTERNAL_URL_REGEXP = /^[a-z]+:\/\//;
function isInternalUrl(url) {
	return !url.match(INTERNAL_URL_REGEXP);
}

export default class BasePage extends Component {
	constructor(...args) {
		super(...args);
		const [props] = args;

		this.state = {
			PageComponent: props.PageComponent,
			error: props.error
		};

		if (typeof window !== 'undefined') {
			window.addEventListener('popstate', this.handlePopState.bind(this)); // eslint-disable-line no-undef
			window.history.replaceState(null, null, window.location.href); // eslint-disable-line no-undef
		}
	}

	handleLinkClick(e) {
		if (e.target.nodeName === 'A') {
			const target = e.target.getAttribute('target');
			if (target != null) return;

			const href = e.target.getAttribute('href');
			if (isInternalUrl(href)) {
				this.navigateToUrl(href);
				e.preventDefault();
				e.stopPropagation();
				return false;
			}
		}
	}

	handlePopState() {
		this.loadPageForUrl(location.href); // eslint-disable-line no-undef
	}

	navigateToUrl(url) {
		window.history.pushState(null, null, url); // eslint-disable-line no-undef
		this.loadPageForUrl(url);
	}

	loadPageForUrl(url) {
		router.route(
			'get',
			url,
			{
				callback: ({template, error}) => {
					this.setState({PageComponent: template, error});
				}
			}
		);
	}

	render() {
		const {PageComponent, error} = this.state;

		return (
			<html>
				<head>
					<title>Thoughts and Experiments for the Web | Chandler Prall</title>
					<link rel="stylesheet" type="text/css" href="/static/app.css"/>
				</head>
				<body onClick={(e) => this.handleLinkClick(e)}>
					<BaseHeader/>
					<PageComponent display-if={PageComponent}/>
					<div display-if={error}>{error}</div>
					<script type="text/javascript" src="/static/app.js"/>
				</body>
			</html>
		);
	}
}

BasePage.propTypes = {
	PageComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
	error: PropTypes.node
};