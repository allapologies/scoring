import React, { PropTypes } from 'react'
import _ from 'lodash'

import { Cell } from './scoreboard-row-cell'

const ROLLS_NUMBER = 10
const rollsArray = new Array(ROLLS_NUMBER)

export const ScoreBoardRow = (props) => {

    const { player, score, total } = props

    return (
        <tr>
            <td>
                {player.name}
            </td>
            {_.map(rollsArray, (roll, index) => {

                const { firstRoll, secondRoll, thirdRoll, isSpare, isStrike, totalScore } = score[index]

                return (
                    <Cell
                        key={index}
                        firstRoll={firstRoll}
                        secondRoll={secondRoll}
                        thirdRoll={thirdRoll}
                        isSpare={isSpare}
                        isStrike={isStrike}
                        total={totalScore}
                    />
                )
            }
            )}
            <td>
                {total}
            </td>
        </tr>
    )
}

ScoreBoardRow.propTypes = {
    player: PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.string
    }).isRequired,
    score: PropTypes.array.isRequired,
    total: PropTypes.number
}

ScoreBoardRow.defaultProps = {
    total: 0
}
