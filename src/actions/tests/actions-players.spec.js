/* eslint-env jasmine */

import { addPlayer, removePlayer } from '../'

describe('actions: players', () => {

    it('exports', () => {
        expect(addPlayer).toBeDefined()
        expect(removePlayer).toBeDefined()
    })
})
