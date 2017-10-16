import { combineReducers } from 'redux';
import { searchReducer, moviesReducer, historyReducer, genresReducer } from './reducers'

export default combineReducers({
    movies: moviesReducer,
    search: searchReducer,
    history: historyReducer,
    genres: genresReducer
});
