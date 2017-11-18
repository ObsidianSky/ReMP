import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Button from './Button';

describe('Button', () => {
    let props;
    let onClick;

    beforeEach(() => {
        onClick = jest.fn();

        props = {
            text: 'text',
            className: 'className',
            onClick
        }
    });

    describe('when we do NOT have children', () => {
        test('should renders component with text', () => {
            const wrapper = shallow(<Button { ...props }/>);

            expect(toJson(wrapper)).toMatchSnapshot();
        });
    });

    describe('when we have children', () => {
        beforeEach(() => {
            props.children = <div>children</div>;
        });

        test('should renders component with children instead of text', () => {
            const wrapper = shallow(<Button { ...props }/>);

            expect(toJson(wrapper)).toMatchSnapshot();
        });
    });

    describe('when we click on button', () => {
        test('should call onclick callbeck', () => {
            const wrapper = shallow(<Button { ...props }/>);

            wrapper.find('button').simulate('click');

            expect(onClick).toHaveBeenCalled();
        });
    });
});
