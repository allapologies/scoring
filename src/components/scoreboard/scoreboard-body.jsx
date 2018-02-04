import PropTypes from 'prop-types';
import React from 'react';
import _ from 'lodash'
import { connect } from 'react-redux'

import { playersSelector, currentScoreSelector, getTotal } from '../../selectors'

import { ScoreBoardRow } from './scoreboard-row'

export const ScoreboardBody = connect((state) => ({
    players: playersSelector(state),
    // score: currentScoreSelector(state),
    total: getTotal(state)
}))(class ScoreboardBody extends React.Component {
    static propTypes = {
        players: PropTypes.arrayOf(PropTypes.object),
        score: PropTypes.array,
        total: PropTypes.number
    }

    static defaultPropes = {
        score: {},
        total: 0
    }

    render () {
        const { total } = this.props
        return (
            <tbody>
            {_.map(this.props.players, (player) => {
                const { score } = this.props

                return (
                    <ScoreBoardRow
                        key={player.id}
                        player={player}
                        score={[]}
                        total={total}
                    />
                )
            })}
            </tbody>
        )
    }
})