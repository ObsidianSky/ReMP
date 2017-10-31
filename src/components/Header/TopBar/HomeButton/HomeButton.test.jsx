import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { HomeButton } from './HomeButton';

describe('HomeButton', () => {
    let props;
    let navigateHome;

    beforeEach(() => {
        navigateHome = jest.fn();
        props = { navigateHome };
    });

    test('should renders correctly', () => {
        const wrapper = shallow(<HomeButton { ...props }/>);

        expect(toJson(wrapper)).toMatchSnapshot();
    });
});

