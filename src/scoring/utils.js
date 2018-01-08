import _ from 'lodash'
import { firstRoll, secondRoll, maxPins, framesNumber } from '../constants'
import { calculate } from './'

export const isSpare = (pinsHitted, roll) => roll === secondRoll && (pinsHitted === maxPins);
export const isStrike = (pinsHitted, roll) => roll === firstRoll && (pinsHitted === maxPins);

export const incrementFrame = (frameIndex) => frameIndex + 1;
export const cyclicChangeRoll = (rollIndex) => rollIndex === firstRoll ? secondRoll : firstRoll;


const rollMap = {
    '1': 'firstRoll',
    '2': 'secondRoll',
    '3': 'thirdRoll'
};

export const createFrame = (firstRoll, secondRoll, thirdRoll, total = null) => (
    {
        firstRoll,
        secondRoll,
        thirdRoll,
        total
    }
);

export const updateScoreInPreviousFrame = (frames, rollIndex, score) =>
    _.map(frames, (frame, index) => index === frames.length - 1
        ? _.assign({}, frame, { [rollMap[rollIndex]]: score })
        : frame
    );

export const updateTotalInPreviousFrame = (frames) =>
    _.map(frames, (frame, index) => index === frames.length - 1
        ? _.assign({}, frame, { total: calculate(frames) })
        : frame
    );

export const getNextFrameAndRoll = (currentFrame, currentRoll, pinsHitted) => {
    const result = { nextFrame: null, nextRoll: null };

    if (isStrike(pinsHitted, currentRoll)) {
        result.nextRoll = firstRoll;
        result.nextFrame = incrementFrame(currentFrame);
    } else if (isSpare(pinsHitted, currentRoll)) {
        result.nextRoll = firstRoll;
        result.nextFrame = incrementFrame(currentFrame);
    } else {
        result.nextRoll = cyclicChangeRoll(currentRoll);
        result.nextFrame = currentRoll === secondRoll ? incrementFrame(currentFrame) : currentFrame;
    }

    return result
};

export const getNextRollRemainingPins = (nextRollIndex, pinsHitted) =>
    nextRollIndex === firstRoll ? maxPins : maxPins - pinsHitted;