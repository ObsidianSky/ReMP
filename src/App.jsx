import React from 'react';
import './App.scss'

import Header from './components/Header/Header';
import MovieGrid from './components/MovieGrid/MovieGrid';
import Footer from './components/Footer/Footer';

const movie = {
    img: 'http://via.placeholder.com/240x320',
    title: 'Title',
    year: 2000,
    genre: 'Dramas'
};

const activeMovie = {
    img: 'http://via.placeholder.com/280x420',
    title: 'Title',
    year: 2000,
    genre: 'Dramas',
    rating: 5,
    duration: 160,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis enim id eros mollis porttitor. Fusce non interdum purus, quis luctus lorem. Nullam eu nisi ut magna condimentum ullamcorper. Cras a mollis nulla. Aliquam ut leo ullamcorper, ornare quam vel, dictum elit. Aliquam erat volutpat. Phasellus vitae tellus velit. Sed imperdiet quam a nisi consectetur, at viverra eros posuere. Ut arcu purus, iaculis sed efficitur a, faucibus vestibulum metus. Cras mattis convallis tristique.',
    director: 'Quentin Tarantino',
    cast: ['Name', 'Name2', 'Name3']
};

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: (new Array(5)).fill(movie),
            activeMovie
        }
    }

    render() {
        return (
            <div className="app">
                <div className="app__header">
                    <Header activeMovie={this.state.activeMovie} movies={this.state.movies}/>
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