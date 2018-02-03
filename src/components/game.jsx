import PropTypes from 'prop-types';
import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { ScoreBoard } from './scoreboard'
import { PinsSelection } from './pins'
import { getCurrentPlayerMeta, getIsFinished, getAvailablePins } from '../selectors'

export const Game = connect((state) => ({
    currentPlayer: getCurrentPlayerMeta(state),
    isFinished: getIsFinished(state),
    remainingPins: getAvailablePins(state)
}), (dispatch) => ({
    throwBall: (pins) => dispatch(actions.throwBall(pins))
}))(
    class Game extends React.Component {

        static propTypes = {
            currentPlayer: PropTypes.shape({
                name: PropTypes.string,
                id: PropTypes.string
            }),
            throwBall: PropTypes.func.isRequired,
            isFinished: PropTypes.bool,
            remainingPins: PropTypes.number.isRequired
        }

        render () {
            const { currentPlayer, isFinished, throwBall, remainingPins } = this.props
            return (
                <div>
                    <h3>{currentPlayer.name}</h3>
                    <PinsSelection onSelect={throwBall} maxValue={remainingPins} isHidden={isFinished} />
                    <ScoreBoard />
                </div>
            )
        }
    })