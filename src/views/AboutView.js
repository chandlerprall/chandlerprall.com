import React from 'react';
import FloatImage from '../components/FloatImage';
import Link from '../components/Link';
import PageCentered from '../components/PageCentered';
import Paragraph from '../components/Paragraph';

export default function AboutView() {
	return (
		<PageCentered>
			<FloatImage floatDirection="right" src="/static/images/chandlerprall.jpg" alt="Chandler Prall" title="Chandler Prall"/>

			<Paragraph>
				Hello! My name is Chandler Prall, currently a Lead Engineer/Architect at <Link href="https://www.craftsy.com">Craftsy</Link> where I have the honor of leading our Front End development team and technology.
				I am a full stack engineer with 10+ years experience of systems and web software development. Historically accustomed to the LAMP stack, my focus has shifted to include a lot of additions from the JavaScript community such as Node.js and React.
				I fervently believe that the Right Tools&trade; are different for every team and goal, and so strive to have a basic understanding of many approaches and techniques.
			</Paragraph>

			<Paragraph>
				Most recently, the Craftsy engineering team took 18 months to re-build our site from the ground up.
				The old system was a monolithic JAVA/JSP/Hibernate beast with sprinklings of jQuery for clientside interactivity.
				We had already been moving toward using React as our rendering engine and took this opportunity to fully embrace JavaScript on the server and client to deliver a seamless experience for users.
				This lead us to implement React Native in the iOS and Android applications, allowing large portions of our codebase to be shared between server, browser, and both native apps.
			</Paragraph>

			<Paragraph>
				I'm also the author of multiple open source projects including <Link href="http://www.goblinphysics.com/">Goblin Physics</Link>, a 3D physics engine written specifically for JavaScript, and <Link href="http://chandlerprall.github.io/Physijs/">Physijs</Link>, a plugin for the popular Three.js WebGL engine which provides an easy API to run a physics simulation in a separate thread.
			</Paragraph>

			<Paragraph>
				Previously I have had the pleasure of building user experiences and optimizing development workflows at <Link hef="http://www.sheknows.com">SheKnows</Link>, creating new business development software at Weaver Multimedia Group, and managing / expanding the ingest and processing of real estate MLS data for Active Website (now <Link href="http://www.booj.com/">Booj</Link>).
			</Paragraph>
		</PageCentered>
	);
}
