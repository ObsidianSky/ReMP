import axios from 'axios';
import { onMoviesFetchError, onMoviesFetchSuccess } from '../actions/';

const apiUrl = '/api';

const requiredFieldsMap = {
    id: 'show_id',
    img: 'poster',
    title: 'show_title',
    year: 'release_year',
    genre: 'category',
    rating: 'rating',
    duration: 'runtime',
    description: 'summary',
    director: 'director',
    cast: 'show_cast'
};

const prepareMovie = movie => {
  const preparedMovie = {};

  for(let prop in requiredFieldsMap) {
      preparedMovie[prop] = movie[requiredFieldsMap[prop]]
  }

  return preparedMovie;
};

const fetchMovies = (param, query) => {
  return axios.get(apiUrl, { params: { [param]: query } })
      .then(res => {
          return Array.isArray(res.data)
                    ? res.data.map(prepareMovie)
                    : prepareMovie(res.data);
      });
};

export const getMovies = (dispatch, type, query) => {
    return fetchMovies(type, query)
        .then(movies => {
            dispatch(onMoviesFetchSuccess(movies))
        })
        .catch(e => {
            dispatch(onMoviesFetchError(e));
            throw e;
        })
};
