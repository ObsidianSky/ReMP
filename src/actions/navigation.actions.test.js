import * as sut from './navigation.actions';

describe('navigation actions', () => {
    let expected;
    let actual;

    describe('navigate home action', () => {
        test('should create action', () => {
            expected = { type: 'NAVIGATE_TO_HOME' };
            actual = sut.navigateHome();

            expect(actual).toEqual(expected);
        });
    });
});