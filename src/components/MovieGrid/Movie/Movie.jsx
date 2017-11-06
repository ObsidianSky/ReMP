import React from 'react';
import PropTypes from 'prop-types';

if (process.env.BROWSER) {
	require('./Movie.scss');
}

const Movie = ({ img, title, year, genre, director, rating, onMovieClick }) => (
    <div className="movie">
        {/*TODO rename class*/}
        <div className="movie__image-link" onClick={onMovieClick}>
            <img className="movie__image" src={img}/>
        </div>
        <div className="movie__info">
            <div className="movie__info-row">
                <div className="movie__title" title={title} onClick={onMovieClick}>
                    {title}
                </div>
                <div className="movie__year">{year}</div>
            </div>
            <div className="movie__info-row">
                <div className="movie__genre">{genre}</div>
                <div className="movie__rating">{rating}</div>
            </div>
        </div>
    </div>
);

Movie.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string,
    genre: PropTypes.string,
    rating: PropTypes.string,
    onMovieClick: PropTypes.func
};

export default Movie;