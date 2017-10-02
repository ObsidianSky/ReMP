export const moviesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SORT':
            return state;
        case 'MOVIES_FETCH_SUCCESS':
            return state;
        default:
            return state;
    }
};