import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Input from './Input';

describe('Input', () => {
    let props;
    let onChange;

    beforeEach(() => {
        onChange = jest.fn();

        props = {
            value: 'value',
            placeholder: 'placeholder',
            onChange
        }
    });

    test('should renders correctly', () => {
        const wrapper = shallow(<Input { ...props }/>);

        expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('should call on change callback with input value', () => {
        const inputValue = 'input value';
        const wrapper = shallow(<Input { ...props }/>);

        wrapper.find('input').simulate('change', { target: { value: inputValue } });

        expect(onChange).toHaveBeenCalledWith(inputValue)
    });
});
