import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '../../../common/Button/Button';

export const HomeButton = ({ navigateHome }) => (
    <Button onClick={()=>{console.log('go home')}} className="btn--wide">Search</Button>
);

// HomeButton.propTypes = {
//     navigateHome: PropTypes.func.isRequired
// };

export default connect(null, null)(HomeButton);
