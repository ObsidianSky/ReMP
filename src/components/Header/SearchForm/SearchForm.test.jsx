import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { SearchForm } from './SearchForm';

describe('SearchForm', () => {
    let props;
    let onSearch;

    beforeEach(() => {
        onSearch = jest.fn();

        props = {
            onSearchQueryChange: () => {},
            onSearchTypeChange: () => {},
            onSearch,
            query: 'query',
            error: 'error',
            type: 'type',
            searchTypes: [
                { label: 'title', value: 'title' },
                { label: 'director', value: 'director' }
            ]
        }
    });

    test('should renders correctly', () => {
        const wrapper = shallow(<SearchForm { ...props }/>);

        expect(toJson(wrapper)).toMatchSnapshot();
    });

    describe('on form submit', () => {
        let preventDefault;
        let wrapper;

        beforeEach(() => {
            preventDefault = jest.fn();
            wrapper = shallow(<SearchForm { ...props }/>);
        });

        test('should prevent default form behaviour', () => {
            wrapper.find('.search-form').simulate('submit', { preventDefault });

            expect(preventDefault).toHaveBeenCalled();
        });

        test('should call on search callback', () => {
            wrapper.find('.search-form').simulate('submit', { preventDefault });

            expect(onSearch).toHaveBeenCalled();
        });
    });
});