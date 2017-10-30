import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Movie from './Movie';

describe('Movie', () => {
    let props;
    let onMovieClick;

    beforeEach(() => {
        onMovieClick = jest.fn();
        props = {
            img: 'img',
            title: 'title',
            year: 'year',
            genre: 'genre',
            rating: 'rating',
            onMovieClick
        }
    });

    test('should renders correctly', () => {
        const wrapper = shallow(<Movie { ...props } />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('should call provided callback on image click', () => {
        const wrapper  = shallow(<Movie { ...props } />);

        wrapper .find('.movie__image-link').simulate('click');

        expect(onMovieClick).toHaveBeenCalled();
    });

    test('should call provided callback on title click', () => {
        const wrapper  = shallow(<Movie { ...props } />);

        wrapper .find('.movie__title').simulate('click');

        expect(onMovieClick).toHaveBeenCalled();
    });
});

