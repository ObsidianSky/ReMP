import createHistory from 'history/createBrowserHistory'
const history = createHistory();

export default [
    {
        actionName: ['MOVIES_FETCH_SUCCESS', 'MOVIES_FETCH_ERROR'],
        handler: (storeState) => history.push(`/search/${storeState.search.query}`)
    },
    {
        actionName: 'SELECT_MOVIE',
        handler: (storeState) => {
            history.push(`/film/${storeState.movies.selectedMovie.title}`)
        }
    }
]