import React from 'react';
import './App.scss'

import Header from './components/Header/Header';
import MovieGrid from './components/MovieGrid/MovieGrid';
import Footer from './components/Footer/Footer';

const movie = {
    img: 'http://via.placeholder.com/280x200',
    title: 'Title',
    year: 2000,
    genre: 'Dramas'
};

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: (new Array(5)).fill(movie)
        }
    }

    render() {
        return (
            <div className="app">
                <div className="app__header">
                    <Header/>
                </div>
                <div className="app__main">
                    <MovieGrid movies={this.state.movies}/>
                </div>
                <div className="app__footer">
                    <Footer/>
                </div>
            </div>
        )
    }
}