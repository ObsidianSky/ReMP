import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { App } from "../../../App";
import {showMovieDetails} from "../../../actions/movies.actions";

if (process.env.BROWSER) {
	require('./MovieDetails.scss');
}

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
                <div className="movie-details__title">{title}asdgdasg</div>
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

MovieDetails.prepareState = (store, match) => {
    const { dispatch, getState } = store;

    //find better way to resolve genres;

    return App.prepareState(store)
        .then(() => showMovieDetails(match.params.id)(dispatch, getState));
};

MovieDetails.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string,
    genre: PropTypes.string,
    rating: PropTypes.string,
    duration: PropTypes.string,
    description: PropTypes.string,
    director: PropTypes.shape({
        name: PropTypes.string
    }),
    cast: PropTypes.string
};

const mapStateToProps = ({ movies }) => ({ ...movies.selectedMovie });

export default connect(mapStateToProps)(MovieDetails);