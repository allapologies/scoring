import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { PinsSelection } from '../pins';

export class ScoringContainer extends React.Component {

    state = {
        score: [0, 1, 2]
    };

    handleSetScore = (score) => {
        this.setState(state => ( { score: _.concat(state.score, score) }))
    };

    handleSelectPin = (value) => this.handleSetScore(value);

    static propTypes = {};

    static defaultProps = {};

    render () {
        const { score } = this.state;
        return (
            <div>
                <PinsSelection maxValue={10} onSelect={this.handleSelectPin} />
                {_.map(score, (item) => item)}
            </div>
        );
    }
}
