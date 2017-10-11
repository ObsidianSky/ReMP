import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import './App.scss'

import Header from './components/Header/Header';
import MovieGrid from './components/MovieGrid/MovieGrid';
import Footer from './components/Footer/Footer';
import { setHistory } from './actions';


class App extends Component{
    componentDidMount() {
        const { setHistory, history } = this.props;
        setHistory(history);
    }

    render() {
        return (
            <Route path="/">
                <div className="app">
                    <div className="app__header">
                        <Header/>
                    </div>
                    <div className="app__main">
                        <MovieGrid/>
                    </div>
                    <div className="app__footer">
                        <Footer/>
                    </div>
                </div>
            </Route>
        )
    }
}

export default withRouter(connect(null, { setHistory })(App));