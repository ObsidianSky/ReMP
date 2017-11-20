import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'


if (process.env.BROWSER) {
	require('./Movie.scss');
}

const Movie = ({id, img, title, year, genre, director, rating, onMovieClick }) => (
    <div className="movie">
        {/*TODO rename class*/}
        <Link className="movie__image-link" to={`/film/${id}`}>
            <img className="movie__image" src={img}/>
        </Link>
        <div className="movie__info">
            <div className="movie__info-row">
                <Link className="movie__title" title={title} to={`/film/${id}`}>
                    {title}
                </Link>
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
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string,
    genre: PropTypes.string,
    rating: PropTypes.string,
    onMovieClick: PropTypes.func
};

export default Movie;