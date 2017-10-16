import { SET_SEARCH_QUERY, SET_SEARCH_TYPE, RESET_SEARCH } from '../actions/';

const initialState = {
    query: '',
    selectedType: 'title',
    types: [
        { label: 'title', value: 'title' },
        { label: 'director', value: 'director' }
    ]
};

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_QUERY:
            return Object.assign({}, state, { query: action.payload });
        case SET_SEARCH_TYPE:
            return Object.assign({}, state, { selectedType: action.payload });
        case RESET_SEARCH:
            return Object.assign({}, initialState);
        default:
            return state;
    }
};