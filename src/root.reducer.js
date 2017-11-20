import { combineReducers } from 'redux';
import { searchReducer, moviesReducer, genresReducer, loadingReducer } from './reducers'

export default combineReducers({
    movies: moviesReducer,
    search: searchReducer,
    genres: genresReducer,
    loading: loadingReducer
});
