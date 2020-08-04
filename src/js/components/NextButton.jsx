import React from 'react';
import PropTypes from 'prop-types';

function NextButton(props) {
  const { nextLevel } = props;
  return (
    <button onClick={() => nextLevel()} type="button" className="nextButton btn btn-primary disabled">Следующий уровень</button>
  );
}

export default NextButton;
