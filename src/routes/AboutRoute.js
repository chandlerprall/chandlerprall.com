/* global require */
export default {
    route: {name: 'about', url: '/about'},
    handler: () => new Promise(resolve => {
        require.ensure(['../views/AboutView'], function(require) {
            const template = require('../views/AboutView').default;
            resolve({template});
        });
    })
};