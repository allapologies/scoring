import { currentScoreSelector } from '../selectors'

describe('selectors: ', () => {

    describe('currentScore returns score data for ', () => {

        it('empty set', () => {

            const expected = [
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                }
            ]

            const state = []

            const actual = currentScoreSelector.resultFunc(state)
            expect(actual).toEqual(expected)
        })

        it('first roll of first frame', () => {

            const expected = [
                {
                    firstRoll: 3,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null

                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                }
            ]

            const state = [{
                frameId: 1,
                rollId: 1,
                score: 3
            }]

            const actual = currentScoreSelector.resultFunc(state)
            expect(actual).toEqual(expected)
        })
        it('second roll of first frame', () => {

            const expected = [
                {
                    firstRoll: 5,
                    secondRoll: 4,
                    isStrike: false,
                    isSpare: false,
                    totalScore: 9
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null

                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                }
            ]

            const state = [{
                frameId: 1,
                rollId: 1,
                score: 5
            },
                {
                    frameId: 1,
                    rollId: 2,
                    score: 4
                }
            ]

            const actual = currentScoreSelector.resultFunc(state)
            expect(actual).toEqual(expected)
        })
        it('first roll of second frame', () => {

            const expected = [
                {
                    firstRoll: 5,
                    secondRoll: 4,
                    isStrike: false,
                    isSpare: false,
                    totalScore: 9
                },
                {
                    firstRoll: 1,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null

                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                }
            ]

            const state = [{
                frameId: 1,
                rollId: 1,
                score: 5
            },
                {
                    frameId: 1,
                    rollId: 2,
                    score: 4
                },
                {
                    frameId: 2,
                    rollId: 1,
                    score: 1
                }
            ]

            const actual = currentScoreSelector.resultFunc(state)
            expect(actual).toEqual(expected)
        })

        it('spare in first frame, no next', () => {

            const expected = [
                {
                    firstRoll: 5,
                    secondRoll: 5,
                    isStrike: false,
                    isSpare: true,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                }
            ]

            const state = [
                {
                    frameId: 1,
                    rollId: 1,
                    score: 5
                },
                {
                    frameId: 1,
                    rollId: 2,
                    score: 5
                }

            ]

            const actual = currentScoreSelector.resultFunc(state)
            expect(actual).toEqual(expected)
        })

        it('spare in first frame', () => {

            const expected = [
                {
                    firstRoll: 5,
                    secondRoll: 5,
                    isStrike: false,
                    isSpare: true,
                    totalScore: 11
                },
                {
                    firstRoll: 1,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                }
            ]

            const state = [{
                frameId: 1,
                rollId: 1,
                score: 5
            },
                {
                    frameId: 1,
                    rollId: 2,
                    score: 5
                },
                {
                    frameId: 2,
                    rollId: 1,
                    score: 1
                }
            ]

            const actual = currentScoreSelector.resultFunc(state)
            expect(actual).toEqual(expected)
        })
        it('strike in first frame', () => {

            const expected = [
                {
                    firstRoll: 10,
                    secondRoll: null,
                    isStrike: true,
                    isSpare: false,
                    totalScore: 13
                },
                {
                    firstRoll: 1,
                    secondRoll: 2,
                    isStrike: false,
                    isSpare: false,
                    totalScore: 16
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                }
            ]

            const state = [
                {
                    frameId: 1,
                    rollId: 1,
                    score: 10
                },
                {
                    frameId: 2,
                    rollId: 1,
                    score: 1
                },
                {
                    frameId: 2,
                    rollId: 2,
                    score: 2
                }
            ]

            const actual = currentScoreSelector.resultFunc(state)
            expect(actual).toEqual(expected)
        })
        it('strike in second frame, spare in third', () => {

            const expected = [
                {
                    firstRoll: 1,
                    secondRoll: 1,
                    isStrike: false,
                    isSpare: false,
                    totalScore: 2
                },
                {
                    firstRoll: 10,
                    secondRoll: null,
                    isStrike: true,
                    isSpare: false,
                    totalScore: 22
                },
                {
                    firstRoll: 4,
                    secondRoll: 6,
                    isStrike: false,
                    isSpare: true,
                    totalScore: 32
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                },
                {
                    firstRoll: null,
                    secondRoll: null,
                    isStrike: false,
                    isSpare: false,
                    totalScore: null
                }
            ]

            const state = [
                {
                    frameId: 1,
                    rollId: 1,
                    score: 1
                },
                {
                    frameId: 1,
                    rollId: 2,
                    score: 1
                },
                {
                    frameId: 2,
                    rollId: 1,
                    score: 10
                },
                {
                    frameId: 3,
                    rollId: 1,
                    score: 4
                },
                {
                    frameId: 3,
                    rollId: 2,
                    score: 6
                }
            ]

            const actual = currentScoreSelector.resultFunc(state)
            expect(actual).toEqual(expected)
        })
    })
})
