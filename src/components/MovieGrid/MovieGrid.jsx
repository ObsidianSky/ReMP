import React from 'react';
import PropTypes from 'prop-types';
import './MovieGrid.scss'
import Movie from './Movie/Movie';

export default class MovieGrid extends React.Component {
    getMovies() {
        return this.props.movies.map((movie, index) => (
            <div className="movie-grid__item" key={index}>
                <Movie movie={movie}/>
            </div>
        ));
    }
    render() {
        return (
            <div className="movie-grid">
                {this.props.movies.length > 0
                    ? this.getMovies()
                    : <div className="movie-grid__empty">No movies here</div>
                }
            </div>
        )
    }
}

MovieGrid.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            img: PropTypes.string,
            title: PropTypes.string,
            year: PropTypes.number,
            genre: PropTypes.string
        })
    )
};