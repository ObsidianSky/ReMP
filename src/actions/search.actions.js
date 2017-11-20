import { getMoviesSearchResult } from '../services/tmdb.service';
import { mapGenresOnMovies } from '../services/mapper.service';
import { sortMovies } from './movies.actions';
import { setError, updateMovies } from './common.actions';
import { NAVIGATE_TO_SEARCH_RESULTS } from './navigation.actions';

export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';
export const SET_SEARCH_TYPE = 'SET_SEARCH_TYPE';
export const RESET_SEARCH = 'RESET_SEARCH';

export const setSearchQuery = query => ({
    type: SET_SEARCH_QUERY,
    payload: query
});

export const setSearchType = type => ({
    type: SET_SEARCH_TYPE,
    payload: type
});

export const resetSearch = () => ({
    type: RESET_SEARCH
});

export const searchMovies = () => {
    return (dispatch, getState) => {
        const state = getState();

        return getMoviesSearchResult(state.search.query, state.search.type)
            .then(result => {
                    const movies = mapGenresOnMovies(result, state.genres);
                    dispatch(updateMovies(movies));
                    dispatch(sortMovies(state.movies.selectedSortType));
                }
            )
            .catch(e => {
                dispatch(setError(e));
            });
    }
};

