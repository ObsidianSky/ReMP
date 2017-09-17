import React from 'react';
import './TopBar.scss'
import Button from '../../common/Button/Button';
import Logo from '../../common/Logo/Logo';

export default class TopBar extends React.Component {
    render() {
        return (
            <div className="top-bar">
                <Logo/>
                <Button>Search</Button>
            </div>
        )
    }
}