import _, { forEach, map, assign, toInteger, find, get, isEmpty, last, dropRight } from 'lodash'
import { firstRoll, secondRoll, maxPins, framesNumber } from '../constants'

export const isSpare = (pinsHitted, roll) => roll === secondRoll && (pinsHitted === maxPins);
export const isStrike = (pinsHitted, roll) => roll === firstRoll && (pinsHitted === maxPins);

export const cyclicChangeFrame = (frameIndex) => frameIndex <= framesNumber ? frameIndex + 1 : frameIndex;
export const cyclicChangeRoll = (rollIndex) => rollIndex === firstRoll ? secondRoll : firstRoll;


const rollMap = {
    '1': 'first',
    '2': 'second',
    '3': 'third'
};

export const getPreviousTotal = (score, currentFrame) => {
    const previousData = get(find(score, { frame: currentFrame - 1 }));
    const { frame, first = 0, second = 0, third = 0 } = previousData;

    return toInteger(first) + toInteger(second) + toInteger(third)
};

export const mapRollsToFrames = (gameRolls) => {
    const result = [];

    forEach(gameRolls, (rollItem) => {
        if (result[rollItem.frame - 1]) {
            result[rollItem.frame - 1][rollMap[rollItem.roll]] = rollItem.pins
        } else {
            result.push({ [rollMap[rollItem.roll]]: rollItem.pins, frame: rollItem.frame })
        }
    });

    return result
};


const countRegularFrame = ({ frame, first = 0, second = 0, third = 0 }, score) => {
        return toInteger(first) + toInteger(second) + toInteger(third) + getPreviousTotal(score, frame)
    }
;

const getTotal = (data, score) => {
    const { frame, first, second, third } = data;
    if (isStrike(first, 1)) {
        return null
    }
    if (isSpare(first + second, 2)) {
        return null
    }

    return countRegularFrame(data, score)
};

export const calculateScoreData = (score) => {

    return map(score, (frameData, index) => {
        return assign({}, frameData, { total: getTotal(frameData, score) })
    })

};

export const has2rollsInFrame = (frameData = {}) => {
    return !_.isNull(_.get(frameData, 'first', null)) && !_.isNull(_.get(frameData, 'second', null))
};

export const hasNextRoll = (frames = []) => {
    const firstFrame = _.head(frames) || {};
    return !_.isNull(_.get(firstFrame, 'first', null));
};

export const hasNext2Rolls = (frames = []) => {

    const next = _.slice(frames, 0, 1);
    const afterNext = _.slice(frames, 1, 2);

    return (hasNextRoll(next) && hasNextRoll(afterNext)) || has2rollsInFrame(_.head(frames))
};

// export const getCurrentTotal = (score, currentTotal = null) => {
//     if (isEmpty(score)) {
//         return currentTotal
//     }
//
//     const { first = 0, second = 0, third = 0 } = last(score);
//     let currentFrameTotal = null;
//     if (isStrike(first, 1) && hasNext2Rolls(_.slice(score, 1, 3))) {
//
//     } else {
//         currentFrameTotal = currentTotal + first + second + third;
//     }
//     return getCurrentTotal(dropRight(score), currentFrameTotal);
// };

export const getCurrentTotal = (score) => {
   let result = 0;

   _.forEach(score, (frameData, index) => {
       if (isStrike(frameData.first, 1)) {
           if (hasNext2Rolls(_.slice(score, index, index + 2))) {
               result += _.slice(score, index, index + 2)
           }
       } else if (isSpare(frameData.first + frameData.second)) {

       }

       result += frameData.first + frameData.second

   });

   return result
};

