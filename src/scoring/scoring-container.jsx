import React from 'react';
import _ from 'lodash';

import { PinsSelection } from '../pins';
import { ScoreBoard } from '../scoreboard'

import { firstRoll, secondRoll, maxPins } from '../constants'
import { isSpare, isStrike, cyclicChangeFrame, cyclicChangeRoll, mapRollsToFrames } from './utils'

class Score {
    constructor (frame, roll, pins) {
        this.frame = frame;
        this.roll = roll;
        this.pins = pins;
    }
}

export class ScoringContainer extends React.Component {

    state = {
        score: [],
        frame: 1,
        roll: 1
    };

    getNextFrameAndRoll = (score) => {
        const result = { frame: null, roll: null };
        const { roll, frame } = this.state;

        if (isStrike(score, roll)) {
            result.roll = firstRoll;
            result.frame = cyclicChangeFrame(frame);
        } else if (isSpare(score, roll)) {
            result.roll = firstRoll;
            result.frame = cyclicChangeFrame(frame);
        } else {
            result.roll = cyclicChangeRoll(roll);
            result.frame = roll === secondRoll ? cyclicChangeFrame(frame): frame;
        }

        return result
    };


    handleSetScore = (pinsHitted) => {
        this.setState((state) => {

            const score = _.concat(state.score, new Score(state.frame, state.roll, pinsHitted))
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
                {_.map(score, (item, index) => {
                    return (
                        <div key={index}>
                            <span>frame: {item.frame}</span>
                            <span>roll: {item.roll}</span>
                            <span>pins: {item.pins}</span>
                        </div>
                    )
                })}
                <PinsSelection maxValue={10} onSelect={this.handleSelectPin} />
                <ScoreBoard score={mapRollsToFrames(score)} />
            </div>
        );
    }
}
