import { searchReducer as sut, initialSearchState as initialState } from './search.reducer';

describe('search reducer', () => {
    let action;
    let state;
    let actual;


    test('should return unmodified state in case of unhandled action type', () => {
        action = { type: 'UNHANDLED_ACTION' };
        state = { ...initialState };
        actual = sut(initialState, action);

        expect(actual).toEqual(state);
    });

    describe('when set search query action received', () => {

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

        test('should NOT modify other fields', () => {
            expect(actual.type).toBe(state.type);
            expect(actual.types).toBe(state.types);
        });
    });

    describe('when set search type action received', () => {

        beforeEach(() => {
            action  = { type: 'SET_SEARCH_TYPE', payload: 'type'};
            state = { ...initialState, error: 'some error' };
            actual = sut(state, action);
        });

        test('should set payload as a search type', () => {
            expect(actual.type).toBe(action.payload);
        });

        test('should reset error message', () => {
            expect(actual.error).toBe('');
        });

        test('should NOT modify other fields', () => {
            expect(actual.query).toBe(state.query);
            expect(actual.types).toBe(state.types);
        });
    });

    describe('when set search error action received', () => {

        beforeEach(() => {
            action  = { type: 'SET_SEARCH_ERROR', payload: 'error'};
            state = { ...initialState };
            actual = sut(state, action);
        });

        test('should set payload as a search error', () => {
            expect(actual.error).toBe(action.payload);
        });

        test('should NOT modify other fields', () => {
            expect(actual.query).toBe(state.query);
            expect(actual.type).toBe(state.type);
            expect(actual.types).toBe(state.types);
        });
    });

    describe('when reset search action received', () => {

        beforeEach(() => {
            action  = { type: 'RESET_SEARCH' };
            state = { ...initialState, error: 'error', query: 'query', type: 'some_type', };
            actual = sut(state, action);
        });

        test('should reset state to initial', () => {
            expect(actual).toEqual(initialState);
        });
    });
});