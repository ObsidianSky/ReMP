import React, { Component } from 'react';
import PropTypes from 'prop-types';
if (process.env.BROWSER) {
	require('./Input.scss');
}

class Input extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        const value = event.target.value;
        this.props.onChange(value);
    }

    render() {
        return (
            <input type="text"
                   className="input"
                   value={this.props.value}
                   placeholder={this.props.placeholder}
                   onChange={this.onChange}
            />
        )
    }
}

Input.defaultProps = {
    placeholder: ''
};

Input.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Input;