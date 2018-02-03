import React from 'react'

import { ScoreBoardHead } from './scoreboard-head'
import { ScoreboardBody } from './scoreboard-body'

export const ScoreBoard = () => (
    <table>
        <ScoreBoardHead />
        <ScoreboardBody />
    </table>
)
