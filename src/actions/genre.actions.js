import { SET_GENRES } from './movies.actions';
import { getGenreList } from '../services/tmdb.service';

const setGenres = genres => ({
    type: SET_GENRES,
    payload: genres
});

export const requestGenres = () => {
    return dispatch => {
        return getGenreList()
            .then(genres => {
                dispatch(setGenres(genres));
            });
    }
};
