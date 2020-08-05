import React from 'react';
import PropTypes from 'prop-types';

import BirdInfoComponent from '../components/BirdInfo';

function BirdInfo(props) {
  const { currentBirdCard } = props;
  return (
    <BirdInfoComponent />
  );
}

export default BirdInfo;
