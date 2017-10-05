const initialState = {
    query: '',
    selectedType: 'title',
    types: ['title', 'director']
};

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_QUERY_CHANGED':
            return Object.assign({}, state, { query: action.payload });
        case 'SEARCH_TYPE_CHANGED':
            return Object.assign({}, state, { selectedType: action.payload });
        default:
            return state;
    }
};