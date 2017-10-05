import axios from 'axios';

const apiUrl = '/api';

const requiredFieldsMap = {
    id: 'show_id',
    img: 'poster',
    title: 'show_title',
    year: 'release_year',
    genre: 'category'
};

const prepareMovie = movie => {
  const preparedMovie = {};
  for(let prop in requiredFieldsMap) {
      preparedMovie[prop] = movie[requiredFieldsMap[prop]]
  }
  return preparedMovie;
};

export const getMovies = (param, query) => {
  return axios.get(apiUrl, { params: { [param]: query } })
      .then(res => res.data && res.data.map(prepareMovie));
};