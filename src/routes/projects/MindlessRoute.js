/* global require */
export default {
    route: {name: 'mindless', url: '/project/mindless'},
    handler: () => new Promise(resolve => {
        require.ensure(['../../pages/projects/MindlessPage'], function(require) {
            resolve(require('../../pages/projects/MindlessPage').default);
        });
    })
};