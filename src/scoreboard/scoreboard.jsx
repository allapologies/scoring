import React from 'react';
import PropTypes from 'prop-types';

import { ScoreBoardHead } from './scoreboard-head'
import { ScoreboardBody } from './scoreboard-body'

export const ScoreBoard = ({ frames, total }) => (
    <table>
        <ScoreBoardHead />
        <ScoreboardBody frames={frames} total={total}/>
    </table>
);

ScoreBoard.propTypes = {
    frames: PropTypes.arrayOf(PropTypes.shape({
        firstRoll: PropTypes.number,
        secondRoll: PropTypes.number,
        thirdRoll: PropTypes.number,
        total: PropTypes.number
    })),
    total: PropTypes.number
};

ScoreBoard.defaultProps = {
    frames: [],
    total: void 0
};

