import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { MovieDetails } from './MovieDetails';

describe('MovieDetails', () => {
    let props;

    beforeEach(() => {
        props = {
            img: 'img',
            title: 'title',
            year: 'year',
            genre: 'genre',
            rating: 'rating',
            duration: 'duration',
            description: 'description',
            cast: 'cast'
        };
    });

    describe('when we do NOT have director', () => {
        test('should renders correctly', () => {
            const wrapper = shallow(<MovieDetails { ...props }/>);

            expect(toJson(wrapper)).toMatchSnapshot();
        });
    });

    describe('when we have director', () => {
        beforeEach(() => {
            props.director = {
                name: 'director'
            };
        });
        test('should renders correctly', () => {
            const wrapper = shallow(<MovieDetails { ...props }/>);

            expect(toJson(wrapper)).toMatchSnapshot();
        });
    });
});