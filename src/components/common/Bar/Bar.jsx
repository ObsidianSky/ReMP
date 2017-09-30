import React from 'react';
import PropTypes from 'prop-types';
import './Bar.scss'

const Bar = ({ title, children }) => (
    <div className="bar">
        <div className="bar__inner">
            <div className="bar__left">
                <div className="bar__title">{title}</div>
            </div>
            <div className="bar__right">
                {children}
            </div>
        </div>
    </div>
);

Bar.defaultProps = {
    title: ''
};

Bar.propTypes = {
    title: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
};

export default Bar;