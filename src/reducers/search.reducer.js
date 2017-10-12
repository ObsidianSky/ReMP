import { SET_SEARCH_QUERY, SET_SEARCH_TYPE, MOVIES_FETCH_ERROR, MOVIES_FETCH_SUCCESS } from '../actions/';

const initialState = {
    error: '',
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
            return Object.assign({}, state, { selectedType: action.payload, error: '' });
        case MOVIES_FETCH_SUCCESS:
            return Object.assign({}, state, { error: '' });
        case MOVIES_FETCH_ERROR:
            return Object.assign({}, state, { error: action.payload });
        default:
            return state;
    }
};