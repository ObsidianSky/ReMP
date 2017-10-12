export const MOVIES_FETCH_SUCCESS = 'MOVIES_FETCH_SUCCESS';
export const MOVIES_FETCH_ERROR = 'MOVIES_FETCH_ERROR';

export const onMoviesFetchSuccess = movies => ({
    type: MOVIES_FETCH_SUCCESS,
    payload: movies
});
export const onMoviesFetchError = error => ({
    type: MOVIES_FETCH_ERROR,
    payload: error.response.data.message
});

