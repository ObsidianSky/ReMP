import { moviesReducer as sut,initialMovieState as initialState } from './movies.reducer';
import * as sortService from '../services/sort.service'

describe('movies reducer', () => {
    let action;
    let state;
    let actual;

    test('should return unmodified state in case of unhandled action type', () => {
        action = { type: 'UNHANDLED_ACTION' };
        state = { ...initialState };
        actual = sut(initialState, action);

        expect(actual).toEqual(state);
    });

    describe('when sort movies action received', () => {
        let sortedMovies;

        beforeEach(() => {
            sortedMovies = [];

            jest.spyOn(sortService, 'sort').mockReturnValue(sortedMovies);

            action  = { type: 'SORT_MOVIES', payload: 'sort field'};
            state = { ...initialState, items: [] };
            actual = sut(state, action);
        });

        test('should sort current movies by provided sort type', () => {
            expect(sortService.sort).toHaveBeenCalledWith(action.payload, state.items);
            expect(actual.items).toBe(sortedMovies);
        });

        test('should set payload as selected sort type', () => {
            expect(actual.selectedSortType).toBe(action.payload);
        });

        test('should NOT modify other fields', () => {
            expect(actual.selectedMovie).toBe(state.selectedMovie);
            expect(actual.sortTypes).toBe(state.sortTypes);
        });
    });

    describe('when update movie action received', () => {

        beforeEach(() => {
            action  = { type: 'UPDATE_MOVIES', payload: ['item1', 'item2'] };
            state = { ...initialState };
            actual = sut(state, action);
        });

        test('should set payload as items', () => {
            expect(actual.items).toEqual(action.payload);
        });

        test('should NOT modify other fields', () => {
            expect(actual.selectedMovie).toBe(state.selectedMovie);
            expect(actual.selectedSortType).toBe(state.selectedSortType);
            expect(actual.sortTypes).toBe(state.sortTypes);
        });
    });

    describe('when select movie action received', () => {

        beforeEach(() => {
            action  = { type: 'SELECT_MOVIE', payload: {} };
            state = { ...initialState };
            actual = sut(state, action);
        });

        test('should set payload as selected movie', () => {
            expect(actual.selectedMovie).toEqual(action.payload);
        });

        test('should NOT modify other fields', () => {
            expect(actual.items).toBe(state.items);
            expect(actual.selectedSortType).toBe(state.selectedSortType);
            expect(actual.sortTypes).toBe(state.sortTypes);
        });
    });

    describe('when set search error received', () => {

        beforeEach(() => {
            action  = { type: 'SET_SEARCH_ERROR'  };
            state = { ...initialState };
            actual = sut(state, action);
        });

        test('should reset movies', () => {
            expect(actual.items).toEqual([]);
        });

        test('should NOT modify other fields', () => {
            expect(actual.selectedMovie).toBe(state.selectedMovie);
            expect(actual.selectedSortType).toBe(state.selectedSortType);
            expect(actual.sortTypes).toBe(state.sortTypes);
        });
    });

    describe('when reset movie action received', () => {

        beforeEach(() => {
            action  = { type: 'RESET_MOVIES' };
            state = { ...initialState, items: [1,2,3,4], selectedMovie: {}, selectedSortType: 'some_type', };
            actual = sut(state, action);
        });

        test('should reset state to initial', () => {
            expect(actual).toEqual(initialState);
        });
    });
});