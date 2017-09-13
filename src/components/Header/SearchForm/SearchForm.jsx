import React from 'react';
import PropTypes from 'prop-types';
import './SearchForm.scss'

export default class SearchForm extends React.Component {
    render() {
        return (
            <div className="search-form">
                <div className="search-form__title"></div>
                <div className="search-form__input"></div>
                <div className="search-form__controls"></div>
            </div>
        )
    }
}

SearchForm.propTypes = {};