import React, {PropTypes} from 'react';

export default function FloatImage({floatDirection, className, ...imageProps}) {
	return (
		<img className={`${floatDirection} ${className}`} {...imageProps}/>
	);
}

FloatImage.displayName = 'FloatImage';

FloatImage.propTypes = {
	className: PropTypes.string,
	floatDirection: PropTypes.oneOf(['right', 'left'])
};