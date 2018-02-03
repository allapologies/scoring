import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, compose, applyMiddleware } from 'redux'
import reducers from './reducers'
import { App } from './containers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducers, {}, composeEnhancers(
  applyMiddleware(thunk)
))

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
  , document.querySelector('.app')
)
