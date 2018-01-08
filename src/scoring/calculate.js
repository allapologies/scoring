import _ from 'lodash';
import { framesNumber, maxPins, secondRoll } from '../constants'

export const isStrike = (rolls, index) => rolls[index] === maxPins;


export const handleStrike = (rolls, index) => {
    return rolls[index] + rolls[index + 1] + rolls[index + 2]
};

export const isSpare = (rolls, index) => {
    return rolls[index] + rolls[index + 1] === maxPins
};

export const handleSpare = (rolls, index) => rolls[index] + rolls[index + 1] + rolls[index + 2];

const mapFramesToRolls = (frames) =>
    _.reduce(frames, (result, frame, idx) =>
        _.concat(result,
            frame.firstRoll,
            frame.firstRoll !== maxPins ? frame.secondRoll : [],
            frame.thirdRoll || []
        ), []);


export const calculate = (frames) => {

    const rolls = mapFramesToRolls(frames);
    let result = 0;
    let rollIndex = 0;

    for (let roll = 0; roll < rolls.length; roll++) {
        if (isStrike(rolls, rollIndex)) {
            result += handleStrike(rolls, rollIndex) || 0;
            rollIndex += 1;
        } else if (isSpare(rolls, rollIndex)) {
            result += handleSpare(rolls, rollIndex) || 0;
            rollIndex += 2;
        } else {
            result += rolls[rollIndex] || 0;
            rollIndex += 1;
        }
    }

    return result
};




