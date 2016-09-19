import React, {PropTypes} from 'react';

export default function FloatImage({floatDirection, className, ...imageProps}) {
	return (
		<img className={`${floatDirection} ${className}`} {...imageProps}/>
	);
}

FloatImage.displayName = 'FloatImage';

FloatImage.propTypes = {
	floatDirection: PropTypes.oneOf(['right', 'left'])
};