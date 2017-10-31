import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

import Bar from '../../common/Bar/Bar';
import { sortMovies } from '../../../actions';
import RadioButtonGroup from '../../common/RadioButtonGroup/RadioButtonGroup';

export const SortBar = ({ moviesAmount, sortTypes, selectedSortType, sortMovies }) => {
    if (moviesAmount) {
        return (
            <Bar title={`${moviesAmount} movies found`}>
                <RadioButtonGroup options={sortTypes}
                                  type="sort"
                                  activeOption={selectedSortType}
                                  onSelect={sortMovies}
                                  title="Sort by"/>
            </Bar>
        );
    } else {
        return <Bar/>;
    }
};

SortBar.propTypes = {
    moviesAmount: PropTypes.number.isRequired,
    sortTypes: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired
        })
    ).isRequired,
    selectedSortType: PropTypes.string.isRequired,
    sortMovies: PropTypes.func.isRequired,
};

const mapStateToProps = ({ movies }) => ({
    moviesAmount: movies.items.length,
    sortTypes: movies.sortTypes,
    selectedSortType: movies.selectedSortType
});

export default connect(mapStateToProps, { sortMovies })(SortBar);