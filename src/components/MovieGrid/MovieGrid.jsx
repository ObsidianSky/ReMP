import React from 'react';
import PropTypes from 'prop-types';
import './MovieGrid.scss'
import Movie from './Movie/Movie';

export default class MovieGrid extends React.Component {
    render() {
        return (
            <div className="movie-grid">
                {this.props.movies.map((movie) => (
                    <div className="movie-grid__item">
                        <Movie movie={movie}/>
                    </div>
                ))}
            </div>
        )
    }
}

MovieGrid.propTypes = {
    movies: PropTypes.array.isRequired
};