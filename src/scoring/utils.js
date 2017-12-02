import _, { forEach, map, assign, toInteger, find, get, isEmpty, last, dropRight } from 'lodash'
import { firstRoll, secondRoll, maxPins, framesNumber } from '../constants'

export const isSpare = (pinsHitted, roll) => roll === secondRoll && (pinsHitted === maxPins);
export const isStrike = (pinsHitted, roll) => roll === firstRoll && (pinsHitted === maxPins);

export const incrementFrame = (frameIndex) => frameIndex + 1;
export const cyclicChangeRoll = (rollIndex) => rollIndex === firstRoll ? secondRoll : firstRoll;


const rollMap = {
    '1': 'first',
    '2': 'second',
    '3': 'third'
};

export const createRoll = (frame, roll, pins, total) => (
    {
        frame,
        roll,
        pins,
        total
    }
);

export const createFrame = (firstRoll, secondRoll, total) => (
    {
        firstRoll,
        secondRoll,
        total
    }
);
// export const mapRollsToFrames = (rolls, frameResults) => {
//     const result = [];
//
//     forEach(rolls, (rollItem) => {
//         if (result[rollItem.frame - 1]) {
//             result[rollItem.frame - 1][rollMap[rollItem.roll]] = rollItem.pins
//         } else {
//             result.push({ [rollMap[rollItem.roll]]: rollItem.pins, frame: rollItem.frame })
//         }
//     });
//
//     return result
// };

// firstRoll: PropTypes.number,
//     secondRoll: PropTypes.number,
//     thirdRoll: PropTypes.number,
//     total: PropTypes.number

const allFrames = new Array(framesNumber).fill().map((item, i) => i);

export const mapRollsToFrames = (rolls, frameResults) => {

};

