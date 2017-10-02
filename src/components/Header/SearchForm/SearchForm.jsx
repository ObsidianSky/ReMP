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
import { search, setSearchQuery, setSearchType } from '../../../actionCreators';

class SearchForm extends Component {
    render() {
        return (
            <div className="search-form">
                <div className="search-form__title">Find your movie</div>
                <div className="search-form__input">
                    <Input value={this.props.value} onChange={this.props.onSearchQueryChange}/>
                </div>
                <div className="search-form__controls">
                    <SearchFilter
                        activeFilter={this.props.activeType}
                        filters={this.props.searchTypes}
                        onSelect={this.props.onSearchTypeChange}
                        title="Search by"
                    />
                    <Button className="btn--wide btn--pink" onClick={this.props.onSearch}>Search</Button>
                </div>
            </div>
        )
    }
}

SearchForm.propTypes = {
    onSearchQueryChange: PropTypes.func.isRequired,
    onSearchTypeChange: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired,
    query: PropTypes.string,
    activeType: PropTypes.string,
    searchTypes: PropTypes.arrayOf(PropTypes.string).isRequired
};

//container staff
const mapStateToProps = ({ search }) => ({
    activeType: search.activeType,
    searchTypes: search.types,
    query: search.query
});

export default withRouter(
    connect(
        mapStateToProps,
        {
            onSearchQueryChange: setSearchQuery,
            onSearchTypeChange: setSearchType,
            onSearch: search
        }
    )(SearchForm)
);