import React from 'react'
import _ from 'lodash'

import { FRAMES_COUNT } from '../../actions/constants'

export const ScoreBoardHead = () => {
    const head = new Array(FRAMES_COUNT)

    return (
      <tbody>
        <tr>
            <th>Player</th>
            {_.map(head, (id, key) => (
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
