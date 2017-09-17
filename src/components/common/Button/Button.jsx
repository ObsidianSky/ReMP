import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss'

export default class Button extends React.Component {
    render() {
        return (
            <button className={`btn ${this.props.className}`} onClick={() => this.props.onClick()}>
                {this.props.children || this.props.text}
            </button>
        )
    }
}

Button.defaultProps = {
    text: 'Default text',
    onClick: () => console.log('default onClick')

};

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string
};