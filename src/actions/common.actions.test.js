import * as sut from './common.actions';

describe('common actions', () => {
    let expected;
    let actual;

    test('should create update movies action', () => {
        expected = {
            type: 'UPDATE_MOVIES',
            payload: 'movies'
        };
        actual = sut.updateMovies('movies');

        expect(actual).toEqual(expected);
    });

    test('should create set search error action', () => {
        expected = {
            type: 'SET_SEARCH_ERROR',
            payload: 'error'
        };
        actual = sut.setError('error');

        expect(actual).toEqual(expected);
    });
});