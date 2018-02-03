import * as actions from '../actions/constants'

const INITIAL_STATE = {
    players: [],
    currentPlayer: null
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case actions.GAME_START_ROLL:
            return { ...state, currentPlayer: action.nextPlayer }
        case actions.GAME_ADD_PLAYER:
            return state.updateIn(['players'], (playersList) => playersList.push({ name: action.name, id: action.id }))
        case actions.GAME_REMOVE_PLAYER:
            return state.updateIn(['players'], (playersList) => playersList.filter((player) => player.id !== action.id))
        case actions.START_NEW_GAME:
        case actions.GAME_NEXT_PLAYER:
            return { ...state, currentPlayer: action.player }
        default:
            return state
    }
}
