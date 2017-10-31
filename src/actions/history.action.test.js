import * as sut from './history.actions';

describe('history actions', () => {
    let expected;
    let actual;

    test('should create set history action', () => {
        expected = {
            type: 'SET_HISTORY',
            payload: 'history'
        };
        actual = sut.setHistory('history');

        expect(actual).toEqual(expected);
    });
});