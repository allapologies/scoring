import { Map as iMap, List as iList } from 'immutable'
import { getFramesSlice, framesDataSelector } from '../selectors'

describe('selectors: ', () => {

    describe('getFramesSlice', () => {
        it('returns frames slice', () => {
            const state = {
                frames: {
                    anyProp: 'anyString'
                }
            }

            const expected = {
                anyProp: 'anyString'
            }

            const actual = getFramesSlice(state)

            expect(actual).toEqual(expected)
        })
    })

    describe('framesDataSelector', () => {
        it('returns frames data', () => {
            const state = iMap({
                data: iList(['a'])
            })

            const expected = ['a']

            const actual = framesDataSelector.resultFunc(state)

            expect(actual).toEqual(expected)
        })

        it('works with composing selectors', () => {
            const state = {
                frames: iMap({
                    data: iList(['a'])
                })
            }
            const expected = ['a']

            const actual = framesDataSelector(state)

            expect(actual).toEqual(expected)
        })
    })
})
