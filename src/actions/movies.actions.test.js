import * as sut from "./movies.actions";
import * as thdbService from "../services/tmdb.service";
import * as mapperService from "../services/mapper.service";
import * as commonActions from './common.actions';

describe('movie actions', () => {
    let expected;
    let actual;

    test('should create sort movie action', () => {
        expected = {
            type: 'SORT_MOVIES',
            payload: 'type'
        };
        actual = sut.sortMovies('type');

        expect(actual).toEqual(expected);
    });

    test('should create reset movie action', () => {
        expected = { type: 'RESET_MOVIES' };
        actual = sut.resetMovies();

        expect(actual).toEqual(expected);
    });

    test('should create select movie action', () => {
        expected = {
            type: 'SELECT_MOVIE',
            payload: 'movie'
        };
        actual = sut.selectMovie('movie');

        expect(actual).toEqual(expected);
    });

    describe('show movie details action', () => {
        let showMovieDetails;
        let movieId;
        let genresString;
        let mappedMovies;
        let updateMoviesAction;
        let dispatch;
        let getState;
        let state;

        beforeEach(() => {
            movieId = 'movieId';
            genresString = 'genresString';
            mappedMovies = ['mapped1', 'mapped2'];
            updateMoviesAction = 'updateMoviesAction';

            state = {
                genres: ['genres']
            };

            dispatch = jest.fn();
            getState = jest.fn(() => state);

            showMovieDetails = sut.showMovieDetails(movieId);

            jest.spyOn(thdbService, 'getMovieById');
            jest.spyOn(thdbService, 'getMoviesByDirectorId');
            jest.spyOn(commonActions, 'updateMovies').mockReturnValue(updateMoviesAction);

            jest.spyOn(mapperService, 'genresToString').mockReturnValue(genresString);
            jest.spyOn(mapperService, 'mapGenresOnMovies').mockReturnValue(mappedMovies);

        });

        test('should get movie by id', () => {
            showMovieDetails(dispatch, getState);

            expect(thdbService.getMovieById).toHaveBeenCalledWith(movieId);
        });

        describe('when get movie is succeed', () => {
            let getMovieByIdPromise;
            let getMoviesByDirectorIdPromise;
            let fetchedMovie;
            let fetchedMovies;

            beforeEach(() => {
                fetchedMovie = {
                    genre: 'genre',
                    director: { id: 'id' }
                };
                fetchedMovies = ['movie1', 'movie2'];

                getMovieByIdPromise = Promise.resolve(fetchedMovie);
                getMoviesByDirectorIdPromise = Promise.resolve(fetchedMovies);

                thdbService.getMovieById.mockReturnValue(getMovieByIdPromise);
                thdbService.getMoviesByDirectorId.mockReturnValue(getMoviesByDirectorIdPromise);

                showMovieDetails(dispatch, getState);
            });

            test('should replace movie genre with genre string', done => {
                getMovieByIdPromise.then(() => {
                    expect(mapperService.genresToString).toHaveBeenCalledWith('genre');
                    expect(fetchedMovie.genre).toEqual(genresString);
                    done();
                })
            });

            test('should select movie', done => {
                getMovieByIdPromise.then(() => {
                    expect(dispatch).toHaveBeenCalledWith({
                        type: 'SELECT_MOVIE',
                        payload: fetchedMovie
                    });
                    done();
                });
            });

            describe('if we have director', () => {
                test('should get mapped movies', done => {
                    getMovieByIdPromise.then(() => {
                        expect(mapperService.mapGenresOnMovies).toHaveBeenCalledWith(fetchedMovies, state.genres);
                        done();
                    })
                });

                test('should update movies with mapped movies', done => {
                    getMovieByIdPromise.then(() => {
                        expect(commonActions.updateMovies).toHaveBeenCalledWith(mappedMovies);
                        expect(dispatch).toHaveBeenCalledWith(updateMoviesAction);
                        done();
                    })
                });

                test('should remove selected movie form movie list', done => {
                    getMovieByIdPromise.then(() => {
                        expect(dispatch).toHaveBeenCalledWith({
                            type: 'REMOVE_MOVIE',
                            payload: movieId
                        });
                        done();
                    });
                });
            });

            describe('if we do NOT have director', () => {
                beforeEach(() => {
                    fetchedMovie.director = null;

                    showMovieDetails(dispatch, getState);
                });
                test('should update movies with empty array', done => {
                    getMovieByIdPromise.then(() => {
                        expect(commonActions.updateMovies).toHaveBeenCalledWith([]);
                        expect(dispatch).toHaveBeenCalledWith(updateMoviesAction);
                        done();
                    });
                });
            });

            test('should navigate to movie page', done => {
                getMovieByIdPromise.then(() => {
                    expect(dispatch).toHaveBeenCalledWith({type: 'NAVIGATE_TO_MOVIE'});
                    done();
                });
            });
        });

        describe('when get movie is failed', () => {
            let getMovieByIdPromise;

            beforeEach(() => {
                getMovieByIdPromise = Promise.reject();
                thdbService.getMovieById.mockReturnValue(getMovieByIdPromise);

                showMovieDetails(dispatch, getState);
            });

            test('should navigate to movie page', done => {
                getMovieByIdPromise.catch(() => {
                    expect(dispatch).toHaveBeenCalledWith({type: 'NAVIGATE_TO_MOVIE'});
                    done();
                });
            });
        });
    });
});