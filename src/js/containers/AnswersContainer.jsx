import React from 'react';
import PropTypes from 'prop-types';

import AsnwersComponent from '../components/AnswersComponent';

function AnswersContainer(props) {
  const {
    currentBirds, handleClickAnswer, currentBird, correctBird, answersStatus,
  } = props;

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

AnswersContainer.propTypes = {
  currentBirds: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleClickAnswer: PropTypes.func.isRequired,
  currentBird: PropTypes.number,
  correctBird: PropTypes.number.isRequired,
  answersStatus: PropTypes.arrayOf(PropTypes.string).isRequired,
};

AnswersContainer.defaultProps = {
  currentBird: null,
};

export default AnswersContainer;
