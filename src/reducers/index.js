import { combineReducers } from 'redux'
import players from './reducer-players'
import frames from './reducer-frames'
import steps from './reducer-steps'

const rootReducer = combineReducers({
    players, frames, steps
})

export default rootReducer
