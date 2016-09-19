/* global require */
import React, {PureComponent, PropTypes} from 'react';

export default class CodeHighlight extends PureComponent {
	constructor(...args) {
		super(...args);
		this.state = {};
	}

	componentDidMount() {
		require.ensure(['react-syntax-highlighter', 'react-syntax-highlighter/dist/styles/github'], require => {
			const ReactSyntaxHighlighter = require('react-syntax-highlighter').default;
			const WrapperStyle = require('react-syntax-highlighter/dist/styles/github').default;
			this.setState({WrapperTag: ReactSyntaxHighlighter, WrapperStyle});
		});
	}

	render() {
		const {WrapperTag, WrapperStyle} = this.state;
		const {code, language} = this.props;

		if (WrapperTag) {
			return <WrapperTag language={language} style={WrapperStyle}>{code}</WrapperTag>
		} else {
			return <pre>{code}</pre>;
		}
	}
}

CodeHighlight.displayName = 'CodeHighlight';

CodeHighlight.propTypes = {
	code: PropTypes.string.isRequired,
	language: PropTypes.string.isRequired
};

CodeHighlight.defaultProps = {
	language: 'javascript'
};