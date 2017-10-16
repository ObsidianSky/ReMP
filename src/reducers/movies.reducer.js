import { REMOVE_MOVIE, SELECT_MOVIE, SORT_MOVIES, UPDATE_MOVIES, RESET_MOVIES } from '../actions/';

const initialState = {
    items: [],
    selectedSortType: 'year',
    sortTypes: [
        { label: 'release date', value: 'year' },
        { label: 'rating', value: 'rating' }
    ],
    selectedMovie: null
};

const sortMovies = (type, movies) => {
    const sortedMovies = [].concat(movies);

    sortedMovies.sort((item1, item2) => {
        const value1 = item1[type];
        const value2 = item2[type];

        return value1 > value2 ? -1 : value1 < value2 ? 1 : 0
    });

    return sortedMovies;
};

export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SORT_MOVIES:
            return Object.assign({}, state, {
                items: sortMovies(action.payload, state.items),
                selectedSortType: action.payload
            });
        case UPDATE_MOVIES:
            return Object.assign({}, state, { items: [].concat(action.payload) });
        case SELECT_MOVIE:
            return Object.assign({}, state, { selectedMovie: action.payload });
        case REMOVE_MOVIE:
            return Object.assign({}, state, { items: state.items.filter(movie => movie.id !== action.payload) });
        case RESET_MOVIES:
            return Object.assign({}, initialState);
        default:
            return state;
    }
};

