import { getMovies } from '../services/movie.service';
import { sortMovies } from './movies.actions';

export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';
export const SET_SEARCH_TYPE = 'SET_SEARCH_TYPE';

export const setSearchQuery = query => ({
    type: SET_SEARCH_QUERY,
    payload: query
});

export const setSearchType = type => ({
    type: SET_SEARCH_TYPE,
    payload: type
});


export const searchMovies = () => {
    return (dispatch, getState) => {
        const { search, movies } = getState();

        getMovies(dispatch, search.selectedType, search.query)
            .then(
                () => {
                    dispatch(sortMovies(movies.selectedSortType));
                    dispatch({type: 'MOVIE_SEARCHED'})
                }
            )
            .catch(() => {
                dispatch({ type: 'MOVIE_SEARCHED' })
            });

    }
};

