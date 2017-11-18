import axios from 'axios';

import { prepareDetailsResp, prepareSearchResp } from './mapper.service';

export const apiUrl = 'https://api.themoviedb.org/3';
export const apiKey = '52d71cfbf5ad1e146f2b481693eda982';

export const movieSearchPath = '/search/movie';
export const personSearchPath = '/search/person';
export const getMovieDetailsPath = '/movie';
export const genrePath = '/genre/movie/list';

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
        .then(data => {
            const directedFilms = data.crew.filter(movie => movie.job === 'Director');

            if(!directedFilms.length) {
                throw `No movies found for director with ${id}`;
            }

            return directedFilms.map(prepareSearchResp)
        });
};

export const getMovieById = id => {
    return get(`${getMovieDetailsPath}/${id}`, { append_to_response: 'credits' })
        .then(data => prepareDetailsResp(data));
};

const searchMoviesByTitle = query => {
    return get(movieSearchPath, { query })
        .then(data => {

            //TODO remove hardcoded error message
            if(!data.results.length) {
                throw `No movies found for ${query}`;
            }

            return data.results.map(prepareSearchResp)
        });
};

const searchMoviesByDirectorName = query => {
    return get(personSearchPath, { query })
        .then(data => {
            // for sake of simplicity grab only first director
            const firstDirector = data.results[0];

            if (!firstDirector) {
                throw `No movies found for ${query}`;
            }

            return getMoviesByDirectorId(firstDirector.id)
                .catch(() => {throw `No movies found for ${query}`});
        })
};

export const getMoviesSearchResult = (query, type) => {
    return type === 'director'
        ? searchMoviesByDirectorName(query)
        : searchMoviesByTitle(query);
};
