import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Bar from './Bar';

describe('Bar', () => {
    let props;

    beforeEach(() => {
        props = {
            title: 'title',
            children: <div>children</div>
        }
    });

    test('should renders correctly', () => {
        const wrapper = shallow(<Bar />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });
});

