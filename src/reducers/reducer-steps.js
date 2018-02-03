import * as actions from '../actions/constants'

const INITIAL_STATE = {
    step: 1
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case actions.GAME_SET_STEP:
            return { step: action.step }
        case actions.REPLAY_GAME:
        case actions.START_NEW_GAME:
            return { step: 2 }
        // case actions.GAME_FINISH:
        //     return { step: 3 }
        default:
            return state
    }
}
