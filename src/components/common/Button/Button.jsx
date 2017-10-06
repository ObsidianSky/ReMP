import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss'

const Button = ({ className, onClick, children, text}) => (
    <button className={`btn ${className}`} onClick={onClick} type="button">
        {children || text}
    </button>
);

Button.defaultProps = {
    text: ''
};

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ])
};

export default Button;