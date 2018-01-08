import React from 'react';
import _ from 'lodash';

import { PinsSelection } from '../pins';
import { ScoreBoard } from '../scoreboard'

import { initialFrameIndex, firstRoll, secondRoll, maxPins } from '../constants'
import {
    isSpare,
    isStrike,
    incrementFrame,
    cyclicChangeRoll,
    createFrame,
    updateScoreInFrame
} from './utils'
import { calculate } from './calculate'


export class ScoringContainer extends React.Component {

    state = {
        frame: initialFrameIndex,
        roll: firstRoll,
        remaining: maxPins,
        frames: [],
        isFinished: false,
        total: null
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
            const { frame, roll, frames } = state;

            const { frame: nextFrame, roll: nextRoll } = this.getNextFrameAndRoll(pinsHitted);

            const updatedFrames = roll === firstRoll
                ? _.concat(frames, createFrame(pinsHitted, null, null))
                : updateScoreInFrame(frames, frame - 1, roll, pinsHitted);


            return {
                frame: nextFrame,
                roll: nextRoll,
                remaining: nextRoll === firstRoll ? maxPins : maxPins - pinsHitted,
                frames: updatedFrames,
                isFinished: false,
                total: 300
            }
        })
    };

    handleSelectPin = (pins) => this.updateScore(pins);

    render () {
        const { isFinished, remaining, total, frames } = this.state;
        return (
            <div className='container'>
                {isFinished && <div>The Game has finished</div>}
                {!isFinished && <PinsSelection maxValue={remaining} onSelect={this.handleSelectPin} />}
                <ScoreBoard frames={frames} total={total} />
            </div>
        );
    }
}
