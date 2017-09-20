import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Input.scss'

class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        const value = event.target.value;
        this.setState({ value });
        this.props.onChange(value);
    }

    render() {
        return (
            <input type="text"
                   className="input"
                   value={this.state.value}
                   placeholder={this.props.placeholder}
                   onChange={this.onChange}
            />
        )
    }
}

Input.defaultProps = {
    placeholder: '',
};

Input.propTypes = {
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default Input;