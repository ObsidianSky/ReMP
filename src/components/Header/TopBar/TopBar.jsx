import React from 'react';
import { Route } from 'react-router-dom';
import './TopBar.scss'
import Logo from '../../common/Logo/Logo';
import ButtonLink from '../../common/ButtonLink/ButtonLink';

const TopBar = () => (
    <div className="top-bar">
        <Logo/>
        <Route path="/film" render={()=>(<ButtonLink to="/">Search</ButtonLink>)}/>
    </div>
);

export default TopBar;