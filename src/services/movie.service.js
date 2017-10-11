import axios from 'axios';

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

export const fetchMovies = (param, query) => {
  return axios.get(apiUrl, { params: { [param]: query } })
      .then(res => {
          return Array.isArray(res.data)
                    ? res.data.map(prepareMovie)
                    : prepareMovie(res.data);
      });
};
