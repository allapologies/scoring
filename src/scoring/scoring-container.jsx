import React from 'react';
import _ from 'lodash';

import { PinsSelection } from '../pins';
import { ScoreBoard } from '../scoreboard'

import { initialFrameIndex, firstRoll, maxPins } from '../constants'
import {
    createFrame,
    updateScoreInPreviousFrame, getNextFrameAndRoll, getNextRollRemainingPins, updateTotalInPreviousFrame
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

    updateScore = (pinsHitted) => {
        this.setState((state) => {
            const { frame, roll, frames } = state;

            let updatedFrames = [];

            if (roll === firstRoll) {
                updatedFrames = _.concat(
                    frames,
                    createFrame(pinsHitted, null, null))
            } else {
                updatedFrames = updateScoreInPreviousFrame(frames, roll, pinsHitted);
                updatedFrames = updateTotalInPreviousFrame(updatedFrames)
            }

            const { nextFrame, nextRoll } = getNextFrameAndRoll(frame, roll, pinsHitted);

            return {
                frames: updatedFrames,
                isFinished: false,
                total: calculate(updatedFrames),
                frame: nextFrame,
                roll: nextRoll,
                remaining: getNextRollRemainingPins(nextRoll, pinsHitted)
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
