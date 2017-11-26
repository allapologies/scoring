import {
    has2rollsInFrame,
    mapRollsToFrames,
    calculateScoreData,
    getCurrentTotal,
    hasNextRoll,
    hasNext2Rolls,
    getNext2Rolls
} from '../utils';
import { isArray } from 'lodash'


describe('getCurrentTotal', () => {
    it('exports', () => {
        expect(getCurrentTotal).toBeDefined();
    });
    it('returns for one frame', () => {

        const scoreData = [
            {
                frame: 1,
                first: 1,
                second: 5
            }
        ];


        const expected = 6;

        const actual = getCurrentTotal(scoreData, 0);
        expect(actual).toEqual(expected);
    });
    it('returns for two frames', () => {

        const scoreData = [
            {
                frame: 1,
                first: 1,
                second: 5
            },
            {
                frame: 2,
                first: 1
            }
        ];


        const expected = 7;

        const actual = getCurrentTotal(scoreData);
        expect(actual).toEqual(expected);
    });

    it('returns for 10 frames', () => {

        const scoreData = [
            {
                frame: 1,
                first: 4,
                second: 4
            },
            {
                frame: 2,
                first: 4,
                second: 4
            },
            {
                frame: 3,
                first: 4,
                second: 4
            },
            {
                frame: 4,
                first: 4,
                second: 4
            },
            {
                frame: 5,
                first: 4,
                second: 4
            },
            {
                frame: 6,
                first: 4,
                second: 4
            },
            {
                frame: 7,
                first: 4,
                second: 4
            },
            {
                frame: 8,
                first: 4,
                second: 4
            },
            {
                frame: 9,
                first: 4,
                second: 4
            },
            {
                frame: 10,
                first: 4,
                second: 4
            }
        ];


        const expected = 80;

        const actual = getCurrentTotal(scoreData);
        expect(actual).toEqual(expected);
    });
    it('handles strike', () => {

        const scoreData = [
            {
                frame: 1,
                first: 10
            }
        ];


        const expected = null;

        const actual = getCurrentTotal(scoreData);
        expect(actual).toEqual(expected);
    });
    it('handles strike and next', () => {

        const scoreData = [
            {
                frame: 1,
                first: 10
            },
            {
                frame: 2,
                first: 1,
                second: 2
            }
        ];


        const expected = 16;

        const actual = getCurrentTotal(scoreData);
        expect(actual).toEqual(expected);
    });
    it('handles spare', () => {

        const scoreData = [
            {
                frame: 1,
                first: 2,
                second: 8
            }
        ];


        const expected = null;

        const actual = getCurrentTotal(scoreData);
        expect(actual).toEqual(expected);
    });
});
it('returns for 10 frames', () => {

    const scoreData = [
        {
            frame: 1,
            first: 4,
            second: 4
        },
        {
            frame: 2,
            first: 4,
            second: 4
        },
        {
            frame: 3,
            first: 4,
            second: 4
        },
        {
            frame: 4,
            first: 4,
            second: 4
        },
        {
            frame: 5,
            first: 4,
            second: 4
        },
        {
            frame: 6,
            first: 4,
            second: 4
        },
        {
            frame: 7,
            first: 4,
            second: 4
        },
        {
            frame: 8,
            first: 4,
            second: 4
        },
        {
            frame: 9,
            first: 4,
            second: 4
        },
        {
            frame: 10,
            first: 4,
            second: 4
        }
    ];


    const expected = 80;

    const actual = getCurrentTotal(scoreData);
    expect(actual).toEqual(expected);
});
describe('hasNextRoll', () => {
    it('returns true if next roll played', () => {

        const scoreData = [
            {
                frame: 1,
                first: 1
            }
        ];


        const expected = true;

        const actual = hasNextRoll(scoreData);
        expect(actual).toEqual(expected);
    });
    it('returns false if next roll have not played', () => {

        const scoreData = [
            {
                frame: 1,
                first: null
            }
        ];


        const expected = false;

        const actual = hasNextRoll(scoreData);
        expect(actual).toEqual(expected);
    });

});

describe('hasNext2Rolls', () => {
    it('returns true if next 2 rolls played', () => {

        const scoreData = [
            {
                frame: 1,
                first: 1,
                second: 2
            }
        ];


        const expected = true;

        const actual = hasNext2Rolls(scoreData);
        expect(actual).toEqual(expected);
    });
    it('returns true if next 2 frames played with strike', () => {

        const scoreData = [
            {
                frame: 1,
                first: 10
            },
            {
                frame: 2,
                first: 10
            }
        ];


        const expected = true;

        const actual = hasNext2Rolls(scoreData);
        expect(actual).toEqual(expected);
    });
    it('returns false if next frames closed with strike', () => {

        const scoreData = [
            {
                frame: 1,
                first: 10
            }
        ];


        const expected = false;

        const actual = hasNext2Rolls(scoreData);
        expect(actual).toEqual(expected);
    });
    it('returns false if only one roll played in next frame', () => {

        const scoreData = [
            {
                frame: 1,
                first: 5
            }
        ];

        const expected = false;

        const actual = hasNext2Rolls(scoreData);
        expect(actual).toEqual(expected);
    });

});

describe('has2rollsInFrame', () => {
    it('returns true if frame has 2 rolls played', () => {

        const frameData = {
            frame: 1,
            first: 1,
            second: 2
        };

        const expected = true;

        const actual = has2rollsInFrame(frameData);
        expect(actual).toEqual(expected);
    });
    it('returns false if frame does not have 2 rolls played', () => {

        const scoreData = {
            frame: 1,
            first: null

        };


        const expected = false;

        const actual = has2rollsInFrame(scoreData);
        expect(actual).toEqual(expected);
    });

});

describe('getNext2Rolls', () => {

    it('returns result for after strike', () => {

        const scoreData = [
            {
                frame: 1,
                first: 10
            },
            {
                frame: 2,
                first: 1,
                second: 2
            }
        ];


        const expected = 16;

        const actual = getNext2Rolls(scoreData);
        expect(actual).toEqual(expected);
    });

});