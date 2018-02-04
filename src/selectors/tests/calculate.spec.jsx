import { calculate } from '../';

describe('calculate', () => {
    it('function of arity 1', () => {
        const expected = 1;
        const actual = calculate.length;

        expect(actual).toBe(expected);
    });
    it('returns an integer', () => {
        const expected = 'number';
        const actual = typeof calculate([1]);

        expect(actual).toBe(expected);
    });
    it('calculates single roll in frame', () => {
        const rolls = [5];

        const expected = 5;
        const actual = calculate(rolls);

        expect(actual).toBe(expected);
    });
    it('calculates 2 rolls in a frame', () => {
        const rolls = [3, 3];

        const expected = 6;
        const actual = calculate(rolls);

        expect(actual).toBe(expected);
    });
    it('calculates 10 frames', () => {
        const rolls = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];
        const expected = 80;
        const actual = calculate(rolls);

        expect(actual).toBe(expected);
    });
    it('calculates strike', () => {
        const rolls = [10, 2, 5]

        const expected = 24;
        const actual = calculate(rolls);

        expect(actual).toBe(expected);
    });
    it('calculates spare', () => {
        const frames = [8, 2, 3];

        const expected = 16;
        const actual = calculate(frames);

        expect(actual).toBe(expected);
    });
    it('calculates 10 strikes', () => {
        const frames = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

        const expected = 300;
        const actual = calculate(frames);

        expect(actual).toBe(expected);
    });
});
