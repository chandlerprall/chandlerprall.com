const INTERNAL_URL_REGEXP = /^[a-z]+:\/\//;
export function isInternalUrl(url) {
	return !url.match(INTERNAL_URL_REGEXP);
}

export function getParentAnchor(node) {
	while (node != null) {
		if (node.nodeName === 'A') {
			return node;
		}
		node = node.parentNode;
	}
}