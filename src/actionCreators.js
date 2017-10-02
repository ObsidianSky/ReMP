export const setSearchQuery = value => ({
    type: 'SEARCH_QUERY_CHANGED',
    payload: value
});

export const setSearchType = value => ({
    type: 'SEARCH_TYPE_CHANGED',
    payload: value
});

export const search = () => ({
    type: 'SEARCH',
});
