import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss'

export default class Button extends React.Component {
    render() {
        return (
            <button className="btn btn--wide btn--pink" onClick={() => this.props.onClick()}>Search</button>
        )
    }
}

Button.propTypes = {
    onClick: PropTypes.func,
};