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
            currentPlayer: React.PropTypes.shape({
                name: React.PropTypes.string,
                id: React.PropTypes.string
            }),
            throwBall: React.PropTypes.func.isRequired,
            isFinished: React.PropTypes.bool,
            remainingPins: React.PropTypes.number.isRequired
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