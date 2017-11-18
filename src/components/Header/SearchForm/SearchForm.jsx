import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './SearchForm.scss'
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import RadioButtonGroup from '../../common/RadioButtonGroup/RadioButtonGroup';

import { searchMovies, setSearchQuery, setSearchType } from '../../../actions';

export class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(e) {
        e.preventDefault();
        this.props.onSearch();
    }

    render() {
        return (
            <form className="search-form" onSubmit={this.onFormSubmit}>
                <div className="search-form__title">Find your movie</div>
                <div className="search-form__error">{this.props.error}</div>
                <div className="search-form__input">
                    <Input value={this.props.query} onChange={this.props.onSearchQueryChange}/>
                </div>
                <div className="search-form__controls">
                    <RadioButtonGroup
                        activeOption={this.props.type}
                        options={this.props.searchTypes}
                        onSelect={this.props.onSearchTypeChange}
                        title="Search by"
                    />
                    <Button className="btn--wide btn--pink" onClick={this.props.onSearch}>Search</Button>
                </div>
            </form>
        )
    }
}

SearchForm.propTypes = {
    onSearchQueryChange: PropTypes.func.isRequired,
    onSearchTypeChange: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired,
    query: PropTypes.string,
    error: PropTypes.string,
    type: PropTypes.string,
    searchTypes: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
    })).isRequired
};

const mapStateToProps = ({ search }) => ({
    type: search.type,
    searchTypes: search.types,
    query: search.query,
    error: search.error
});

const mapDispatchToProps = {
    onSearchQueryChange: setSearchQuery,
    onSearchTypeChange: setSearchType,
    onSearch: searchMovies
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
