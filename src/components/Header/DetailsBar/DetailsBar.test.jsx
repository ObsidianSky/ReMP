import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { DetailsBar } from './DetailsBar';

describe('DetailsBar', () => {

    describe('when we do NOT have director name', () => {
        test('should renders correctly', () => {
            const wrapper = shallow(<DetailsBar />);

            expect(toJson(wrapper)).toMatchSnapshot();
        });
    });

    describe('when we have director name', () => {
        let props;

        beforeEach(() => {
            props = {
                directorName: 'directorName'
            }
        });

        test('should renders correctly', () => {
            const wrapper = shallow(<DetailsBar { ...props }/>);

            expect(toJson(wrapper)).toMatchSnapshot();
        });
    });
});
