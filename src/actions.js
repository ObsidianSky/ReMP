import { fetchMovies } from './services/movie.service';

export const setSearchQuery = query => ({
    type: 'SEARCH_QUERY_CHANGED',
    payload: query
});

export const setSearchType = type => ({
    type: 'SEARCH_TYPE_CHANGED',
    payload: type
});

export const sort = type => ({
    type: 'SORT',
    payload: type
});

export const setHistory = history => ({
    type: 'SET_HISTORY',
    payload: history
});

const removeMovie = id => ({
    type: 'REMOVE_MOVIE',
    payload: id
});

const getMovies = (dispatch, type, query) => {
    return fetchMovies(type, query)
        .then(movies => {
            dispatch({
                type: 'MOVIES_FETCH_SUCCESS',
                payload: movies
            });
        })
        .catch(e => {
            dispatch({
                type: 'MOVIES_FETCH_ERROR',
                payload: e.response.data.message
            });
        });
};

export const searchMovies = () => {
    return (dispatch, getState) => {
        const { search, movies } = getState();

        getMovies(dispatch, search.selectedType, search.query)
            .then(
                () => {
                    dispatch(sort(movies.selectedSortType));
                    dispatch({type: 'MOVIE_SEARCHED'})
                },
                () => dispatch({ type: 'MOVIE_SEARCHED' })
            )
    }
};

export const selectMovie = (movieId) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'SELECT_MOVIE',
            payload: movieId
        });

        const { movies } = getState();

        getMovies(dispatch, 'director', movies.selectedMovie.director)
            .then(
                () => {
                    dispatch(removeMovie(movieId));
                    dispatch({ type: 'MOVIE_SELECTED' })
                },
                () => dispatch({ type: 'MOVIE_SELECTED' })
            );
    }
};
