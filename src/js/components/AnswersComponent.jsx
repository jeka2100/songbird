import React from 'react';
import PropTypes from 'prop-types';

function AnswersComponent(props) {
  const { currentBirds, handleClickAnswer } = props;

  const AnswersList = Object.values(currentBirds).map((item, index) => (
    <button type="button" onClick={() => handleClickAnswer(index)} className="list-group-item list-group-item-action">
      <span className="answerStatus" />
      {item.name}
    </button>
  ));

  return (
    <ul className="list-group answers">
      {AnswersList}
    </ul>
  );
}

export default AnswersComponent;
