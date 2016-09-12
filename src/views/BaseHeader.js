import React, {PureComponent} from 'react';
import Link from '../components/Link';

const HEADER_SCROLL_DISTANCE = 100;

const BASE_TOP_PADDING = 20;
const TARGET_TOP_PADDING = 5;

const BASE_HEADING_REM = 2.2;
const TARGET_HEADING_REM = 1.5;

const BASE_SUB_REM = 0.86;
const TARGET_SUB_REM = 0;

export default class BaseHeader extends PureComponent {
	constructor(...args) {
		super(...args);

		this.onScroll = this.onScroll.bind(this);

		this.state = {scrollTop: 0};
	}

	componentDidMount() {
		window.addEventListener('scroll', this.onScroll); // eslint-disable-line no-undef
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll); // eslint-disable-line no-undef
	}

	onScroll() {
		this.setState({scrollTop: document.body.scrollTop}); // eslint-disable-line no-undef
	}

	render() {
		const scrollTop = this.state.scrollTop;
		const scrollPerc = scrollTop / HEADER_SCROLL_DISTANCE;

		const headerStyles = {
			paddingTop: `${Math.max(BASE_TOP_PADDING - (scrollPerc * (BASE_TOP_PADDING - TARGET_TOP_PADDING)), TARGET_TOP_PADDING)}px`
		};

		const h1Styles = {
			fontSize: `${Math.max(BASE_HEADING_REM - (scrollPerc * (BASE_HEADING_REM - TARGET_HEADING_REM)), TARGET_HEADING_REM)}rem`
		};

		let subFontSize = Math.max(BASE_SUB_REM - (scrollPerc * (BASE_SUB_REM - TARGET_SUB_REM)), TARGET_SUB_REM);
		const subStyles = {
			fontSize: `${subFontSize}rem`,
			[subFontSize === 0 ? 'display' : null]: 'none'
		};

		return (
			<header style={headerStyles}>
				<div className="centered">
					<div>
						<h1 style={h1Styles}>Chandler Prall</h1>
						<sub style={subStyles}>thoughts and experiments for the web</sub>
					</div>
					<nav>
						<Link className="navlink" routeName="homepage">home</Link>
						<Link className="navlink" href="/">articles</Link>
						<Link className="navlink" href="/">projects</Link>
						<Link className="navlink" routeName="about">about</Link>
					</nav>
				</div>
			</header>
		);
	}
};