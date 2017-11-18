import { REMOVE_MOVIE, SELECT_MOVIE, SORT_MOVIES, UPDATE_MOVIES, RESET_MOVIES, SET_SEARCH_ERROR } from '../actions/';
import { sort } from '../services/sort.service';

//TODO think about move selectedMovie into separate reducer
export const initialState = {
    items: [],
    selectedMovie: null,
    selectedSortType: 'year',
    sortTypes: [
        { label: 'release date', value: 'year' },
        { label: 'rating', value: 'rating' }
    ],
};

export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SORT_MOVIES:
            return Object.assign({}, state, {
                items: sort(action.payload, state.items),
                selectedSortType: action.payload
            });
        case UPDATE_MOVIES:
            return Object.assign({}, state, { items: [].concat(action.payload) });
        case SELECT_MOVIE:
            return Object.assign({}, state, { selectedMovie: action.payload });
        case REMOVE_MOVIE:
            return Object.assign({}, state, { items: state.items.filter(movie => movie.id !== action.payload) });
        case SET_SEARCH_ERROR:
            return Object.assign({}, state, { items: [] });
        case RESET_MOVIES:
            return Object.assign({}, initialState);
        default:
            return state;
    }
};

