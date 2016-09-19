export const CARD_PROJECT = 'PROJECT';
export const CARD_POST = 'POST';

export default {
	goblinphysics: {
		type: CARD_PROJECT,
		title: 'Goblin Physics',
		image: '/static/images/cards/goblinphysics.jpg',
		blurb: 'Goblin Physics is an open source physics engine written from the ground up for JavaScript games and applications. Its goal is to provide fast and dependable physics simulation regardless of platform (desktop or mobile, browser or nodejs).',
		links: {
			primary: {
				text: 'http://www.goblinphysics.com',
				href: 'http://www.goblinphysics.com'
			}
		}
	},
	physijs: {
		type: CARD_PROJECT,
		title: 'Physijs',
		image: '/static/images/cards/physijs.jpg',
		blurb: 'A physics plugin extending the Three.js API with a customizable, easy to use physics engine. The simulation is run via web workers to keep processing off the main thread.',
		links: {
			primary: {
				text: 'http://chandlerprall.github.io/Physijs/',
				href: 'http://chandlerprall.github.io/Physijs/'
			}
		}
	},
	mindless: {
		type: CARD_POST,
		title: 'Mindless - js13kGames',
		image: '/static/images/cards/mindless.jpg',
		blurb: 'My entry for the 2012 js13kGames competition, taking 3rd place. Mindless is built with a custom 3D engine for the Canvas element, allowing for a 3D environment across browsers when only Chrome and FireFox had WebGL enabled.',
		links: {
			primary: {routeName: 'mindless', text: 'Read More'},
			secondary: {href: 'http://js13kgames.com/entries/mindless/', text: 'Play Mindless'}
		}
	},
	requestAnimationFrameFriend: {
		type: CARD_POST,
		title: 'Request Animation Frame is not your (logic\'s) friend',
		blurb: 'Many tutorials and examples use requestAnimationFrame to update not just rendering & visuals but also to power logic. This creates non-determinism in app/game code, leading to undesired experiences for many users.',
		links: {
			primary: {routeName: 'requestAnimationFrameFriend', text: 'Read More'}
		}
	},
};