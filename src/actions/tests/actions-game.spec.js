import { startGame, initGame, replayGame, finishGame } from '../'

describe('actions: game', () => {

    it('exports', () => {
        expect(startGame).toBeDefined()
        expect(initGame).toBeDefined()
        expect(replayGame).toBeDefined()
        expect(finishGame).toBeDefined()
    })
})
