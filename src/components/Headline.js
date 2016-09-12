import React, {PropTypes} from 'react';

export default function Headline({children}) {
	return (
		<h1>{children}</h1>
	);
}

Headline.propTypes = {
	children: PropTypes.node.isRequired
};