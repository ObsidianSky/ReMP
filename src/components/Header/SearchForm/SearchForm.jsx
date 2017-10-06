import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'

import './SearchForm.scss'
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import SearchFilter from '../SearchFilter/SearchFilter';

//TODO extract container logic out of component
//container staff
import { connect } from 'react-redux';
import { searchMovies, setSearchQuery, setSearchType } from '../../../actions';

class SearchForm extends Component {
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
                    <Input value={this.props.value} onChange={this.props.onSearchQueryChange}/>
                </div>
                <div className="search-form__controls">
                    <SearchFilter
                        activeFilter={this.props.selectedType}
                        filters={this.props.searchTypes}
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
    selectedType: PropTypes.string,
    searchTypes: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string
    })).isRequired
};

//container staff
const mapStateToProps = ({ search }) => ({
    selectedType: search.selectedType,
    searchTypes: search.types,
    query: search.query,
    error: search.error
});

export default withRouter(
    connect(
        mapStateToProps,
        {
            onSearchQueryChange: setSearchQuery,
            onSearchTypeChange: setSearchType,
            onSearch: searchMovies
        }
    )(SearchForm)
);