import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import RadioButtonGroup from './RadioButtonGroup';

describe('RadioButtonGroup', () => {
    let props;

    beforeEach(() => {
        props = {
            title: 'title',
            type: 'search',
            onSelect: () => {},
            options: [
                {
                    label: 'label1',
                    value: 'value1'
                }, {
                    label: 'label2',
                    value: 'value2'
                }
            ],
            activeOption: 'value2'
        }
    });

    describe('when it is search radio button group', () => {
        test('should renders correctly', () => {
            const wrapper = shallow(<RadioButtonGroup { ...props } />);

            expect(toJson(wrapper)).toMatchSnapshot();
        });
    });

    describe('when it is sort radio button group', () => {
        beforeEach(() => {
            props.type = 'sort';
        });

        test('should renders correctly', () => {
            const wrapper = shallow(<RadioButtonGroup { ...props } />);

            expect(toJson(wrapper)).toMatchSnapshot();
        });
    });

    describe('when there is no active option', () => {
        beforeEach(() => {
            props.activeOption = '';
        });

        test('should renders correctly', () => {
            const wrapper = shallow(<RadioButtonGroup { ...props } />);

            expect(toJson(wrapper)).toMatchSnapshot();
        });
    });
});