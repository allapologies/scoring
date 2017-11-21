import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types';


import { framesNumber } from '../constants'

const frames = _.map(new Array(framesNumber), (item, index) => index +1 );

export const ScoreBoardHead = () => {

    return (
      <tbody>
        <tr>
            {_.map(frames, (id, key) => (
                <th
                    key={key + 1}
                >
                    { key + 1}
                </th>
            ))}
            <th>Total</th>
        </tr>
      </tbody>
    )
}
