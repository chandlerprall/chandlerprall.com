import {Router} from 'napoleon';
import AboutRoute from './AboutRoute';
import HomepageRoute from './HomepageRoute';
import ProjectRoutes from './projects';
import PostRoutes from './posts';

const router = new Router();

function routeHandler(route) {
    return (parameters, {callback}) => {
		return Promise.resolve(route.handler(parameters))
			.then(result => callback(result))
			.catch(e => {
				console.error(`error routing for ${route.route.name}`, e); // eslint-disable-line
				callback({error: e});
			});
	};
}

[AboutRoute, HomepageRoute].concat(PostRoutes, ProjectRoutes).forEach(projectRoute => {
	router.mount({...projectRoute.route, handler: routeHandler(projectRoute)});
});

export default router;