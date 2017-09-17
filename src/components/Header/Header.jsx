import React from 'react';
import './Header.scss'
import TopBar from './TopBar/TopBar';
import SearchForm from './SearchForm/SearchForm';
import BottomBar from './BottomBar/BottomBar';

export default class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="header__background">
                    <div className="header__shadow">
                        <div className="header__inner">
                            <div className="header__top-bar">
                                <TopBar/>
                            </div>
                            <div className="header__content">
                                <SearchForm/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header__bottom-bar">
                    <BottomBar/>
                </div>
            </header>
        )
    }
}