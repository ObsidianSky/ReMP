import { NAVIGATE_TO_HOME, NAVIGATE_TO_MOVIE, NAVIGATE_TO_SEARCH_RESULTS } from '../actions/navigation.actions';
import { resetSearch } from '../actions/search.actions';
import { resetMovies } from '../actions/movies.actions';

export default [
    {
        actionName: NAVIGATE_TO_SEARCH_RESULTS,
        after: (storeState) => storeState.history.push(`/search/${storeState.search.query}`)
    },
    {
        actionName: NAVIGATE_TO_MOVIE,
        after: (storeState) => storeState.history.push(`/film/${storeState.movies.selectedMovie.title}`)
    },
    {
        before: (storeState) => storeState.history.push(`/`),
        actionName: NAVIGATE_TO_HOME,
        after: (storeState, dispatch) => {
            dispatch(resetSearch());
            dispatch(resetMovies())
        }
    }
]