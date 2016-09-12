import React, {PropTypes} from 'react';

export default function Paragraph({children}) {
	return (
		<p>{children}</p>
	);
}

Paragraph.propTypes = {
	children: PropTypes.node.isRequired
};