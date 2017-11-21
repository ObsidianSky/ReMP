import React from 'react';
import { Route, Switch } from 'react-router-dom';
if (process.env.BROWSER) {
	require('./Header.scss');
}

import TopBar from './TopBar/TopBar';
import SearchForm from './SearchForm/SearchForm';
import SortBar from './SortBar/SortBar';
import DetailsBar from './DetailsBar/DetailsBar';
import MovieDetails from './MovieDetails/MovieDetails';

const Header = () => (
    <header className="header">
        <div className="header__background">
            <div className="header__shadow">
                <div className="header__inner">
                    <div className="header__top-bar">
                        <TopBar/>
                    </div>
                    <div className="header__content">
                        <Switch>
                            <Route path="/film" component={MovieDetails}/>
                            <Route path="/" component={SearchForm}/>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
        <div className="header__bottom-bar">
            <Switch>
                <Route path="/film" component={DetailsBar}/>
                <Route path="/" component={SortBar}/>
            </Switch>
        </div>
    </header>
);

export default Header;