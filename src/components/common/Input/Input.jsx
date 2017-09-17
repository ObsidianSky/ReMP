import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss'

export default class Input extends React.Component {
    render() {
        return (
            <input type="text" className="input" value="some text"/>
        )
    }
}

Input.propTypes = {};