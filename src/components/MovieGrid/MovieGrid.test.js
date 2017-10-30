import React from 'react';
import { shallow } from 'enzyme';
import { MovieGrid } from './MovieGrid';

describe('MovieGrid', () => {
    let props;

    beforeEach(() => {
        props = {
            movies: [
                {
                    img: 'img',
                    title: 'title',
                    year: 'year',
                    genre: 'genre',
                    rating: 'rating',
                },
                {
                    img: 'img1',
                    title: 'title1',
                    year: 'year1',
                    genre: 'genre1',
                    rating: 'rating1',
                }
            ]
        }
    });

    test('MovieGrid  test', () => {
        // const wrapper = shallow(<MovieGrid { ...props } />);
        //
        // expect(wrapper.find('.movie-grid')).to.have.length(1);
    });
});

