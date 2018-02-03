import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux'
import { stepSelector } from '../selectors'
import { Players, Game, Results } from '../components'


export const Scoring = connect((state) => ({
    step: stepSelector(state),
}))(class ScoringDumb extends React.Component {

    static propTypes = {
        step: PropTypes.number
    }

    render () {
        const { step } = this.props
        return (
            <div className="container">
                <h3> Bowling scoring system </h3>
                { step === 1 && <Players /> }
                { step === 2 && <Game /> }
                { step === 3 && <Results /> }
            </div>
        )
    }
})