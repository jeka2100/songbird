import React from 'react';
import PropTypes from 'prop-types';

function NextButton(props) {
  const { nextLevel, isCorrectAnswer } = props;
  const buttonClass = isCorrectAnswer ? 'nextButton btn btn-primary' : 'nextButton btn btn-primary disabled';
  return (
    <button onClick={() => nextLevel()} type="button" className={buttonClass}>Следующий уровень</button>
  );
}

NextButton.propTypes = {
  nextLevel: PropTypes.func.isRequired,
  isCorrectAnswer: PropTypes.bool.isRequired,
};

export default NextButton;
