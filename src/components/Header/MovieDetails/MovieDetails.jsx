import React from 'react';
import PropTypes from 'prop-types';
import './MovieDetails.scss'

import { connect } from 'react-redux';

const MovieDetails = ({
    img,
    title,
    year,
    genre,
    rating,
    duration,
    description,
    director,
    cast
}) => (
    <div className="movie-details">
        <div className="movie-details__poster">
            <img src={img} className="movie-details__img"/>
        </div>
        <div className="movie-details__info">
            <div className="movie-details__heading">
                <div className="movie-details__title">{title}</div>
                <div className="movie-details__rating">{rating}</div>
            </div>
            <div className="movie-details__genre">{genre}</div>
            <div className="movie-details__meta">
                <div className="movie-details__year">{year}</div>
                <div className="movie-details__duration">{duration}</div>
            </div>
            <div className="movie-details__description">{description}</div>
            <div className="movie-details__director">Director: {director}</div>
            <div className="movie-details__cast">Cast: {cast}</div>
        </div>
    </div>
);

MovieDetails.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string,
    genre: PropTypes.string,
    rating: PropTypes.string,
    duration: PropTypes.string,
    description: PropTypes.string,
    director: PropTypes.string,
    cast: PropTypes.string
};

const mapStateToProps = ({ movies }) => ({ ...movies.selectedMovie });

export default connect(mapStateToProps)(MovieDetails);