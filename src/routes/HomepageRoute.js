/* global require */
export default {
	route: {name: 'homepage', url: '/'},
	handler: () => new Promise(resolve => {
		require.ensure(['../pages/HomePage'], function(require) {
			resolve(require('../pages/HomePage').default);
		});
	})
};