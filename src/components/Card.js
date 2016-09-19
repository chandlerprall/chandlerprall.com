import React, {PropTypes} from 'react';
import {CARD_PROJECT, CARD_POST} from '../carddata';
import Link from '../components/Link';
import Headline from '../components/Headline';
import Paragraph from '../components/Paragraph';

export default function Card({title, image, blurb, links}) {
	const leftLink = <Link href={links.primary.href} routeName={links.primary.routeName} routeParams={links.primary.routeParams} className="sectionLink">{links.primary.text}</Link>;

	let rightLink;
	if (links.secondary) {
		rightLink = <Link href={links.secondary.href} routeName={links.secondary.routeName} routeParams={links.secondary.routeParams} className="sectionLink">{links.secondary.text}</Link>;
	}

	return (
		<div className="cardSection">
			<section className="cardTitle">
				<Headline>{title}</Headline>
			</section>
			<section className="cardContent">
				<Paragraph>{blurb}</Paragraph>
				<Paragraph>{leftLink}{rightLink}</Paragraph>
			</section>
			<section className="cardImage">
				<Link href={links.primary.href} routeName={links.primary.routeName} routeParams={links.primary.routeParams}>
					<img src={image} alt={title}/>
				</Link>
			</section>
		</div>
	);
}

Card.displayName = 'Card';

const linkStructure = PropTypes.shape({
	href: PropTypes.string,
	routeName: PropTypes.string,
	routeParams: PropTypes.object,
	text: PropTypes.string
});

Card.propTypes = {
	type: PropTypes.oneOf([CARD_PROJECT, CARD_POST]).isRequired,
	title: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	blurb: PropTypes.string.isRequired,
	links: PropTypes.shape({
		primary: linkStructure.isRequired,
		secondary: linkStructure
	}).isRequired
};