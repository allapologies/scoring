import _ from 'lodash'

import * as actions from './constants'

export const addPlayer = (name) => (dispatch) => {
    dispatch({
        type: actions.GAME_ADD_PLAYER,
        name,
        id: _.uniqueId()
    })
}

export const removePlayer = (id) => {
    return {
        type: actions.GAME_REMOVE_PLAYER,
        id
    }
}
