import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss'

import Header from './components/Header/Header';
import MovieGrid from './components/MovieGrid/MovieGrid';
import Footer from './components/Footer/Footer';

class App extends Component{
    render() {
        return (
            <Router>
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
            </Router>
        )
    }
}

export default App;