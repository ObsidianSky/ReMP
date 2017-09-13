import React from 'react';
import './Header.scss'
import TopBar from './TopBar/TopBar';
import SearchForm from './SearchForm/SearchForm';

export default class Header extends React.Component {
    render() {
        return (
            <header className="header">
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
            </header>
        )
    }
}