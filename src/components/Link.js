import React, {PropTypes} from 'react';
import {URLStructure} from 'napoleon';
import router from '../routes/router';
import {isInternalUrl} from '../utils/PathUtils';

export default function Link({className, routeName, routeParams, href, target, children}) {
	let theHref;
	if (href != null) {
		theHref = href;
	} else {
		let urlStructure = new URLStructure(router.namedRoutes[routeName].url);
		theHref = urlStructure.getUrlForState(routeParams || {});
	}

	return (
		<a href={theHref} className={className}>{children}</a>
	);
}

Link.propTypes = {
	routeName: PropTypes.string,
	routeParams: PropTypes.string,
	href: PropTypes.string,
	target: PropTypes.string,
	children: PropTypes.node.isRequired
};