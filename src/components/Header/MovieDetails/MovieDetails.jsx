import React from 'react';
import PropTypes from 'prop-types';
import './MovieDetails.scss'

export default class MovieDetails extends React.Component {
    render() {
        const { img, title, year, genre, rating, duration, description, director, cast} = this.props.movie;
        return (
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
                        <div className="movie-details__duration">{duration}min</div>
                    </div>
                    <div className="movie-details__description">{description}</div>
                    <div className="movie-details__director">Director: {director}</div>
                    <div className="movie-details__cast">Cast: {cast.join(', ')}</div>
                </div>
            </div>
        )
    }
}

MovieDetails.propTypes = {
    movie: PropTypes.shape({
        img: PropTypes.string,
        title: PropTypes.string,
        year: PropTypes.number,
        genre: PropTypes.string,
        rating: PropTypes.number,
        duration: PropTypes.number,
        description: PropTypes.string,
        director: PropTypes.string,
        cast: PropTypes.arrayOf(PropTypes.string)
    })
};
