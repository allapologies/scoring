import React from 'react';
import PropTypes from 'prop-types';

export class ScoringContainer extends React.Component {

    state = {
        score: []
    };

    handleSetScore = (score) => {
        this.setState({ score })
    };

    static propTypes = {};

    static defaultProps = {};

    render () {
        const { score } = this.state;
        return (
            <div>
                {score.map((item) => item)}
            </div>
        );
    }
}
