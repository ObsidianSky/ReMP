export const UPDATE_MOVIES = 'UPDATE_MOVIES';
export const SET_SEARCH_ERROR = 'SET_SEARCH_ERROR';

export const updateMovies = movies => ({
    type: UPDATE_MOVIES,
    payload: movies
});

export const setError = error => ({
    type: SET_SEARCH_ERROR,
    payload: error
});