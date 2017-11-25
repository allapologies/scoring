import React from 'react'
import PropTypes from 'prop-types';

import { ScoreBoardRow } from './scoreboard-row'

export class ScoreboardBody extends React.Component {
    static propTypes = {
        score: PropTypes.arrayOf(PropTypes.shape({
            frame: PropTypes.number,
            first: PropTypes.number,
            second: PropTypes.number,
            third: PropTypes.number
        }))
    };

    static defaultPropes = {
        score: []
    };

    render () {
        const { score } = this.props
        // const total = score[9].totalScore
        return (
            <tbody>
                <ScoreBoardRow
                    player={'Allo'}
                    score={score}
                    total={10}
                />
            </tbody>
        )
    }
}
