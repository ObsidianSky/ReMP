export const imgPath = 'https://image.tmdb.org/t/p/w500';

// TODO change on local image path
export const backdropImgPath = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';

const basicTransformMap = {
    id: 'id',
    title: 'title',
    description: 'overview',
    year({ release_date }) {
        return release_date
            ? release_date.slice(0, 4)
            : '0000';
    },
    img({ poster_path, backdrop_path }) {
        if ((!poster_path && !backdrop_path)) {
            return backdropImgPath;
        }
        return imgPath + (poster_path || backdrop_path);
    },
    rating({ vote_average }) {
        return String(vote_average);
    }
};

const searchResultTransformMap = Object.assign({}, basicTransformMap, {
    genre: 'genre_ids'
});

const detailsResultTransformMap = Object.assign({}, basicTransformMap, {
    genre: 'genres',
    director({ credits }) {
        return credits.crew.find(movie => movie.job === 'Director')

    },
    cast({ credits }) {
        return credits.cast.map(person => person.name).join(', ');
    },
    duration({ runtime }) {
        return `${runtime} min`;
    }
});

const transformMovieFields = (rawData, map) => {
    const movie = {};

    for (let prop in map) {
        const transformer = map[prop];
        const transformerType = typeof transformer;
        if (transformerType === 'function') {
            const value = transformer(rawData);

            if (value !== undefined) {
                movie[prop] = value;
            }
        }

        if (transformerType === 'string') {
            movie[prop] = rawData[transformer];
        }
    }

    return movie;
};

export const prepareSearchResp = rawData => transformMovieFields(rawData, searchResultTransformMap);
export const prepareDetailsResp = rawData => transformMovieFields(rawData, detailsResultTransformMap);

export const genresToString = genres => {
    return genres.map(genre => genre ? genre.name : '').filter(name => name !== '').join(', ');
};

const mapGenres = (movie, genreList) => {
    if (!movie.genre.length) {
        movie.genre = 'No genre :(';
        return movie;
    }

    const mappedGenres = movie.genre.map(genreId => {
        return genreList.find(genre => genre.id === genreId);
    });

    movie.genre = genresToString(mappedGenres);

    return movie;
};

export const mapGenresOnMovies = (movies, genresList) => {
    return movies.map(movie => {
        return mapGenres(movie, genresList);
    });
};
