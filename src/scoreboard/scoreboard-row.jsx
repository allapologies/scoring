import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types';

import { Cell } from './scoreboard-row-cell';

import { maxPins, framesNumber } from '../constants'

const rows = new Array(framesNumber).fill().map((item, i) => i);

export const ScoreBoardRow = ({ frames, total }) => {

    return (
        <tr>
            {_.map(rows, (row) => {
                    if (!frames[row]) {
                        return <td key={row}/>
                    }
                    const { firstRoll, secondRoll, thirdRoll, total } = frames[row];
                    return (
                        <Cell
                            key={row}
                            firstRoll={firstRoll}
                            secondRoll={secondRoll}
                            thirdRoll={thirdRoll}
                            isSpare={secondRoll === maxPins}
                            isStrike={firstRoll === maxPins}
                            total={total}
                        />
                    )
                }
            )}
            <td>
                {total}
            </td>
        </tr>
    )
};

ScoreBoardRow.propTypes = {
    frames: PropTypes.arrayOf(PropTypes.shape({
        firstRoll: PropTypes.number,
        secondRoll: PropTypes.number,
        thirdRoll: PropTypes.number,
        total: PropTypes.number
    })),
    total: PropTypes.number
};

ScoreBoardRow.defaultProps = {
    frames: [],
    total: void 0
};
