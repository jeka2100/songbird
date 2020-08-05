import React from 'react';
import PropTypes from 'prop-types';

function AnswersComponent(props) {
  const { currentBirds, handleClickAnswer, answersStatus, currentBird } = props;

  const AnswersList = Object.values(currentBirds).map((item, index) => {
    const answerStatusClass = answersStatus === null ? 'answerStatus' : `answerStatus ${answersStatus[index]}`;
    return (
      <button type="button" onClick={() => handleClickAnswer(index)} className="list-group-item list-group-item-action">
        <span className={answerStatusClass} />
        {item.name}
      </button>
    );
});

  return (
    <ul className="list-group answers">
      {AnswersList}
    </ul>
  );
}

export default AnswersComponent;
