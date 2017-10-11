export default [
    {
        actionName: 'MOVIES_SEARCHED',
        handler: (storeState) => storeState.history.push(`/search/${storeState.search.query}`)
    },
    {
        actionName: 'MOVIE_SELECTED',
        handler: (storeState) => storeState.history.push(`/film/${storeState.movies.selectedMovie.title}`)
    }
]