import frames from '../reducer-frames'
import { GAME_INIT, GAME_START_FRAME, START_NEW_GAME, GAME_THROW_BALL_SUCCESS } from '../../actions/constants'

describe('Reducer - frames', () => {
    it('should return the initial state', () => {
        const expected = {
            currentFrame: null,
            currentRoll: null,
            data: [],
            isFinished: false
        }

        const actual = frames(undefined, {})
        expect(actual).toEqual(expected)
    })
    it('should handle GAME_INIT', () => {
        const expected = {
            currentFrame: 1,
            currentRoll: 1,
            data: [],
            isFinished: false
        }

        const action = {
            type: GAME_INIT
        }

        const actual = frames(undefined, action)
        expect(actual).toEqual(expected)
    })
    it('should handle GAME_START_FRAME', () => {
        const expected = {
            currentFrame: 6,
            currentRoll: 1,
            data: []
        }

        const state = {
            currentFrame: 5,
            currentRoll: 2,
            data: []
        }

        const action = {
            type: GAME_START_FRAME,
            frameId: 6
        }

        const actual = frames(state, action)
        expect(actual).toEqual(expected)
    })

    it('handle THROW BALL SUCCESS for first roll', () => {

        const state = {
            currentFrame: null,
            currentRoll: null,
            data: []
        }

        const action = {
            type: GAME_THROW_BALL_SUCCESS,
            playerId: '1',
            frameId: 1,
            rollId: 1,
            score: 4
        }

        const expected = {
            currentFrame: null,
            currentRoll: null,
            data: [4]
        }

        const actual = frames(state, action)

        expect(actual).toEqual(expected)
    })

    it('handle THROW BALL SUCCESS for second roll', () => {
        const state = {
            currentFrame: null,
            currentRoll: null,
            data: [4]
        }

        const action = {
            type: GAME_THROW_BALL_SUCCESS,
            playerId: '5',
            frameId: 3,
            rollId: 2,
            score: 2
        }

        const expected = {
            currentFrame: null,
            currentRoll: null,
            data: [4, 2]
        }

        const actual = frames(state, action)
        expect(actual).toEqual(expected)
    })
})
