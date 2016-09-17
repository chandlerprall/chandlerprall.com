import React from 'react';
import PageCentered from '../components/PageCentered';
import Link from '../components/Link';
import Headline from '../components/Headline';
import Paragraph from '../components/Paragraph';

export default function HomepageView() {
    return (
		<PageCentered className="centered">
			<div className="card">
				<section className="cardTitle">
					<Headline>Goblin Physics</Headline>
				</section>
				<section className="cardContent">
					<Paragraph>Goblin Physics is an open source physics engine written from the ground up for JavaScript games and applications. Its goal is to provide fast and dependable physics simulation regardless of platform (desktop or mobile, browser or nodejs).</Paragraph>
					<Paragraph><Link href="http://www.goblinphysics.com" className="sectionLink">http://www.goblinphysics.com</Link></Paragraph>
				</section>
				<section className="cardImage">
					<Link href="http://www.goblinphysics.com" className="sectionLink">
						<img src="/static/images/cards/goblinphysics.jpg" alt="Goblin Physics"/>
					</Link>
				</section>
			</div>

			<div className="card">
				<section className="cardTitle">
					<Headline>Physijs</Headline>
				</section>
				<section className="cardContent">
					<Paragraph>A physics plugin extending the Three.js API with a customizable, easy to use physics engine. The simulation is run via web workers to keep processing off the main thread.</Paragraph>
					<Paragraph><Link href="http://chandlerprall.github.io/Physijs/" className="sectionLink">http://chandlerprall.github.io/Physijs/</Link></Paragraph>
				</section>
				<section className="cardImage">
					<Link href="http://chandlerprall.github.io/Physijs/" className="sectionLink">
						<img src="/static/images/cards/physijs.jpg" alt="Physijs"/>
					</Link>
				</section>
			</div>

			<div className="card">
				<section className="cardTitle">
					<Headline>A</Headline>
				</section>
				<section className="cardContent">
					<Paragraph>Goblin Physics is an open source physics engine written from the ground up for JavaScript games and applications. Its goal is to provide fast and dependable physics simulation regardless of platform (desktop or mobile, browser or nodejs).</Paragraph>
					<Paragraph><Link href="http://www.goblinphysics.com" className="sectionLink">http://www.goblinphysics.com</Link></Paragraph>
				</section>
				<section className="cardImage">
					<Link href="http://www.goblinphysics.com" className="sectionLink">
						<img src="/static/images/cards/goblinphysics.jpg" alt="Goblin Physics"/>
					</Link>
				</section>
			</div>

			<div className="card">
				<section className="cardTitle">
					<Headline>B</Headline>
				</section>
				<section className="cardContent">
					<Paragraph>Goblin Physics is an open source physics engine written from the ground up for JavaScript games and applications. Its goal is to provide fast and dependable physics simulation regardless of platform (desktop or mobile, browser or nodejs).</Paragraph>
					<Paragraph><Link href="http://www.goblinphysics.com" className="sectionLink">http://www.goblinphysics.com</Link></Paragraph>
				</section>
				<section className="cardImage">
					<Link href="http://www.goblinphysics.com" className="sectionLink">
						<img src="/static/images/cards/goblinphysics.jpg" alt="Goblin Physics"/>
					</Link>
				</section>
			</div>

			<div className="card">
				<section className="cardTitle">
					<Headline>C</Headline>
				</section>
				<section className="cardContent">
					<Paragraph>Goblin Physics is an open source physics engine written from the ground up for JavaScript games and applications. Its goal is to provide fast and dependable physics simulation regardless of platform (desktop or mobile, browser or nodejs).</Paragraph>
					<Paragraph><Link href="http://www.goblinphysics.com" className="sectionLink">http://www.goblinphysics.com</Link></Paragraph>
				</section>
				<section className="cardImage">
					<Link href="http://www.goblinphysics.com" className="sectionLink">
						<img src="/static/images/cards/goblinphysics.jpg" alt="Goblin Physics"/>
					</Link>
				</section>
			</div>

			<div className="card">
				<section className="cardTitle">
					<Headline>D</Headline>
				</section>
				<section className="cardContent">
					<Paragraph>Goblin Physics is an open source physics engine written from the ground up for JavaScript games and applications. Its goal is to provide fast and dependable physics simulation regardless of platform (desktop or mobile, browser or nodejs).</Paragraph>
					<Paragraph><Link href="http://www.goblinphysics.com" className="sectionLink">http://www.goblinphysics.com</Link></Paragraph>
				</section>
				<section className="cardImage">
					<Link href="http://www.goblinphysics.com" className="sectionLink">
						<img src="/static/images/cards/goblinphysics.jpg" alt="Goblin Physics"/>
					</Link>
				</section>
			</div>
		</PageCentered>
    );
}
