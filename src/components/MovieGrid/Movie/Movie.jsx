import React from 'react';
import PropTypes from 'prop-types';
import './Movie.scss'

export default class Movie extends React.Component {
    render() {
        const { img, title, year, genre } = this.props.movie;

        return (
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
        )
    }
}

Movie.propTypes = {
    movie: PropTypes.shape({
        img: PropTypes.string,
        title: PropTypes.string,
        year: PropTypes.number,
        genre: PropTypes.string
    })
};