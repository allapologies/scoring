import { forEach } from 'lodash';

export const calculate = (scoringArray) => {
    let result = 0;

    forEach(scoringArray, (rollDataObject) => {
        const { pins } = rollDataObject;
        result += pins
    });

    return result
};
