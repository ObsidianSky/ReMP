import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

if (process.env.BROWSER) {
	require('./App.scss');
}

import Header from './components/Header/Header';
import MovieGrid from './components/MovieGrid/MovieGrid';
import Footer from './components/Footer/Footer';
import { setHistory, requestGenres } from './actions';
import SearchPage from './pages/searchPage/SearchPage';
import FilmPage from './pages/FilmPage/FilmPage';

export class App extends Component {
    static prepareState(store) {
        return requestGenres()(store.dispatch);
    }

    componentDidMount() {
        const { setHistory, requestGenres, history } = this.props;
        setHistory(history);
        requestGenres();
    }

    render() {
        return (
            <Switch>
                <Route path="/film" component={FilmPage}/>
                <Route path="/" component={SearchPage}/>
            </Switch>
        )
    }
}

export default withRouter(connect(null, { setHistory, requestGenres })(App));