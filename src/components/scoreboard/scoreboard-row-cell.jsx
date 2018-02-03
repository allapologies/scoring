import React, { PropTypes } from 'react'

import styles from './scoreboard.css'

const renderThird = (points) => (
    <td className={styles.points_third}>
        { points }
    </td>
)

export const Cell = (props) => (
    <td className={styles.cell}>
        <table className={styles.cellTable}>
            <tbody>
                <tr className={styles.cell_points_row}>
                    <td className={styles.cell_points_first}>
                        { props.isStrike ? 'X' : props.firstRoll }
                    </td>
                    <td className={styles.cell_points_second}>
                        { props.isSpare ? '/' : props.secondRoll }
                    </td>
                    {props.hasThird ? renderThird(props.thirdRoll) : null}
                </tr>
                <tr className={styles.cell_points_row}>
                    <td className={styles.points_total}>
                        { props.total }
                    </td>
                </tr>
            </tbody>
        </table>
    </td>
)

Cell.propTypes = {
    firstRoll: PropTypes.number,
    secondRoll: PropTypes.number,
    thirdRoll: PropTypes.number,
    hasThird: PropTypes.bool,
    isStrike: PropTypes.bool,
    isSpare: PropTypes.bool,
    total: PropTypes.number
}

Cell.defaultProps = {
    hasThird: false,
    isStrike: false,
    isSpare: false
}
