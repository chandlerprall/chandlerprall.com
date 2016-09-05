import {Router} from 'napoleon';
import AboutRoute from './AboutRoute';
import HomepageRoute from './HomepageRoute';

const router = new Router();

function routeHandler(route) {
    return (parameters, {callback}) => {
		return Promise.resolve(route.handler(parameters))
			.then(result => callback(result))
			.catch(e => {
				console.error(`error routing for ${route.route.name}`, e); // eslint-disable-line
				callback({error: e});
			});
	}
}

router.mount({...AboutRoute.route, handler: routeHandler(AboutRoute)});
router.mount({...HomepageRoute.route, handler: routeHandler(HomepageRoute)});

export default router;