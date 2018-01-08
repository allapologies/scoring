import { calculate } from '../';

export const createFrame = (firstRoll = null, secondRoll = null, total = null) => ({
    firstRoll,
    secondRoll,
    total
});


const createFrames = (framesNumber, pins) => {
    const result = [];

    for (let i = 0; i < framesNumber; i++) {
        result.push(createFrame(pins, pins))
    }

    return result

};

describe('calculate', () => {
    it('function of arity 1', () => {
        const expected = 1;
        const actual = calculate.length;

        expect(actual).toBe(expected);
    });
    it('returns an integer', () => {
        const expected = 'number';
        const actual = typeof calculate();

        expect(actual).toBe(expected);
    });
    it('calculates single roll in frame', () => {
        const frames = [createFrame(5)];

        const expected = 5;
        const actual = calculate(frames);

        expect(actual).toBe(expected);
    });
    it('calculates 2 rolls in a frame', () => {
        const frames = createFrames(1, 3);

        const expected = 6;
        const actual = calculate(frames);

        expect(actual).toBe(expected);
    });
    it('calculates 10 frames', () => {
        const frames = createFrames(10, 4);
        const expected = 80;
        const actual = calculate(frames);

        expect(actual).toBe(expected);
    });
    it('calculates strike', () => {
        const frames = [
            {
                firstRoll: 10,
                secondRoll: null,
            },
            {
                firstRoll: 2,
                secondRoll: 5
            }
        ];


        const expected = 24;
        const actual = calculate(frames);

        expect(actual).toBe(expected);
    });
    it('calculates spare', () => {
        const frames = [
            {
                firstRoll: 8,
                secondRoll: 2
            },
            {
                firstRoll: 3,
                secondRoll: null
            }
        ];

        const expected = 16;
        const actual = calculate(frames);

        expect(actual).toBe(expected);
    });
});
