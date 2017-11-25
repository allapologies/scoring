import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types';

import { Cell } from './scoreboard-row-cell'

export const ScoreBoardRow = (props) => {

    const { score, total } = props;
    if (_.isEmpty(score)) {
        return null
    }

    return (
        <tr>
            {_.map(score, (frameData, index) => {

                const { frame, first, second, third } = frameData;

                return (
                    <Cell
                        key={frame + index}
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
};

ScoreBoardRow.propTypes = {
    score: PropTypes.arrayOf(PropTypes.shape({
        frame: PropTypes.number,
        first: PropTypes.number,
        second: PropTypes.number,
        third: PropTypes.number
    })),
    total: PropTypes.number
};

ScoreBoardRow.defaultProps = {
    total: 0
};
