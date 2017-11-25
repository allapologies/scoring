import React from 'react';
import PropTypes from 'prop-types';

import { ScoreBoardHead } from './scoreboard-head'
import { ScoreboardBody } from './scoreboard-body'

export const ScoreBoard = ({ score }) => (
    <table>
        <ScoreBoardHead />
        <ScoreboardBody score={score}/>
    </table>
);

ScoreBoard.propTypes = {
    score: PropTypes.arrayOf(PropTypes.shape({
        frame: PropTypes.number,
        first: PropTypes.number,
        second: PropTypes.number,
        third: PropTypes.number
    }))
};

ScoreBoard.defaultProps = {
    score: []
};

