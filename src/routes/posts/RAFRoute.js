/* global require */
export default {
    route: {name: 'requestAnimationFrameFriend', url: '/post/request-animation-frame-is-not-your-logics-friend'},
    handler: () => new Promise(resolve => {
        require.ensure(['../../pages/posts/RAFPage'], function(require) {
            resolve(require('../../pages/posts/RAFPage').default);
        });
    })
};