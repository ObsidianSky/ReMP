import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

if (process.env.BROWSER) {
	require('./Header.scss');
}

const Header = ({TopComponent, ContentComponent}) => (
    <header className="header">
        <div className="header__background">
            <div className="header__shadow">
                <div className="header__inner">
                    <div className="header__top-bar">
                        <TopComponent/>
                    </div>
                    <div className="header__content">
                        <ContentComponent/>
                    </div>
                </div>
            </div>
        </div>
    </header>
);

Header.propTypes = {
    TopComponent: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.func
    ]).isRequired,
    ContentComponent: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.func
    ]).isRequired
};

export default Header;