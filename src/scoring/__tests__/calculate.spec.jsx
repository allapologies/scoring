import { calculate } from '../';

export const createRolls = (number, pins) => {
    const rolls = [];

    for (let i = 0; i < number; i++) {
        rolls.push(
            {
                frame: null,
                roll: null,
                pins
            }
        )
    }

    return rolls
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
    it('calculates single roll', () => {
        const score = createRolls(1, 5);

        const expected = 5;
        const actual = calculate(score);

        expect(actual).toBe(expected);
    });
    it('calculates 2 rolls', () => {
        const score = createRolls(2, 3);

        const expected = 6;
        const actual = calculate(score);

        expect(actual).toBe(expected);
    });
    it('calculates 20 rolls', () => {
        const score = createRolls(4, 20);

        const expected = 80;
        const actual = calculate(score);

        expect(actual).toBe(expected);
    });
});
