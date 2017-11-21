import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types';

import { Cell } from './scoreboard-row-cell'

import {framesNumber} from '../constants'

// const frames = _.map(new Array(framesNumber), (item, index) => index +1 );

export const ScoreBoardRow = (props) => {

    const { score, total } = props

    return (
        <tr>
            {_.map(score, (roll, index) => {

                // const { firstRoll, secondRoll, thirdRoll, isSpare, isStrike, totalScore } = score[index]

                return (
                    <Cell
                        key={index}
                        firstRoll={1}
                        secondRoll={2}
                        thirdRoll={3}
                        isSpare={false}
                        isStrike={false}
                        total={10}
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
    score: PropTypes.array.isRequired,
    total: PropTypes.number
}

ScoreBoardRow.defaultProps = {
    total: 0
}
