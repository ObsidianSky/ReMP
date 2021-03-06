import { SET_SEARCH_QUERY, SET_SEARCH_TYPE, RESET_SEARCH, SET_SEARCH_ERROR } from '../actions/';

export const initialState = {
    error: '',
    query: '',
    type: 'title',
    types: [
        { label: 'title', value: 'title' },
        { label: 'director', value: 'director' }
    ]
};

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_QUERY:
            return Object.assign({}, state, { query: action.payload, error: '' });
        case SET_SEARCH_TYPE:
            return Object.assign({}, state, { type: action.payload, error: '' });
        case SET_SEARCH_ERROR:
            return Object.assign({}, state, { error: action.payload });
        case RESET_SEARCH:
            return Object.assign({}, initialState);
        default:
            return state;
    }
};