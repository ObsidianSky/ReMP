import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import './ButtonLink.scss'

const ButtonLink = ({ className, children, ...rest }) => (
    <div className={`btn-link ${className}`}>
        <Link {...rest}> {children} </Link>
    </div>
);

ButtonLink.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

export default ButtonLink;