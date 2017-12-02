import { forEach, slice, head, reduce, map, get } from 'lodash';
import { maxPins, firstRoll, secondRoll, framesNumber } from '../constants'

export const isStrike = (rolls, index) => rolls[index] === maxPins;


export const handleStrike = (rolls, index) => {
    return rolls[index] + rolls[index + 1] + rolls[index + 2]
};

export const isSpare = (rolls, index) => {
    return rolls[index] + rolls[index + 1] === maxPins
};

export const handleSpare = (rolls, index) => rolls[index] + rolls[index + 1] + rolls[index + 2];

export const calculate = (scoringArray) => {

    const rolls = map(scoringArray, (item) => item.pins);

    let result = 0;
    let rollIndex = 0;

    for (let frameIndex = 0; frameIndex < framesNumber; frameIndex++) {
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






