import _ from 'lodash'

import { TOTAL_PINS, FIRST_ROLL, SECOND_ROLL } from '../actions/constants'

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

export const getMax = (data, currentFrame, currentRoll) => {
    let max = TOTAL_PINS
    if (currentRoll === FIRST_ROLL) {
        return max
    }

    const firstRoll = _.find(data, { frameId: currentFrame, rollId: FIRST_ROLL })
    max -= firstRoll.score

    return max
}

export const getNextFrameId = (frame) => frame + 1

export const getNext = (currentFrame, currentRoll, score, currentPlayer) => {

    let nextRoll
    let nextFrame
    const nextPlayer = currentPlayer

    if (currentRoll === FIRST_ROLL) {
        if (score < TOTAL_PINS) {
            nextRoll = SECOND_ROLL
            nextFrame = currentFrame
        } else {
            nextRoll = FIRST_ROLL
            nextFrame = getNextFrameId(currentFrame)
        }
    }

    if (currentRoll === SECOND_ROLL) {
        nextRoll = FIRST_ROLL
        nextFrame = getNextFrameId(currentFrame)
    }

    return {
        nextRoll,
        nextFrame,
        nextPlayer
    }
}
