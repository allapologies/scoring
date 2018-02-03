import { Map as iMap, List as iList } from 'immutable'

import * as actions from '../actions/constants'

const INITIAL_STATE = iMap({
    currentFrame: null,
    currentRoll: null,
    data: iList([]),
    isFinished: false
})

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case actions.GAME_START_ROLL:
            return state
                .setIn(['currentFrame'], action.nextFrame)
                .setIn(['currentRoll'], action.nextRoll)
        case actions.GAME_INIT:
            return state
                .setIn(['currentFrame'], 1)
                .setIn(['currentRoll'], 1)
        case actions.GAME_START_FRAME:
            return state
                .setIn(['currentFrame'], action.frameId)
                .setIn(['currentRoll'], 1)
        case actions.GAME_THROW_BALL_SUCCESS:
            return state
                .updateIn(['data'],
                    (arr) => arr.push(iMap({
                        frameId: action.frameId,
                        rollId: action.rollId,
                        score: action.score
                    }))
                )
        case actions.START_NEW_GAME:
            return state
                .setIn(['currentFrame'], 1)
                .setIn(['currentRoll'], 1)
        case actions.GAME_FINISH:
            return state
                .set('isFinished', true)
        default:
            return state
    }
}
