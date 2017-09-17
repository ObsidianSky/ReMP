import React from 'react';
import PropTypes from 'prop-types';
import './SearchForm.scss'
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import SearchFilter from '../SearchFilter/SearchFilter';

export default class SearchForm extends React.Component {
    constructor() {
        super();
        this.state = {
            searchFilters: ['Title', 'Director']
        };
    }
    render() {
        return (
            <div className="search-form">
                <div className="search-form__title">Find your movie</div>
                <div className="search-form__input"><Input/></div>
                <div className="search-form__controls">
                    <SearchFilter filters={this.state.searchFilters}/>
                    <Button className="btn--wide btn--pink">Search</Button>
                </div>
            </div>
        )
    }
}

SearchForm.propTypes = {};