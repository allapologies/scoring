import React, { PropTypes } from 'react'
import _ from 'lodash'

export const Pin = ({ onClick, value }) => {
    const handleClick = () => onClick(value)

    return (
        <button
            type="button"
            onClick={handleClick}
        >
            {value}
        </button>
    )
}

Pin.propTypes = {
    value: PropTypes.number.isRequired,
    onClick: PropTypes.func
}

Pin.defaultProps = {
    onClick: _.noop
}
