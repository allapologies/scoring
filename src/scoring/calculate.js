import { forEach, slice, head } from 'lodash';
import { maxPins, firstRoll, secondRoll } from '../constants'

export const isStrike = (array, index) => array[index].pins === maxPins;

export const handleStrike = (arr) => {
    let result = 0;

    forEach(arr, (item) => {
        result += item.pins
    });

    return result
};

export const isSpare = pins => pins === maxPins;


export const handleSpare = (arr, index) => {


};

export const calculate = (scoringArray) => {
    let result = 0;
    let rollIndex = 0;

    for (let i = 0; i < scoringArray.length; i++) {
        if (isStrike(slice(scoringArray, rollIndex, rollIndex + 1))) {
            result += scoringArray[rollIndex].pins + handleStrike(slice(scoringArray, rollIndex, rollIndex + 1));
            rollIndex += 2;
        } else if (isSpare(scoringArray[rollIndex].pins)) {
            result += scoringArray[rollIndex].pins + handleSpare();
            rollIndex++;
        } else {
            result += scoringArray[rollIndex].pins;
            rollIndex++;
        }
    }

    return result
};
