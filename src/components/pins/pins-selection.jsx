import React, { PropTypes } from 'react'
import _ from 'lodash'

import { Pin } from './pin'

export const PinsSelection = ({ onSelect, maxValue, isHidden }) => {
    if (isHidden) {
        return null
    }

    const values = _.times(maxValue + 1)
    return (
        <div>
            {_.map(values, (value) => <Pin key={value} value={value} onClick={onSelect} />)}
        </div>
    )
}

PinsSelection.propTypes = {
    onSelect: PropTypes.func.isRequired,
    maxValue: PropTypes.number.isRequired,
    isHidden: PropTypes.bool
}

PinsSelection.defaultProps = {
    isHidden: false
}
