/* global require */
export default {
    route: {name: 'homepage', url: '/'},
    handler: () => new Promise(resolve => {
        require.ensure(['../views/HomepageView'], function(require) {
            const template = require('../views/HomepageView').default;
            resolve({template});
        });
    })
};