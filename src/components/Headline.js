import React, {PropTypes} from 'react';

export default function Headline({children, sub}) {
	return (
		<div>
			<h2>{sub}</h2>
			<h1>{children}</h1>
		</div>
	);
}

Headline.propTypes = {
	children: PropTypes.node.isRequired,
	sub: PropTypes.string
};