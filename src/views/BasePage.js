import React, {Component, PropTypes} from 'react';

export default class BasePage extends Component {
    constructor(...args) {
        super(...args);
        const [props] = args;

        this.state = {
            PageComponent: props.PageComponent,
            error: props.error
        };
    }

    render() {
        const {PageComponent, error} = this.state;

        return (
            <html>
                <head>
                    <title>Thoughts and Experiments for the Web | Chandler Prall</title>
                </head>
                <body>
                    <header>Chandler Prall</header>
                    <PageComponent display-if={PageComponent}/>
                    <div display-if={error}>{error}</div>
                </body>
            </html>
        );
    }
}

BasePage.propTypes = {
    PageComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    error: PropTypes.node
};