import React, {PropTypes} from 'react';

export default function PageCentered({children, className}) {
	return <div className={className}>{children}</div>;
}

PageCentered.displayName = 'PageCentered';

PageCentered.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};