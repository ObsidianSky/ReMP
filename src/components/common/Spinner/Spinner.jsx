import React from 'react';
import PropTypes from 'prop-types';

if (process.env.BROWSER) {
    require('./Spinner.scss');
}

const Spinner = ({ visible }) => (
    <div className="overlay" style={ { display: `${ visible ? 'block' : 'none' }` } }>
        <div className="overlay__inner">
            <div className="spinner">
                <div className="spinner__bounce1"></div>
                <div className="spinner__bounce2"></div>
            </div>
        </div>
    </div>
);

Spinner.defaultProps = {
    visible: false
};

Spinner.propTypes = {
    visible: PropTypes.bool.isRequired
};

export default Spinner;