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
    score: PropTypes.array
};

ScoreBoard.defaultProps = {
    score: []
};

