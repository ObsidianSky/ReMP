import { combineReducers } from 'redux';
import { searchReducer, moviesReducer, historyReducer} from './reducers'

export default combineReducers({
    movies: moviesReducer,
    search: searchReducer,
    history: historyReducer
});
