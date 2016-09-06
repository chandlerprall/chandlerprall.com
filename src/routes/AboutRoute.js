/* global require */
export default {
    route: {name: 'about', url: '/about'},
    handler: () => new Promise(resolve => {
        require.ensure(['../pages/AboutPage'], function(require) {
            resolve(require('../pages/AboutPage').default);
        });
    })
};