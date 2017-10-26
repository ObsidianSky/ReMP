import React from 'react';
import Bar from '../../common/Bar/Bar';
import { connect } from 'react-redux';

import { sortMovies } from '../../../actions';
import RadioButtonGroup from '../../common/RadioButtonGroup/RadioButtonGroup';

const BottomBar = ({ moviesAmount, sortTypes, selectedSortType, sortMovies }) => {
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

const mapStateToProps = ({ movies }) => ({
    moviesAmount: movies.items.length,
    sortTypes: movies.sortTypes,
    selectedSortType: movies.selectedSortType
});

export default connect(mapStateToProps, { sortMovies })(BottomBar);