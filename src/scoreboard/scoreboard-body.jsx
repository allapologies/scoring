import React from 'react'
import PropTypes from 'prop-types';

import { ScoreBoardRow } from './scoreboard-row'

export class ScoreboardBody extends React.Component {
    static propTypes = {
        frames: PropTypes.arrayOf(PropTypes.shape({
            firstRoll: PropTypes.number,
            secondRoll: PropTypes.number,
            thirdRoll: PropTypes.number,
            total: PropTypes.number
        })),
        total: PropTypes.number
    };

    static defaultPropes = {
        frames: [],
        total: void 0
    };

    render () {
        const { frames, total } = this.props;
        return (
            <tbody>
                <ScoreBoardRow
                    frames={frames}
                    total={total}
                />
            </tbody>
        )
    }
}
