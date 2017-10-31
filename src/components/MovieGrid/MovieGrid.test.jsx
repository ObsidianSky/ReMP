import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { MovieGrid } from './MovieGrid';

describe('MovieGrid', () => {
    let props;
    let showMovieDetails;

    beforeEach(() => {
        showMovieDetails = jest.fn();

        props = {
            movies: [
                {
                    id: 'id',
                    img: 'img',
                    title: 'title',
                    year: 'year',
                    genre: 'genre',
                    rating: 'rating',
                },
                {
                    id: 'id1',
                    img: 'img1',
                    title: 'title1',
                    year: 'year1',
                    genre: 'genre1',
                    rating: 'rating1',
                }
            ],
            showMovieDetails
        }
    });

    describe('when we have movies', () => {

        test('should renders correctly', () => {
            const wrapper = shallow(<MovieGrid { ...props } />);

            expect(toJson(wrapper)).toMatchSnapshot();
        });

    });

    describe('when we do NOT have movies', () => {
        beforeEach(() => {
            props.movies = [];
        });

        test('should renders correctly', () => {
            const wrapper = shallow(<MovieGrid { ...props } />);

            expect(toJson(wrapper)).toMatchSnapshot();
        });
    });

    describe('when i dont know how to name it at all', () => {
        test('should ', () => {
            const wrapper = shallow(<MovieGrid { ...props } />);
            wrapper.find('Movie').first().simulate('movieClick');

            expect(showMovieDetails).toHaveBeenCalledWith(props.movies[0].id);
        });
    });
});

