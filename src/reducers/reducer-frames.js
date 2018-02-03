import * as actions from '../actions/constants'

const INITIAL_STATE = {
    currentFrame: null,
    currentRoll: null,
    data: [],
    isFinished: false
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case actions.GAME_START_ROLL:
            return { ...state, currentFrame: action.nextFrame, currentRoll: action.nextRoll }
        case actions.GAME_INIT:
        case actions.START_NEW_GAME:
            return { ...state, currentFrame: 1, currentRoll: 1 }
        case actions.GAME_START_FRAME:
            return { ...state, currentFrame: action.frameId, currentRoll: 1 }
        case actions.GAME_THROW_BALL_SUCCESS:
            return {
                ...state,
                data: [
                    ...state.data, {
                        frameId: action.frameId,
                        rollId: action.rollId,
                        score: action.score
                    }
                ]
            }
        case actions.GAME_FINISH:
            return { ...state, isFinished: true }

        default:
            return state
    }
}
