import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { navigateHome } from '../../../../actions/navigation.actions';
import Button from '../../../common/Button/Button';

const HomeButton = ({ navigateHome }) => (
    <Button onClick={navigateHome} className="btn--wide">Search</Button>
);

HomeButton.propTypes = {
    navigateHome: PropTypes.func.isRequired
};

export default connect(null, { navigateHome })(HomeButton);
