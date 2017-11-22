import _ from 'lodash'
import { firstRoll, secondRoll, maxPins, framesNumber } from '../constants'

export const isSpare = (pinsHitted, roll) => roll === secondRoll && (pinsHitted === maxPins);
export const isStrike = (pinsHitted, roll) => roll === firstRoll && (pinsHitted === maxPins);

export const cyclicChangeFrame = (frameIndex) => frameIndex <= framesNumber ? frameIndex + 1 : frameIndex;
export const cyclicChangeRoll = (rollIndex) => rollIndex === firstRoll ? secondRoll : firstRoll;


export const mapRollsToFrames = (rolls) => _.reduce(
    rolls, (result, roll) => result[roll.frame]
        ? result[roll.frame][roll.roll] = roll.pins
        : result[roll.frame] = [[roll.pins]]
    , []
);


//roll//
// this.frame = frame;
// this.roll = roll;
// this.pins = pins;
//
// result

// {
//     first: value
//     second: value,
//     third: value
// }