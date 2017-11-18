import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Bar from '../../common/Bar/Bar';

export const DetailsBar = ({ directorName }) => (
    <Bar title={directorName ? `Films by ${directorName}` : ''} />
);

DetailsBar.propTypes = {
    directorName: PropTypes.string
};

const mapStateToProps = ({ movies }) => ({
    // for some reasons we can have movie without director
    directorName: movies.selectedMovie.director && movies.selectedMovie.director.name,
});

export default connect(mapStateToProps)(DetailsBar);