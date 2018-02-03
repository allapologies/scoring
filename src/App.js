import React, { Component } from 'react';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, compose, applyMiddleware } from 'redux'

import { Scoring } from './containers'
import reducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducers, {}, composeEnhancers(
    applyMiddleware(thunk)
))

class App extends Component {
    render () {
        return (
            <Provider store={store}>
                <Scoring />
            </Provider>
        );
    }
}

export default App;
