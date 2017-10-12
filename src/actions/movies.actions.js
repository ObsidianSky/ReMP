import {getMovies} from '../services/movie.service';

export const SORT_MOVIES = 'SORT_MOVIES';
export const REMOVE_MOVIE = 'REMOVE_MOVIE';
export const SELECT_MOVIE = 'SELECT_MOVIE';

export const sortMovies = type => ({
    type: SORT_MOVIES,
    payload: type
});

const removeMovie = id => ({
    type: REMOVE_MOVIE,
    payload: id
});

export const selectMovie = (movieId) => {
    return (dispatch, getState) => {
        dispatch({
            type: SELECT_MOVIE,
            payload: movieId
        });

        const { movies } = getState();

        getMovies(dispatch, 'director', movies.selectedMovie.director)
            .then(() => {
                    dispatch(removeMovie(movieId));
                    dispatch({ type: 'MOVIE_SELECTED' })
                },
                () => dispatch({ type: 'MOVIE_SELECTED' })
            );
    }
};
