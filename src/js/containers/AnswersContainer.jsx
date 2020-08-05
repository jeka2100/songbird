import React from 'react';
import PropTypes from 'prop-types';
import AsnwersComponent from '../components/AnswersComponent';

function AnswersContainer(props) {
  const { currentBirds, handleClickAnswer } = props;

  return (
    <AsnwersComponent
      currentBirds={currentBirds}
      handleClickAnswer={(i) => handleClickAnswer(i)}
    />
  );
}

export default AnswersContainer;
