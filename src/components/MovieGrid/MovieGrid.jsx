import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './MovieGrid.scss'
import Movie from './Movie/Movie';
import { selectMovie } from "../../actions";

class MovieGrid extends Component {
    getMovies() {
        return this.props.movies.map((movie, index) => (
            <div className="movie-grid__item" key={index}>
                {/*TODO think how get rid of bind*/}
                <Movie {...movie} onMovieClick={this.props.selectMovie.bind(null, movie.id)}/>
            </div>
        ));
    }

    render() {
        return (
            <div className="movie-grid">
                {this.props.movies.length > 0
                    ? this.getMovies()
                    : <div className="movie-grid__empty">No movies here</div>
                }
            </div>
        )
    }
}

MovieGrid.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            img: PropTypes.string,
            title: PropTypes.string,
            year: PropTypes.string,
            genre: PropTypes.string
        })
    )
};

const mapStateToProps = state => ({ movies: state.movies.items });

export default connect(mapStateToProps, { selectMovie })(MovieGrid);