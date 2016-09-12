const INTERNAL_URL_REGEXP = /^[a-z]+:\/\//;
export function isInternalUrl(url) {
	return !url.match(INTERNAL_URL_REGEXP);
}