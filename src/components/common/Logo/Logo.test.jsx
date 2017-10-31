import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Logo from './Logo';

describe('Logo', () => {

    test('should renders correctly', () => {
        const wrapper = shallow(<Logo />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });
});