import * as actions from '../actions/constants'
import _ from 'lodash'


const INITIAL_STATE = {
    players: [],
    currentPlayer: null
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case actions.GAME_START_ROLL:
            return { ...state, currentPlayer: action.nextPlayer }
        case actions.GAME_ADD_PLAYER:
            return { ...state, players: [...state.players, { name: action.name, id: action.id }] }
        case actions.GAME_REMOVE_PLAYER:
            return { ...state, players: _.filter(state.players, ({ id }) => id !== action.id) }
        case actions.START_NEW_GAME:
        case actions.GAME_NEXT_PLAYER:
            return { ...state, currentPlayer: action.player }
        default:
            return state
    }
}
