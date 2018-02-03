import { getMax } from '../helpers'

xdescribe('helpers', () => {
    describe('getMax', () => {
        it('exports', () => {
            expect(getMax).toBeDefined()
        })
        it('returns number', () => {

            const expected = 'number'
            const actual = getMax()

            expect(typeof actual).toEqual(expected)
        })

        it('returns 10 if passed empty object', () => {
            const expected = 10

            const data = {}
            const actual = getMax(data)

            expect(actual).toEqual(expected)
        })

        it('returns 5 if object with one key and value 5', () => {
            const expected = 5

            const data = {
                '1': 5
            }
            const actual = getMax(data)

            expect(actual).toEqual(expected)
        })

        it('returns 0 if object with one key and value 10', () => {
            const expected = 0

            const data = {
                '1': 10
            }
            const actual = getMax(data)

            expect(actual).toEqual(expected)
        })

        it('returns 10 if first key === 0', () => {
            const expected = 10

            const data = {
                '0': 0
            }
            const actual = getMax(data)

            expect(actual).toEqual(expected)
        })
    })
})
