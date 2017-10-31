import * as sut from './sort.service';

describe('sort service', () => {
    let expected;
    let actual;

    test('should sort provided list of objects by key field in DESC', () => {
        const list = [{ id: 3 }, { id: 1 }, { id: 2 }];
        expected = [{ id: 3 }, { id: 2}, { id: 1 }];
        actual = sut.sort('id', list);

        expect(actual).toEqual(expected);
    });
});