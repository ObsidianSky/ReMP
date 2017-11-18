import { historyReducer as sut } from './history.reducer';

describe('genres reducer', () => {
    let action;
    let state;
    let actual;

    test('should return unmodified state in case of unhandled action type', () => {
        action = { type: 'UNHANDLED_ACTION' };
        actual = sut(null, action);

        expect(actual).toEqual(null);
    });

    describe('when set history action received', () => {

        beforeEach(() => {
            action  = { type: 'SET_HISTORY', payload: 'history'};
            actual = sut(null, action);
        });

        test('should set payload as history', () => {
            expect(actual).toBe(action.payload);
        });
    });

});