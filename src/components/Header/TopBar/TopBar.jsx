import React from 'react';
import { Route } from 'react-router-dom';

if (process.env.BROWSER) {
	require('./TopBar.scss');
}
import Logo from '../../common/Logo/Logo';
import HomeButton from './HomeButton/HomeButton';

const TopBar = () => (
    <div className="top-bar">
        <Logo/>
        <Route path="/film" component={HomeButton}/>
    </div>
);

export default TopBar;