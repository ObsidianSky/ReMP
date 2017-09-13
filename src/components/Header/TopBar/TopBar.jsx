import React from 'react';
import './TopBar.scss'
import Button from '../../common/Button/Button';

export default class TopBar extends React.Component {
    render() {
        return (
            <div className="top-bar">
                <div className="top-bar__brand">netflixroulette</div>
                <Button/>
            </div>
        )
    }
}