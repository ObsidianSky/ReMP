import React, { Component } from 'react';
import PropTypes from 'prop-types';
if (process.env.BROWSER) {
	require('./RadioButtonGroup.scss');
}

import Button from '../Button/Button';

const classMap = {
    search: 'btn--narrow btn--gray',
    sort: 'btn--link'
};

class RadioButtonGroup extends Component {
    getClass(option) {
        const classes = classMap[this.props.type];

        return this.isActive(option)
            ? `${classes} active`
            : classes;
    }

    isActive(option) {
        return option.value === this.props.activeOption;
    }

    selectOption(option) {
        this.props.onSelect(option);
    }

    getOptions() {
        return this.props.options
            .map((option, index) =>
                <Button className={this.getClass(option)}
                        onClick={() => this.selectOption(option.value)}
                        key={index}
                >
                    {option.label}
                </Button>
            )
    }

    render() {
        return (
            <div className="radio-button-group">
                <div className={`radio-button-group__heading radio-button-group__heading--${this.props.type}`}>
                    {this.props.title}
                </div>
                <div className="radio-button-group__options">
                    {this.getOptions()}
                </div>
            </div>
        )
    }
}

RadioButtonGroup.defaultProps = {
    title: '',
    type: 'search'
};

RadioButtonGroup.propTypes = {
    title: PropTypes.string,
    type: PropTypes.oneOf(['search', 'sort']),
    onSelect: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string
    })).isRequired,
    activeOption: PropTypes.string
};

export default RadioButtonGroup;