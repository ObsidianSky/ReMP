import { SET_HISTORY } from '../actions/';

export const historyReducer = (state = null, action) => {
    switch (action.type) {
        case SET_HISTORY:
            return action.payload;
        default:
            return state;
    }
};