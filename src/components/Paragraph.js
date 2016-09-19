import React, {PropTypes} from 'react';

export default function Paragraph({children}) {
	return (
		<p>{children}</p>
	);
}

Paragraph.displayName = 'Paragraph';

Paragraph.propTypes = {
	children: PropTypes.node.isRequired
};