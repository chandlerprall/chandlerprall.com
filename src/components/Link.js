import React, {PropTypes} from 'react';

export default function Link({className, routeName, routeParams, href, target, children}) {
	const theHref = href;
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