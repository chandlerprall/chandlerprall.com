import React, {PropTypes} from 'react';
import {URLStructure} from 'napoleon';
import router from '../routes/router';

export default function Link({className, routeName, routeParams, href, target, children}) {
	let theHref;
	if (href != null) {
		theHref = href;
	} else {
		const matchedRoute = router.namedRoutes[routeName];
		if (matchedRoute) {
			let urlStructure = new URLStructure(matchedRoute.url);
			theHref = urlStructure.getUrlForState(routeParams || {});
		} else {
			console.error(`Unable to build HREF for ${routeName}`); // eslint-disable-line
		}
	}

	return (
		<a href={theHref} className={className} target={target}>{children}</a>
	);
}

Link.displayName = 'Link';

Link.propTypes = {
	routeName: PropTypes.string,
	routeParams: PropTypes.string,
	href: PropTypes.string,
	target: PropTypes.oneOf(['_blank']),
	children: PropTypes.node.isRequired
};