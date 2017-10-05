export const moviesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SORT':
            return state;
        case 'MOVIES_FETCH_SUCCESS':
            return [].concat(action.payload);
        default:
            return state;
    }
};