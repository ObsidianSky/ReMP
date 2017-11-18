import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { SortBar } from './SortBar';

describe('SortBar', () => {
    let props;

    beforeEach(() => {
        props = {
            moviesAmount: 2,
            sortTypes: [
                { label: 'release date', value: 'year' },
                { label: 'rating', value: 'rating' }
            ],
            selectedSortType: 'selectedSortType',
            sortMovies: () => {},
        }
    });

    describe('when we have movies', () => {
        test('should renders correctly', () => {
            const wrapper = shallow(<SortBar { ...props } />);

            expect(toJson(wrapper)).toMatchSnapshot();
        });
    });

    describe('when we do NOT have movies', () => {
        beforeEach(() => {
            props.moviesAmount = 0;
        });

        test('should renders correctly', () => {
            const wrapper = shallow(<SortBar { ...props } />);

            expect(toJson(wrapper)).toMatchSnapshot();
        });
    });
});

