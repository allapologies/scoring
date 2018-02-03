import { playersSelector, currentPlayerSelector,
  currentFrameAndRollSelector, framesDataSelector,
 getIsFinished } from '../selectors'
import { getRandomInt, getNext, getMax } from '../utility/helpers'

import * as constants from './constants'

export function initGame () {
    return {
        type: constants.GAME_INIT
    }
}

export function finishGame () {
    return {
        type: constants.GAME_FINISH
    }
}

export const startGame = () => (dispatch, getState) => {
    const state = getState()

    const players = playersSelector(state)
    const currentPlayer = players[0].id

    dispatch({
        type: constants.START_NEW_GAME, players, player: currentPlayer
    })
}

export const replayGame = () => ({ type: constants.REPLAY_GAME })

export const throwBall = (score) => (dispatch, getState) => {
    const state = getState()
    if (getIsFinished(state)) {
        return void 0
    }

    dispatch({ type: constants.GAME_THROW_BALL })

    const currentPlayer = currentPlayerSelector(state)
    const { currentFrame, currentRoll } = currentFrameAndRollSelector(state)

    dispatch({
        type: constants.GAME_THROW_BALL_SUCCESS,
        score,
        frameId: currentFrame,
        rollId: currentRoll,
        playerId: currentPlayer,
    })

    if (currentFrame === constants.FRAMES_COUNT && currentRoll === constants.SECOND_ROLL) {
        return dispatch(finishGame())
    }
    const nextState = getNext(currentFrame, currentRoll, score, currentPlayer)

    return dispatch({
        type: constants.GAME_START_ROLL,
        ...nextState
    })

}
