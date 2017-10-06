import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import './Header.scss'

import TopBar from './TopBar/TopBar';
import SearchForm from './SearchForm/SearchForm';
import SortBar from './SortBar/SortBar';
import Bar from '../common/Bar/Bar';
import MovieDetails from './MovieDetails/MovieDetails';

class Header extends Component {
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
                                <Switch>
                                    <Route path="/film" component={MovieDetails}/>
                                    <Route path="/" component={SearchForm}/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header__bottom-bar">
                    <Route exact path="/" component={SortBar}/>
                    <Route path="/search" component={SortBar}/>
                    <Route path="/film" render={() => <Bar title={`Films by ${this.props.activeMovie.director}`}/>}/>
                </div>
            </header>
        )
    }
}

export default Header;