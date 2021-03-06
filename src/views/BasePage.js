import React, {Component, PropTypes} from 'react';
import BaseHeader from './BaseHeader';
import router from '../routes/router';
import {BUNDLE} from '../bundleVersion';
import {isInternalUrl, getParentAnchor} from '../utils/PathUtils';

export default class BasePage extends Component {
	constructor(...args) {
		super(...args);
		const [props] = args;

		this.state = {
			PageComponent: props.PageComponent,
			error: props.error,
			pageData: props.pageData
		};

		if (typeof window !== 'undefined') {
			window.addEventListener('popstate', this.handlePopState.bind(this)); // eslint-disable-line no-undef
			window.history.replaceState(null, null, window.location.href); // eslint-disable-line no-undef
		}
	}

	componentDidMount() {
		(function(i, s, o, g, r, a, m) {
			i['GoogleAnalyticsObject'] = r;
			i[r] = i[r] || function() {
				(i[r].q = i[r].q || []).push(arguments);
			}, i[r].l = 1 * new Date();
			a = s.createElement(o),
				m = s.getElementsByTagName(o)[0];
			a.async = 1;
			a.src = g;
			m.parentNode.insertBefore(a, m);
		}(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga')); // eslint-disable-line no-undef
		ga('create', 'UA-35774335-1', 'auto'); // eslint-disable-line no-undef
		ga('send', 'pageview'); // eslint-disable-line no-undef
	}

	handleLinkClick(e) {
		const node = getParentAnchor(e.target);
		if (node != null) {
			const target = node.getAttribute('target');
			if (target != null) return;

			const href = node.getAttribute('href');
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
				callback: ({template, error, pageData}) => {
					this.setState({PageComponent: template, error, pageData});
					document.body.scrollTop = 0; // eslint-disable-line no-undef
				}
			}
		);
	}

	render() {
		const {PageComponent, error, pageData = {}} = this.state;
		const {title} = pageData;

		return (
			<html>
				<head>
					<title>{`${title} | Chandler Prall`}</title>
					<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
					<link rel="stylesheet" type="text/css" href={`/static/${BUNDLE}/app.css`}/>
				</head>
				<body onClick={(e) => this.handleLinkClick(e)}>
					<BaseHeader/>
					<PageComponent display-if={PageComponent}/>
					<div display-if={error}>{error}</div>
					<script type="text/javascript" src={`/static/${BUNDLE}/app.js`}/>
				</body>
			</html>
		);
	}
}

BasePage.displayName = 'BasePage';

BasePage.propTypes = {
	PageComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
	pageData: PropTypes.shape({
		title: PropTypes.string
	}),
	error: PropTypes.node
};