import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchFilter.scss'
import Button from '../../common/Button/Button';

const classMap = {
    search: 'btn--narrow btn--gray',
    sort: 'btn--link'
};

class SearchFilter extends Component {
    getClass(filter) {
        const classes = classMap[this.props.type];

        return this.isActive(filter)
            ? `${classes} active`
            : classes;
    }

    isActive(filter) {
        return filter.value === this.props.activeFilter;
    }

    changeFilter(filter) {
        this.props.onSelect(filter);
    }

    getFilters() {
        return this.props.filters
            .map((filter, index) =>
                <Button className={this.getClass(filter)}
                        onClick={() => this.changeFilter(filter.value)}
                        key={index}
                >
                    {filter.label}
                </Button>
            )
    }

    render() {
        return (
            <div className="search-filter">
                <div className={`search-filter__heading search-filter__heading--${this.props.type}`}>
                    {this.props.title}
                </div>
                <div className="search-filter__filters">
                    {this.getFilters()}
                </div>
            </div>
        )
    }
}

SearchFilter.defaultProps = {
    title: '',
    type: 'search'
};

SearchFilter.propTypes = {
    title: PropTypes.string,
    type: PropTypes.oneOf(['search', 'sort']),
    onSelect: PropTypes.func.isRequired,
    filters: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string
    })).isRequired,
    activeFilter: PropTypes.string
};

export default SearchFilter;