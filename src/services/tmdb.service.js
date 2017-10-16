import axios from 'axios';

import { prepareDetailsResp, prepareSearchResp } from './mapper.service';

const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = '52d71cfbf5ad1e146f2b481693eda982';

const movieSearchPath = '/search/movie';
const personSearchPath = '/search/person';
const getMovieDetailsPath = '/movie';
const genrePath = '/genre/movie/list';

const get = (url, params = {}) => {
    const mergedParams = Object.assign({}, params, { api_key: apiKey });

    return axios.get(apiUrl + url, { params: mergedParams }).then(res => res.data);
};

export const getGenreList = () => {
    return get(genrePath)
        .then(data => data.genres);
};

export const getMoviesByDirectorId = id => {
    return get(`/person/${id}/movie_credits`)
        .then(data => data.cast.map(prepareSearchResp));
};

export const getMovieById = id => {
    return get(`${getMovieDetailsPath}/${id}`, { append_to_response: 'credits' })
        .then(data => prepareDetailsResp(data));
};


const searchMoviesByTitle = query => {
    return get(movieSearchPath, { query })
        .then(data => data.results.map(prepareSearchResp));
};

const searchMoviesByDirectorName = query => {
    return get(personSearchPath, { query })
        .then(data => {
            // for sake of simplicity grab only first director
            const firstDirector = data.results.length && data.results[0];
            return getMoviesByDirectorId(firstDirector.id);
        })
};

export const getMoviesSearchResult = (query, type) => {
    return type === 'director'
        ? searchMoviesByDirectorName(query)
        : searchMoviesByTitle(query);
};
