import React, {PropTypes} from 'react';

export default function Headline({type, children, sub}) {
	return (
		<div>
			<sub display-if={sub != null}>{sub}</sub>
			<h1 className="heading" display-if={type === 'h1'}>{children}</h1>
			<h2 className="heading" display-if={type === 'h2'}>{children}</h2>
		</div>
	);
}

Headline.displayName = 'Headline';

Headline.propTypes = {
	type: PropTypes.oneOf(['h1', 'h2']).isRequired,
	children: PropTypes.node.isRequired,
	sub: PropTypes.string
};

Headline.defaultProps = {
	type: 'h1'
};