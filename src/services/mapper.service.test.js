import * as sut from './mapper.service';

describe('mapper service', () => {
    let expected;
    let actual;

    describe('prepare search response', () => {
        let raw;

        beforeEach(() => {
            raw = {
                id: 'id',
                title: 'title',
                overview: 'overview',
                release_date: '2017/01/01',
                poster_path: 'poster_path',
                backdrop_path: 'backdrop_path',
                genre_ids: 'genre_ids',
                vote_average: 2
            }
        });

        test('should prepare raw data', () => {
            expected = {
                id: 'id',
                title: 'title',
                description: 'overview',
                year: '2017',
                img: sut.imgPath + 'poster_path',
                rating: '2',
                genre: 'genre_ids'
            };

            actual = sut.prepareSearchResp(raw);

            expect(actual).toEqual(expected);
        });

        test('should use backdrop_path if there is no poster_path', () => {
            raw.poster_path = null;

            expected = {
                id: 'id',
                title: 'title',
                description: 'overview',
                year: '2017',
                img: sut.imgPath + 'backdrop_path',
                rating: '2',
                genre: 'genre_ids'
            };

            actual = sut.prepareSearchResp(raw);

            expect(actual).toEqual(expected);
        });

        test('should use local image backdrop if there are no backdrop_path and poster_path', () => {
            raw.poster_path = null;
            raw.backdrop_path = null;

            expected = {
                id: 'id',
                title: 'title',
                description: 'overview',
                year: '2017',
                img: sut.backdropImgPath,
                rating: '2',
                genre: 'genre_ids'
            };

            actual = sut.prepareSearchResp(raw);

            expect(actual).toEqual(expected);
        });
    });

    describe('prepare movie details response', () => {
        let raw;

        beforeEach(() => {
            raw = {
                id: 'id',
                title: 'title',
                overview: 'overview',
                release_date: '2017/01/01',
                poster_path: 'poster_path',
                backdrop_path: 'backdrop_path',
                genres: 'genres',
                vote_average: 2,
                credits: {
                    crew: [ { job: 'Director' }, { job: 'Not Director' } ],
                    cast: [ { name: 'name1' }, { name: 'name2' }]
                },
                runtime: 10
            }
        });

        test('should prepare raw data', () => {
            expected = {
                id: 'id',
                title: 'title',
                description: 'overview',
                year: '2017',
                img: sut.imgPath + 'poster_path',
                rating: '2',
                genre: 'genres',
                director: { job: 'Director' },
                cast: 'name1, name2',
                duration: '10 min'
            };

            actual = sut.prepareDetailsResp(raw);

            expect(actual).toEqual(expected);
        });

        test('should use backdrop_path if there is no poster_path', () => {
            raw.poster_path = null;

            expected = {
                id: 'id',
                title: 'title',
                description: 'overview',
                year: '2017',
                img: sut.imgPath + 'backdrop_path',
                rating: '2',
                genre: 'genres',
                director: { job: 'Director' },
                cast: 'name1, name2',
                duration: '10 min'
            };

            actual = sut.prepareDetailsResp(raw);

            expect(actual).toEqual(expected);
        });

        test('should use local image backdrop if there are no backdrop_path and poster_path', () => {
            raw.poster_path = null;
            raw.backdrop_path = null;

            expected = {
                id: 'id',
                title: 'title',
                description: 'overview',
                year: '2017',
                img: sut.backdropImgPath,
                rating: '2',
                genre: 'genres',
                director: { job: 'Director' },
                cast: 'name1, name2',
                duration: '10 min'
            };

            actual = sut.prepareDetailsResp(raw);

            expect(actual).toEqual(expected);
        });
    });

    describe('map genres on movies genre ids', () => {
        let movies;
        let genres;

        beforeEach(() => {
            movies = [
                {
                    genre: [1, 2]
                }
            ];

            genres = [{
                id: 1,
                name: 'genre1'
            }, {
                id: 2,
                name: 'genre2'
            }]
        });

        test('should map genres', () => {
            expected = [{
                genre: 'genre1, genre2'
            }];

            actual = sut.mapGenresOnMovies(movies, genres);

            expect(actual).toEqual(expected);
        });

        test('should handle empty movie genres', () => {
            movies[0].genre = [];

            expected = [{
                genre: 'No genre :('
            }];

            actual = sut.mapGenresOnMovies(movies, genres);

            expect(actual).toEqual(expected);
        });
    });

    describe('genres to string', () => {
        test('should convert genres array to string', () => {
            expected = 'genre1, genre2, genre3';
            actual = sut.genresToString([{ name: 'genre1' }, { name: 'genre2' }, { name: 'genre3' }]);

            expect(actual).toEqual(expected);
        });

        test('should handle falsy genres', () => {
            expected = 'genre1, genre3';
            actual = sut.genresToString([{ name: 'genre1' }, null, { name: 'genre3' }]);

            expect(actual).toEqual(expected);
        });
    });
});