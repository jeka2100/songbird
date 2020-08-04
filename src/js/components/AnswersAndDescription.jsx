import React from 'react';
import PropTypes from 'prop-types';

import Answers from './Answers';
import BirdInfo from './BirdInfo';

function AnswersAndDescription(props) {
  const { currentBirds, correctBird } = props;
  return (
    <div className="answersDescription row">
      <div className="col-md">
        <Answers
          currentBirds={currentBirds}
        />
      </div>
      <div className="col-md">
        <BirdInfo />
      </div>
    </div>
  );
}

AnswersAndDescription.propTypes = {
  currentLevel: PropTypes.number.isRequired,
  LevelNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AnswersAndDescription;
