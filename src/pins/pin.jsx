import React from 'react'
import PropTypes from 'prop-types';
import _ from 'lodash';

export class Pin extends React.PureComponent {

    static propTypes = {
        value: PropTypes.number.isRequired,
        onClick: PropTypes.func
    };

    static defaultProps = {
        onClick: _.noop
    };

    handleClick = () => this.props.onClick(this.props.value);

    render () {
        const { value } = this.props;
        return (
            <button
                type="button"
                onClick={this.handleClick}
            >
                {value}
            </button>
        )
    }

}


