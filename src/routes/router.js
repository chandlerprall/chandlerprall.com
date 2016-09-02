import {Router} from 'napoleon';
import HomepageRoute from './HomepageRoute';

const router = new Router();

function routeHandler(parameters, {callback}) {
    return Promise.resolve(HomepageRoute.handler(parameters))
    .then(result => callback(result))
    .catch(e => {
        console.error(`error routing for ${HomepageRoute.route.name}`, e); // eslint-disable-line
        callback({error: e});
    });
}

router.mount({
    ...HomepageRoute.route,
    handler: routeHandler
});

export default router;