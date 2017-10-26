import { searchReducer as sut } from './search.reducer';

describe('search reducer', () => {
    let initialState;
    
    beforeEach(() => {
        initialState = {
            error: '',
            query: '',
            type: 'title',
            types: [
                { label: 'title', value: 'title' },
                { label: 'director', value: 'director' }
            ]
        };
    });
    
    test('should return unmodified state in case of unhandled action type', () => {
        const action = { type: 'UNHANDLED_ACTION' };
        const expected = initialState;
        const actual = sut(initialState, action);

        expect(actual).toBe(expected);
    });

    describe('when set search query action received', () => {
        let action;
        let state;
        let actual;

        beforeEach(() => {
            action  = { type: 'SET_SEARCH_QUERY', payload: 'query'};
            state = { ...initialState, error: 'some error' };
            actual = sut(state, action);
        });

        test('should set payload as a search query', () => {
            expect(actual.query).toBe(action.payload);
        });

        test('should reset error message', () => {
            expect(actual.error).toBe('');
        });
    });
});