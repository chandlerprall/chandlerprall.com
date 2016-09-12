import React from 'react';
import Link from '../components/Link';
import Headline from '../components/Headline';
import Paragraph from '../components/Paragraph';

export default function HomepageView() {
    return (
        <div className="centered">
			<div className="row">
				<section className="column-major">
					<Headline>Goblin Physics</Headline>
					<Paragraph>Goblin Physics is an open source physics engine written from the ground up for JavaScript games and applications. Its goal is to provide fast and dependable physics simulation regardless of platform (desktop or mobile, browser or nodejs).</Paragraph>
					<Paragraph><Link href="http://www.goblinphysics.com" className="sectionLink">http://www.goblinphysics.com</Link></Paragraph>
				</section>
				<section className="column-minor">
					<Link href="http://www.goblinphysics.com" className="sectionLink">
						<img src="/static/images/goblinphysics.jpg" alt="Goblin Physics"/>
					</Link>
				</section>
			</div>

			<div className="row">
				<section className="column-major">
					<Headline>Physijs</Headline>
					<Paragraph>A physics plugin extending the Three.js API with a customizable, easy to use physics engine. The simulation is run via web workers to keep processing off the main thread.</Paragraph>
					<Paragraph><Link href="http://chandlerprall.github.io/Physijs/" className="sectionLink">http://chandlerprall.github.io/Physijs/</Link></Paragraph>
				</section>
				<section className="column-minor">
					<Link href="http://chandlerprall.github.io/Physijs/" className="sectionLink">
						<img src="/static/images/physijs.jpg" alt="Physijs"/>
					</Link>
				</section>
			</div>
		</div>
    );
}
