import { getFramesData } from '../';

describe('calculate', () => {
    it('gets information for single roll', () => {
        const rolls = [5];
        const expected = [
            {
                firstRoll: 5,
                frameScore: 5
            }
        ]
        const actual = getFramesData.resultFunc(rolls);

        expect(actual).toEqual(expected);
    });
    it('calculates 2 rolls in a frame', () => {
        const rolls = [3, 3];

        const expected = [
            {
                firstRoll: 3,
                secondRoll: 3,
                frameScore: 6
            }
        ]
        const actual = getFramesData.resultFunc(rolls);

        expect(actual).toEqual(expected);
    });
    it('calculates 3 rolls', () => {
        const rolls = [3, 3, 5];

        const expected = [
            {
                firstRoll: 3,
                secondRoll: 3,
                frameScore: 6
            },
            {
                firstRoll: 5,
                frameScore: 11
            }
        ]
        const actual = getFramesData.resultFunc(rolls);

        expect(actual).toEqual(expected);
    });
    it('calculates 10 frames', () => {
        const rolls = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];
        const expected = [
            {
                firstRoll: 4,
                secondRoll: 4,
                frameScore: 8
            },
            {
                firstRoll: 4,
                secondRoll: 4,
                frameScore: 16
            },
            {
                firstRoll: 4,
                secondRoll: 4,
                frameScore: 24
            },
            {
                firstRoll: 4,
                secondRoll: 4,
                frameScore: 32
            },
            {
                firstRoll: 4,
                secondRoll: 4,
                frameScore: 40
            },
            {
                firstRoll: 4,
                secondRoll: 4,
                frameScore: 48
            },
            {
                firstRoll: 4,
                secondRoll: 4,
                frameScore: 56
            },
            {
                firstRoll: 4,
                secondRoll: 4,
                frameScore: 64
            },
            {
                firstRoll: 4,
                secondRoll: 4,
                frameScore: 72
            },
            {
                firstRoll: 4,
                secondRoll: 4,
                frameScore: 80
            }

        ]

        const actual = getFramesData.resultFunc(rolls);
        expect(actual).toEqual(expected);
    });
    it('calculates strike', () => {
        const rolls = [10, 2, 5]

        const expected = [
            {
                firstRoll: 10,
                frameScore: 17
            },
            {
                firstRoll: 2,
                secondRoll: 5,
                frameScore: 24
            }
        ]

        const actual = getFramesData.resultFunc(rolls);
        expect(actual).toEqual(expected);
    });
    // it('calculates spare', () => {
    //     const frames = [8, 2, 3];
    //
    //     const expected = 16;
    //     const actual = calculate(frames);
    //
    //     expect(actual).toBe(expected);
    // });
    // it('calculates 10 strikes', () => {
    //     const frames = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
    //
    //     const expected = 300;
    //     const actual = calculate(frames);
    //
    //     expect(actual).toBe(expected);
    // });
});
