import { getMovies } from './services/movie.service';

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

export const selectMovie = id => ({
    type: 'SELECT_MOVIE',
    payload: id
});

export const searchMovies = () => {
    return (dispatch, getState) => {
        const { search } = getState();

        getMovies(search.selectedType, search.query)
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
    }
};