import { mapRollsToFrames, calculateScoreData, getCurrentTotal } from '../utils';
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
});
