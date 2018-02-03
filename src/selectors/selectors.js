import _ from 'lodash'
import { createSelector } from 'reselect'

import { FRAMES_COUNT, TOTAL_PINS, FIRST_ROLL, SECOND_ROLL } from '../actions/constants'


export const stepSelector = (state) => state.steps.step
export const framesSelector = (state) => state.frames
export const framesDataSelector = (state) => state.frames.data

const nextRollHasPlayed = (frames, currenFrameIndex) => {
    return _.get(_.nth(frames, currenFrameIndex + 1), 'firstRoll', null) !== null
}


const zeroToNull = (int) => int == 0 ? null : int

const isSpare = (firstRollScore = 0, secondRollScore = 0) =>
    firstRollScore + secondRollScore === TOTAL_PINS


const isStrike = (firstRollScore, /** secondRollScore = 0 **/) =>
    firstRollScore === TOTAL_PINS


const handleSpare = (index, rolls) =>
    zeroToNull(_.get(_.nth(rolls, index), 'score', 0) + _.get(_.nth(rolls, index + 1), 'score', 0))


const handleStrike = (index, rolls) =>
    zeroToNull(_.get(_.nth(rolls, index), 'score', 0) + _.get(_.nth(rolls, index + 1), 'score', 0) + _.get(_.nth(rolls, index + 2), 'score', 0))


const getNormalScore = (index, rolls) =>
    zeroToNull(_.get(_.nth(rolls, index), 'score', 0) + _.get(_.nth(rolls, index + 1), 'score', 0))


export const currentScoreSelector = createSelector(
    [framesDataSelector],
    (rolls) => {
        let score = new Array(FRAMES_COUNT)
        score = _.map(score, () => ({
            firstRoll: null,
            secondRoll: null,
            isStrike: false,
            isSpare: false,
            totalScore: null
        }))

        if (!_.isEmpty(rolls)) {
            _.forEach(rolls, (roll, rollIndex) => {

                if (isStrike(_.has(_.nth(rolls, rollIndex), 'score', false))) {
                    score[rollIndex].isStrike = true
                    score[rollIndex].totalScore = handleStrike(rollIndex, rolls)
                    rollIndex += 2
                } else if (isSpare(rolls[rollIndex].score, rolls[rollIndex + 1].score)) {
                    score[rollIndex].isSpare = true
                    score[rollIndex].totalScore = handleSpare(rollIndex, rolls)
                    rollIndex += 1
                } else {
                    score[rollIndex].totalScore = getNormalScore(rollIndex, rolls)
                    rollIndex += 1
                }
            })
        }

        return score
    }
)

export const currentFrameAndRollSelector = createSelector(
    [framesSelector],
    (framesSlice) => {
        const currentFrame = framesSlice.currentFrame
        const currentRoll = framesSlice.currentRoll
        return { currentFrame, currentRoll }
    }
)

export const getPlayersSlice = createSelector(
    (state) => state.players,
    (players) => players
)

export const playersSelector = createSelector(
    [getPlayersSlice],
    (playersSlice) => playersSlice.players
)

export const currentPlayerSelector = createSelector(
    [getPlayersSlice],
    (playersSlice) => playersSlice.currentPlayer
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

export const getIsFinished = createSelector(
    [framesSelector],
    (framesSlice) => framesSlice.isFinished
)

const getScoreByFrameIdAndRollId = (frameId, rollId, data) => {
    const result = _.find(data, { frameId, rollId })
    return TOTAL_PINS - result.score
}

export const getAvailablePins = createSelector(
    [framesSelector, framesDataSelector],
    (framesSlice, data) => {
        const currentRoll = framesSlice.currentRoll
        const currentFrame = framesSlice.currentFrame

        switch (currentRoll) {
            case FIRST_ROLL:
                return TOTAL_PINS
            case SECOND_ROLL:
                return getScoreByFrameIdAndRollId(currentFrame, FIRST_ROLL, data)
            default:
                return TOTAL_PINS
        }
    }
)

export const getScore = createSelector(
    [framesDataSelector],
    (rolls) => _.reduce(rolls, (result, roll, index) => {
        if (isSpare(rolls, index)) {
            result += handleSpare(rolls, index)
        }

        if (isStrike(rolls, index)) {
            result += handleStrike(rolls, index)
        }

        result += roll.score

        return result
    }, 0)
)
