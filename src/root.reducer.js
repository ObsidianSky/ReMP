import { combineReducers } from 'redux';
import { searchReducer, moviesReducer} from './reducers'

export default combineReducers({
    movies: moviesReducer,
    search: searchReducer
});
