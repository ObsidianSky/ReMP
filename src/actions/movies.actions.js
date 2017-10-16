import { getMovieById, getMoviesByDirectorId } from '../services/tmdb.service';
import { genresToString, mapGenresOnMovies } from '../services/mapper.service';
import { updateMovies } from './common.actions';
import { NAVIGATE_TO_MOVIE } from './navigation.actions';

export const SORT_MOVIES = 'SORT_MOVIES';
export const REMOVE_MOVIE = 'REMOVE_MOVIE';
export const SELECT_MOVIE = 'SELECT_MOVIE';
export const RESET_MOVIES = 'RESET_MOVIES';
export const SET_GENRES = 'SET_GENRES';

export const sortMovies = type => ({
    type: SORT_MOVIES,
    payload: type
});

const removeMovie = id => ({
    type: REMOVE_MOVIE,
    payload: id
});

export const resetMovies = () => ({
    type: RESET_MOVIES
});

export const selectMovie = movie => ({
    type: SELECT_MOVIE,
    payload: movie
});


export const showMovieDetails = movieId => {
    return (dispatch, getState) => {
        const state = getState();
        getMovieById(movieId)
            .then(movie => {
                movie.genre = genresToString(movie.genre);
                dispatch(selectMovie(movie));

                //some movies can be without director
                return movie.director
                    ? getMoviesByDirectorId(movie.director.id)
                    : [];
            })
            .then(result => {
                const movies = mapGenresOnMovies(result, state.genres);
                dispatch(updateMovies(movies));
                dispatch(removeMovie(movieId));
                dispatch({type: NAVIGATE_TO_MOVIE})
            })
            .catch(() => {
                dispatch({type: NAVIGATE_TO_MOVIE})
            })
    }
};
