export const getSearchWithoutKeys = ({keys}: {keys: string[]}) => {
	if (!keys || typeof keys !== 'object') {
		throw new Error('Not enough arguments');
	}
	const currentSearchParams = new URLSearchParams(window.location.search);
	keys.forEach((key) => {
		currentSearchParams.delete(key);
	});

	return currentSearchParams.toString();
};
