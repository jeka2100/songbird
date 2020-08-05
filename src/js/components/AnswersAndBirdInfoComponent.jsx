import React from 'react';
import PropTypes from 'prop-types';

import Answers from '../containers/AnswersContainer';
import BirdInfo from './BirdInfoComponent';

function AnswersAndBirdInfo(props) {
  const { currentBirds, handleClickAnswer, currentBirdCard } = props;
  return (
    <div className="answersDescription row">
      <div className="col-md">
        <Answers
          currentBirds={currentBirds}
          handleClickAnswer={(i) => handleClickAnswer(i)}
        />
      </div>
      <div className="col-md">
        <BirdInfo
          currentBirds={currentBirds}
          currentBirdCard={currentBirdCard}
        />
      </div>
    </div>
  );
}

AnswersAndBirdInfo.propTypes = {

};

export default AnswersAndBirdInfo;
