import _ from 'lodash'

import { getScore } from '../selectors'

const createRolls = (value, number) =>
    _.times(number, (index) => ({
        frameId: index / 2,
        rollId: index + 1,
        score: value
    }))

describe('selectors: ', () => {

    describe('getScore', () => {

        it('calculates zero rolls', () => {
            const data = []

            const expected = 0
            const actual = getScore.resultFunc(data)
            expect(actual).toBe(expected)
        })

        it('calculates single roll', () => {
            const data = createRolls(9, 1)

            const expected = 9
            const actual = getScore.resultFunc(data)
            expect(actual).toBe(expected)
        })

        it('calculates 20 rolls', () => {
            const data = createRolls(4, 20)

            const expected = 80
            const actual = getScore.resultFunc(data)
            expect(actual).toBe(expected)
        })

        it('calculates 20 empty rolls', () => {
            const data = _.concat(
                createRolls(0, 20)
            )

            const expected = 0
            const actual = getScore.resultFunc(data)
            expect(actual).toBe(expected)
        })

        it('calculates spare', () => {
            const data = _.concat(
                createRolls(9, 1),
                createRolls(1, 1),
                createRolls(4, 1),
                createRolls(5, 1),
            )

            const expected = 23
            const actual = getScore.resultFunc(data)
            expect(actual).toBe(expected)
        })

        it('calculates strike', () => {
            const data = _.concat(
                createRolls(10, 1),
                createRolls(1, 1),
                createRolls(4, 1)
            )

            const expected = 20
            const actual = getScore.resultFunc(data)
            expect(actual).toBe(expected)
        })

        it('calculates 10 strikes', () => {
            const data = _.concat(
                createRolls(10, 11)
            )

            const expected = 300
            const actual = getScore.resultFunc(data)
            expect(actual).toBe(expected)
        })

    })
})
