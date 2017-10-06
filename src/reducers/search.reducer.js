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
        case 'SEARCH_QUERY_CHANGED':
            return Object.assign({}, state, { query: action.payload });
        case 'SEARCH_TYPE_CHANGED':
            return Object.assign({}, state, { selectedType: action.payload, error: '' });
        case 'MOVIES_FETCH_SUCCESS':
            return Object.assign({}, state, { error: '' });
        case 'MOVIES_FETCH_ERROR':
            return Object.assign({}, state, { error: action.payload });
        default:
            return state;
    }
};