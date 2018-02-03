import { framesSelector, framesDataSelector } from '../selectors'

describe('selectors: ', () => {
    describe('framesSelector', () => {
        it('returns frames slice', () => {
            const state = {
                frames: {
                    anyProp: 'anyString'
                }
            }

            const expected = {
                anyProp: 'anyString'
            }

            const actual = framesSelector(state)

            expect(actual).toEqual(expected)
        })
    })

    describe('framesDataSelector', () => {
        it('returns frames data', () => {
            const state = {
                frames: {
                    data: ['a']
                }
            }

            const expected = ['a']

            const actual = framesDataSelector(state)

            expect(actual).toEqual(expected)
        })
    })
})
