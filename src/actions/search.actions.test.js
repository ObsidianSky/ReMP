import * as searchActions from './search.actions';
import * as tmdbService from '../services/tmdb.service';
import * as mapperService from '../services/mapper.service';

describe('search actions', () => {
    let sut;
    let dispatch;
    let getState;
    let state;

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

    describe('search movies', () => {
        let mappedMovies;
        
        beforeEach(() => {
            mappedMovies = ['movie1', 'movie2'];
            
            sut = searchActions.searchMovies();

            jest.spyOn(tmdbService, 'getMoviesSearchResult');
            jest.spyOn(mapperService, 'mapGenresOnMovies').mockReturnValue(mappedMovies);
        });

        test('should get movies search result', () => {
            sut(dispatch, getState);

            expect(tmdbService.getMoviesSearchResult).toHaveBeenCalledWith(state.search.query, state.search.type);
        });

        describe('when search is success', () => {
            let movieSearchPromise;

            beforeEach(() => {
                movieSearchPromise = Promise.resolve('abc');
                tmdbService.getMoviesSearchResult.mockReturnValue(movieSearchPromise);

                sut(dispatch, getState);
            });
            
            test('should update movies', done => {
                movieSearchPromise.then(() => {
                    expect(dispatch).toHaveBeenCalledWith({
                        type: 'UPDATE_MOVIES',
                        payload: mappedMovies
                    });
                    done();
                });
            });
            
            test('should sort movies by selected sort type', done => {
                movieSearchPromise.then(() => {
                    expect(dispatch).toHaveBeenCalledWith({
                        type: 'SORT_MOVIES',
                        payload: state.movies.selectedSortType
                    });
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
    });
});