import _ from 'lodash'
import { createSelector } from 'reselect'

import { FRAMES_COUNT, TOTAL_PINS, FIRST_ROLL, SECOND_ROLL } from '../actions/constants'
import { calculate } from "./calculate";


export const stepSelector = (state) => state.steps.step
export const framesSelector = (state) => state.frames
export const framesDataSelector = (state) => state.frames.data
export const getIsFinished = (state) => state.frames.isFinished
export const getPlayersSlice = (state) => state.players
export const playersSelector = (state) => state.players.players
export const currentPlayerSelector = (state) => state.players.currentPlayer

export const currentFrameAndRollSelector = createSelector(
    [framesSelector],
    (framesSlice) => {
        const currentFrame = framesSlice.currentFrame
        const currentRoll = framesSlice.currentRoll
        return { currentFrame, currentRoll }
    }
)

export const getCurrentPlayerMeta = createSelector(
    [playersSelector, currentPlayerSelector],
    (players, currentPlayer) => {
        const data = _.find(
            players,
            (player) => player.id === currentPlayer
        )
        return { name: data.name, id: data.id }
    }
)


export const getAvailablePins = createSelector(
    [framesSelector, framesDataSelector],
    (framesSlice, rolls) => {
        const { currentRoll } = framesSlice

        switch (currentRoll) {
            case FIRST_ROLL:
                return TOTAL_PINS
            case SECOND_ROLL:
                return TOTAL_PINS - rolls[rolls.length - 1]
            default:
                return TOTAL_PINS
        }
    }
)

export const getTotal = createSelector(
    [framesDataSelector],
    (rolls) => calculate(rolls)
)
