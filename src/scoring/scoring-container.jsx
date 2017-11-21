import React from 'react';
import _ from 'lodash';

import { PinsSelection } from '../pins';
import { ScoreBoard } from '../scoreboard'

import { firstRoll, secondRoll, maxPins } from '../constants'
import { isSpare, isStrike, cyclicChangeState } from './utils'

class Score {
    constructor (frame, roll, score) {
        this.frame = frame;
        this.roll = roll;
        this.score = score;
    }
}

export class ScoringContainer extends React.Component {

    state = {
        score: [],
        frame: 0,
        roll: 0
    };

    updatePreviosStateConditionally = () => {

    };

    getNextFrameAndRoll = (score) => {
        const result = { frame: null, roll: null };
        const { roll, frame } = this.state;

        if (isStrike(score, roll)) {
            result.roll = firstRoll;
            result.frame = cyclicChangeState(frame);
        } else if (isSpare(score, roll)) {
            result.roll = firstRoll;
            result.frame = cyclicChangeState(frame);
        } else {
            result.roll = cyclicChangeState(roll);
            result.frame = cyclicChangeState(frame);
        }

        return result
    };


    handleSetScore = (pinsHitted) => {
        this.setState((state) => {

            const score = this.updatePreviosStateConditionally(pinsHitted);
            const nextState = this.getNextFrameAndRoll(pinsHitted);

            return {
                score,
                ...nextState
            }
        })
    };

    handleSelectPin = (value) => this.handleSetScore(value);

    static propTypes = {};

    static defaultProps = {};

    render () {
        const { score } = this.state;
        return (
            <div>
                <PinsSelection maxValue={10} onSelect={this.handleSelectPin} />
                <ScoreBoard score={score} />
            </div>
        );
    }
}
