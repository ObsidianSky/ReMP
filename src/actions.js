import { getMovies } from './services/movie.service';

export const setSearchQuery = value => ({
    type: 'SEARCH_QUERY_CHANGED',
    payload: value
});

export const setSearchType = value => ({
    type: 'SEARCH_TYPE_CHANGED',
    payload: value
});

export const search = () => ({
    type: 'SEARCH',
});

export const searchMovies = () => {
    return (dispatch, getState) => {
        const { search } = getState();

        getMovies(search.selectedType, search.query)
            .then(movies => dispatch({
                type: 'MOVIES_FETCH_SUCCESS',
                payload: movies
            }))
            .catch(e => console.log(e))
    }
};