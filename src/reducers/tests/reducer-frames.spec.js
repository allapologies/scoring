import { Map as iMap, List as iList, fromJS } from 'immutable'
import * as matchers from 'jasmine-immutable-matchers'
import frames from '../reducer-frames'
import { GAME_INIT, GAME_START_FRAME, START_NEW_GAME, GAME_THROW_BALL_SUCCESS } from '../../actions/constants'

describe('Reducer - frames', () => {
    beforeEach(() => jasmine.addMatchers(matchers))

    it('should return the initial state', () => {
        const expected = iMap({
            currentFrame: null,
            currentRoll: null,
            data: iList([]),
            isFinished: false
        })

        const actual = frames(undefined, {})
        expect(actual).toEqualImmutable(expected)
    })
    it('should handle GAME_INIT', () => {
        const expected = iMap({
            currentFrame: 1,
            currentRoll: 1,
            data: iList([]),
            isFinished: false
        })

        const action = {
            type: GAME_INIT
        }

        const actual = frames(undefined, action)
        expect(actual).toEqualImmutable(expected)
    })
    it('should handle GAME_START_FRAME', () => {
        const expected = iMap({
            currentFrame: 6,
            currentRoll: 1,
            data: iList([])
        })

        const state = iMap({
            currentFrame: 5,
            currentRoll: 2,
            data: iList([])
        })

        const action = {
            type: GAME_START_FRAME,
            frameId: 6
        }

        const actual = frames(state, action)
        expect(actual).toEqualImmutable(expected)
    })

    it('handle THROW BALL SUCCESS for first roll', () => {

        const state = iMap({
            currentFrame: null,
            currentRoll: null,
            data: iList([])
        })

        const action = {
            type: GAME_THROW_BALL_SUCCESS,
            playerId: '1',
            frameId: 1,
            rollId: 1,
            score: 4
        }

        const expected = fromJS({
            currentFrame: null,
            currentRoll: null,
            data: [
                    {
                        frameId: 1,
                        rollId: 1,
                        score: 4
                    }
            ]
        })

        const actual = frames(state, action)

        expect(actual).toEqualImmutable(expected)
    })

    it('handle THROW BALL SUCCESS for second roll', () => {
        const state = iMap({
            currentFrame: null,
            currentRoll: null,
            data: iList([
                    iMap({
                        frameId: 1,
                        rollId: 1,
                        score: 4
                    })
            ])
        })

        const action = {
            type: GAME_THROW_BALL_SUCCESS,
            playerId: '5',
            frameId: 3,
            rollId: 2,
            score: 2
        }

        const expected = iMap({
            currentFrame: null,
            currentRoll: null,
            data: iList([
                    iMap({
                        frameId: 1,
                        rollId: 1,
                        score: 4
                    }),
                    iMap({
                        frameId: 3,
                        rollId: 2,
                        score: 2
                    })
            ])
        })

        const actual = frames(state, action)
        expect(actual).toEqualImmutable(expected)
    })
})
