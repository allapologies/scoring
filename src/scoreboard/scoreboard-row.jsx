import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types';

import { Cell } from './scoreboard-row-cell'

import {framesNumber} from '../constants'

// const frames = _.map(new Array(framesNumber), (item, index) => index +1 );

export const ScoreBoardRow = (props) => {

    const { score, total } = props
    if (_.isEmpty(score)) {
        return null
    }

    return (
        <tr>
            {_.map(score, (frame, index) => {

                const [first, second, third] = frame;

                return (
                    <Cell
                        key={index}
                        firstRoll={first}
                        secondRoll={second}
                        thirdRoll={third}
                        isSpare={second === 10}
                        isStrike={first === 10}
                        total={first+second}
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
