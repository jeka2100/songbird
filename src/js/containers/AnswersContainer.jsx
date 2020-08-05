import React from 'react';
import PropTypes from 'prop-types';
import AsnwersComponent from '../components/AnswersComponent';

function AnswersContainer(props) {
  const { currentBirds, handleClickAnswer, currentBird, correctBird, answersStatus } = props;

  return (
    <AsnwersComponent
      currentBirds={currentBirds}
      handleClickAnswer={(i) => handleClickAnswer(i)}
      currentBird={currentBird}
      correctBird={correctBird}
      answersStatus={answersStatus}
    />
  );
}

export default AnswersContainer;
