import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import './Movie.scss'

const Movie = ({ img, title, year, genre }) => (
    <div className="movie">
        <Link to={`/film/${title}`}>
            <img className="movie__image" src={img}></img>
        </Link>
        <div className="movie__info">
            <div className="movie__info-row">
                <div className="movie__title">
                    <Link to={`/film/${title}`}>
                        {title}
                    </Link>
                </div>
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