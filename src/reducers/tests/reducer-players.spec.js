/* eslint-env jasmine */
import { Map, List } from 'immutable'
import players from '../reducer-players'
import { GAME_ADD_PLAYER, GAME_REMOVE_PLAYER } from '../../actions/constants'

describe('Reducer - players', () => {
    it('should return the initial state', () => {
        const expected = {
            currentPlayer: null,
            players: []
        }
        const actual = players(undefined, {})
        expect(actual.toJS()).toEqual(expected)
    })
    it('should handle GAME_ADD_PLAYER with empty initial state', () => {
        const expected = {
            currentPlayer: null,
            players: [{ name: 'Aleksandr', id: 1 }]
        }

        const action = {
            type: GAME_ADD_PLAYER, name: 'Aleksandr', id: 1
        }

        const actual = players(undefined, action)
        expect(actual.toJS()).toEqual(expected)
    })
    it('should handle GAME_ADD_PLAYER with initial state', () => {
        const expected = {
            players: [{ name: 'Aleksandr', id: 1 }, { name: 'Irina', id: 2 }],
            currentPlayer: null
        }

        const initialState = Map({
            players: List([{ name: 'Aleksandr', id: 1 }]),
            currentPlayer: null,
        })


        const action = {
            type: GAME_ADD_PLAYER, name: 'Irina', id: 2
        }

        const actual = players(initialState, action)
        expect(actual.toJS()).toEqual(expected)
    })
    it('should handle GAME_REMOVE_PLAYER', () => {
        const initialState = Map({
            players: List([{ name: 'Aleksandr', id: 1 }, { name: 'Irina', id: 2 }]),
            currentPlayer: null
        })

        const expected = {
            players: [{ name: 'Aleksandr', id: 1 }],
            currentPlayer: null
        }

        const action = {
            type: GAME_REMOVE_PLAYER, id: 2
        }

        const actual = players(initialState, action)
        expect(actual.toJS()).toEqual(expected)
    })
})
