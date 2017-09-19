import React from 'react';
import PropTypes from 'prop-types';
import './SearchFilter.scss'
import Button from '../../common/Button/Button';

const classMap = {
    search: 'btn--narrow btn--gray',
    sort: 'btn--link'
};

export default class SearchFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: this.props.filters[0]
        }
    }

    getClass(filter) {
        const classes = classMap[this.props.type];

        return this.isActive(filter)
            ? `${classes} active`
            : classes;
    }

    isActive(filter) {
        return filter === this.state.active;
    }

    changeFilter(filter) {
        this.props.onSelect(filter);
        this.setState({
            active: filter
        })
    }

    getFilters() {
        return this.props.filters
            .map((filter, index) =>
                <Button className={this.getClass(filter)}
                        onClick={() => this.changeFilter(filter)}
                        key={index}
                >
                    {filter}
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
    title: 'Default title',
    type: 'search',
    onSelect: () => console.log('default onSelect')
};

SearchFilter.propTypes = {
    title: PropTypes.string,
    type: PropTypes.oneOf(['search', 'sort']),
    onSelect: PropTypes.func.isRequired,
    filters: PropTypes.arrayOf(PropTypes.string).isRequired
};