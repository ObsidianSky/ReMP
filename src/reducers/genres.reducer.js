import { SET_GENRES } from '../actions/';

export const genresReducer = (state = null, action) => {
    switch (action.type) {
        case SET_GENRES:
            return action.payload;
        default:
            return state;
    }
};