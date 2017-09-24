import React from 'react';
import PropTypes from 'prop-types';
import './Movie.scss'

const Movie = ({ img, title, year, genre }) => (
    <div className="movie">
        <img className="movie__image" src={img}></img>
        <div className="movie__info">
            <div className="movie__info-row">
                <div className="movie__title">{title}</div>
                <div className="movie__year">{year}</div>
            </div>
            <div className="movie__info-row">
                <div className="movie__genre">{genre}</div>
            </div>
        </div>
    </div>
);

Movie.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    genre: PropTypes.string
};

export default Movie;