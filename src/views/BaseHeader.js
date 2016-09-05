import React from 'react';
import Link from '../components/Link';

export default function BaseHeader() {
	return (
		<header>
			<div>
				<h1>Chandler Prall</h1>
				<sub>thoughts and experiments for the web</sub>
			</div>
			<nav>
				<Link className="navlink" href="/">home</Link>
				<Link className="navlink" href="/">articles</Link>
				<Link className="navlink" href="/">projects</Link>
				<Link className="navlink" href="/about">about</Link>
			</nav>
		</header>
	);
};