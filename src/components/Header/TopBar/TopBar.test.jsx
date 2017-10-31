import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import TopBar from './TopBar';

describe('Header', () => {

    test('should renders correctly', () => {
        const wrapper = shallow(<TopBar />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });
});

