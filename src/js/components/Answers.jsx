import React from 'react';
import PropTypes from 'prop-types';

function Answers(props) {
  const { currentBirds } = props;

  const AnswersList = Object.values(currentBirds).map((item) => {
    const test = 'test';
    return (
      <li className="list-group-item list-group-item-action">
        <span className="answerStatus" />
        {item.name}
      </li>
    );
  });

  return (
    <ul className="list-group answers">
      {AnswersList}
    </ul>
  );
}

export default Answers;
