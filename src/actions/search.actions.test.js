import * as sut from './search.actions';
import * as tmdbService from '../services/tmdb.service';
import * as mapperService from '../services/mapper.service';
import * as commonActions from './common.actions';
import * as moviesActions from './movies.actions';

describe('search actions', () => {
    let dispatch;
    let getState;
    let state;
    let expected;
    let actual;

    beforeEach(() => {
        state = {
            search: {
                query: 'query',
                type: 'type'
            },
            movies: {
                selectedSortType: 'selectedSortType'
            },
            genres: ['genres']
        };

        dispatch = jest.fn();
        getState = jest.fn(() => state);
    });

    describe('set search query action', () => {
        test('should create action', () => {
            expected = {
                type: 'SET_SEARCH_QUERY',
                payload: 'query'
            };

            actual = sut.setSearchQuery('query');

            expect(actual).toEqual(expected);
        });
    });

    describe('set search type action', () => {
        test('should create action', () => {
            expected = {
                type: 'SET_SEARCH_TYPE',
                payload: 'type'
            };

            actual = sut.setSearchType('type');

            expect(actual).toEqual(expected);
        });
    });

    describe('reset search action', () => {
        test('should create action', () => {
            expected = {
                type: 'RESET_SEARCH'
            };

            actual = sut.resetSearch();

            expect(actual).toEqual(expected);
        });
    });

    describe('search movies action', () => {
        let mappedMovies;
        let searchMovies;
        let updateMoviesAction;
        let sortMoviesAction;
        let errorAction;

        beforeEach(() => {
            mappedMovies = ['movie1', 'movie2'];
            updateMoviesAction = { update: 'action' };
            sortMoviesAction = { sort: 'action' };
            errorAction = { error: 'action' };

            searchMovies = sut.searchMovies();

            jest.spyOn(tmdbService, 'getMoviesSearchResult');
            jest.spyOn(mapperService, 'mapGenresOnMovies').mockReturnValue(mappedMovies);
            jest.spyOn(commonActions, 'updateMovies').mockReturnValue(updateMoviesAction);
            jest.spyOn(commonActions, 'setError').mockReturnValue(errorAction);
            jest.spyOn(moviesActions, 'sortMovies').mockReturnValue(sortMoviesAction);
        });

        test('should get movies search result', () => {
            searchMovies(dispatch, getState);

            expect(tmdbService.getMoviesSearchResult).toHaveBeenCalledWith(state.search.query, state.search.type);
        });

        describe('when search is succeeded', () => {
            let movieSearchPromise;

            beforeEach(() => {
                movieSearchPromise = Promise.resolve('abc');
                tmdbService.getMoviesSearchResult.mockReturnValue(movieSearchPromise);

                searchMovies(dispatch, getState);
            });
            
            test('should update movies', done => {
                movieSearchPromise.then(() => {
                    expect(commonActions.updateMovies).toHaveBeenCalledWith(mappedMovies);
                    expect(dispatch).toHaveBeenCalledWith(updateMoviesAction);
                    done();
                });
            });
            
            test('should sort movies by selected sort type', done => {
                movieSearchPromise.then(() => {
                    expect(moviesActions.sortMovies).toHaveBeenCalledWith(state.movies.selectedSortType);
                    expect(dispatch).toHaveBeenCalledWith(sortMoviesAction);
                    done();
                });
            });

            test('should navigate to search result page', done => {
                movieSearchPromise.then(() => {
                    expect(dispatch).toHaveBeenCalledWith({ type: 'NAVIGATE_TO_SEARCH_RESULTS' });
                    done();
                });
            });
        });

        describe('when search is failed', () => {
            let movieSearchPromise;
            let errorMessage;

            beforeEach(() => {
                errorMessage = 'errorMessage';
                movieSearchPromise = Promise.reject(errorMessage);
                tmdbService.getMoviesSearchResult.mockReturnValue(movieSearchPromise);

                searchMovies(dispatch, getState);
            });

            test('should set error', done => {
                movieSearchPromise.catch(() => {
                    expect(commonActions.setError).toHaveBeenCalledWith(errorMessage);
                    expect(dispatch).toHaveBeenCalledWith(errorAction);
                    done();
                });
            });

            test('should navigate to search result page', done => {
                movieSearchPromise.catch(() => {
                    expect(dispatch).toHaveBeenCalledWith({ type: 'NAVIGATE_TO_SEARCH_RESULTS' });
                    done();
                });
            });
        });
    });
});