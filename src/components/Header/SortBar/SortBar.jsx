import React, { Component } from 'react';
import Bar from '../../common/Bar/Bar';
import SearchFilter from '../SearchFilter/SearchFilter';

import { connect } from 'react-redux';
import { sortMovies } from '../../../actions';

class BottomBar extends Component {
    render() {
        if(this.props.moviesAmount) {
            return (
                <Bar title={`${this.props.moviesAmount} movies found`}>
                    <SearchFilter filters={this.props.sortTypes}
                                  type="sort"
                                  activeFilter={this.props.selectedSortType}
                                  onSelect={this.props.sortMovies}
                                  title="Sort by"/>
                </Bar>
            );
        } else {
            return <Bar/>;
        }
    }
}

const mapStateToProps = ({ movies }) => ({
    moviesAmount: movies.items.length,
    sortTypes: movies.sortTypes,
    selectedSortType: movies.selectedSortType
});

export default connect(mapStateToProps, { sortMovies } )(BottomBar);