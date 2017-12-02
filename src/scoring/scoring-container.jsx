import React from 'react';
import _ from 'lodash';

import { PinsSelection } from '../pins';
import { ScoreBoard } from '../scoreboard'

import { initialFrameIndex, firstRoll, secondRoll, maxPins, framesNumber } from '../constants'
import {
    isSpare,
    isStrike,
    incrementFrame,
    cyclicChangeRoll,
    mapRollsToFrames,
    createRoll,
    createFrame
} from './utils'
import { calculate } from './calculate'


export class ScoringContainer extends React.Component {

    state = {
        rolls: [],
        frame: initialFrameIndex,
        roll: firstRoll,
        remaining: maxPins,
        frames: [],
        isFinished: false,
        total: null
    };

    updateFrames = () => {
        const { rolls, frames, roll, frame } = this.state;
        if (roll !== firstRoll) {
            return void 0
        }

        const first = _.get(_.find(rolls, { frame: frame - 1, roll: firstRoll }), 'pins', 0);
        const second = _.get(_.find(rolls, { frame: frame - 1, roll: secondRoll }), 'pins', 0);

        const frameTotal = first + second;

        this.setState({
            frames: _.concat(frames, createFrame(first, second, frameTotal)),
            total: calculate(rolls)
        })
    };

    getNextFrameAndRoll = (pins) => {
        const result = { frame: null, roll: null };
        const { roll, frame } = this.state;

        if (isStrike(pins, roll)) {
            result.roll = firstRoll;
            result.frame = incrementFrame(frame);
        } else if (isSpare(pins, roll)) {
            result.roll = firstRoll;
            result.frame = incrementFrame(frame);
        } else {
            result.roll = cyclicChangeRoll(roll);
            result.frame = roll === secondRoll ? incrementFrame(frame) : frame;
        }

        return result
    };


    updateScore = (pinsHitted) => {
        this.setState((state) => {
            const rolls = _.concat(state.rolls, createRoll(state.frame, state.roll, pinsHitted, null));
            const { frame, roll } = this.getNextFrameAndRoll(pinsHitted);

            return {
                rolls,
                frame,
                roll,
                remaining: roll === firstRoll ? maxPins : maxPins - pinsHitted
            }
        }, () => this.updateFrames())
    };

    handleSelectPin = (pins) => this.updateScore(pins);

    static propTypes = {};

    static defaultProps = {};

    render () {
        const { isFinished, remaining, total, frames } = this.state;
        return (
            <div>
                {isFinished && <div>The Game has finished</div>}
                {!isFinished && <PinsSelection maxValue={remaining} onSelect={this.handleSelectPin} />}
                <ScoreBoard frames={frames} total={total} />
            </div>
        );
    }
}
