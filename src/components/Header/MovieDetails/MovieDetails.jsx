import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './MovieDetails.scss'

export const MovieDetails = ({
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
            { director && <div className="movie-details__director">Director: { director.name}</div> }
            <div className="movie-details__cast">Cast: {cast}</div>
        </div>
    </div>
);

MovieDetails.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.shape({
        name: PropTypes.string.isRequired
    }),
    cast: PropTypes.string.isRequired
};

const mapStateToProps = ({ movies }) => ({ ...movies.selectedMovie });

export default connect(mapStateToProps)(MovieDetails);