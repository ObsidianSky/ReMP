import { genresReducer as sut } from './genres.reducer';

describe('genres reducer', () => {
    let action;
    let state;
    let actual;

    test('should return unmodified state in case of unhandled action type', () => {
        action = { type: 'UNHANDLED_ACTION' };
        actual = sut(null, action);

        expect(actual).toEqual(null);
    });

    describe('when set genres action received', () => {

        beforeEach(() => {
            action  = { type: 'SET_GENRES', payload: 'genres'};
            actual = sut(null, action);
        });

        test('should set payload as genres', () => {
            expect(actual).toBe(action.payload);
        });
    });
});