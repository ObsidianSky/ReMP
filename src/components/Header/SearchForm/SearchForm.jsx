import React, { Component } from 'react';
import './SearchForm.scss'
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import SearchFilter from '../SearchFilter/SearchFilter';

class SearchForm extends React.Component {
    constructor() {
        super();
        this.state = {
            searchFilters: ['Title', 'Director'],
            activeFilter: 'Title',
            searchQuery: ''
        };

        this.onFilterChange = this.onFilterChange.bind(this);
        this.onQueryChange = this.onQueryChange.bind(this);
        this.search = this.search.bind(this);
    }

    onFilterChange(filter) {
        this.setState({
            activeFilter: filter
        })
    }

    onQueryChange(searchQuery) {
        this.setState({
            searchQuery: searchQuery
        })
    }

    search() {
        //search will be here
    }

    render() {
        return (
            <div className="search-form">
                <div className="search-form__title">Find your movie</div>
                <div className="search-form__input"><Input onChange={this.onQueryChange}/></div>
                <div className="search-form__controls">
                    <SearchFilter filters={this.state.searchFilters} onSelect={this.onFilterChange}/>
                    <Button className="btn--wide btn--pink" onClick={this.search}>Search</Button>
                </div>
            </div>
        )
    }
}

export default SearchForm;