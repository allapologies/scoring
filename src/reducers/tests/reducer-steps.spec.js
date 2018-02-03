/* eslint-env jasmine */
import steps from '../reducer-steps'
import { GAME_SET_STEP } from '../../actions/constants'

describe('Reducer - steps', () => {
    it('should return the initial state', () => {
        const expected = {
            step: 1
        }
        const actual = steps(undefined, {})
        expect(actual).toEqual(expected)
    })
    it('should handle GAME_SET_STEP with empty initial state', () => {
        const expected = {
            step: 1
        }

        const action = {
            type: GAME_SET_STEP, step: 1
        }

        const actual = steps(undefined, action)
        expect(actual).toEqual(expected)
    })
    it('should handle GAME_SET_STEP not empty initial state', () => {
        const initialState = {
            step: 1
        }

        const expected = {
            step: 2
        }

        const action = {
            type: GAME_SET_STEP, step: 2
        }

        const actual = steps(initialState, action)
        expect(actual).toEqual(expected)
    })
})
