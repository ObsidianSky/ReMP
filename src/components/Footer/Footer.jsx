import React from 'react';
import PropTypes from 'prop-types';
import './Footer.scss'
import Logo from '../common/Logo/Logo';

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <Logo/>
            </div>
        )
    }
}

Footer.propTypes = {};