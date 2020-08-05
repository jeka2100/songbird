import React from 'react';

import data from '../data';

import Header from './HeaderComponent';
import LevelList from './LevelListComponent';
import RandomBird from './RandomBirdComponent';
import AnswersAndBirdInfo from './AnswersAndBirdInfoComponent';
import NextButton from './NextButtonComponent';

function SongBird(props) {
  const { currentLevel, currentBirdCard, levelNames, nextLevel, handleClickAnswer, correctBird, isCorrectAnswer } = props;
  const currentBirds = data[currentLevel];
  return (
    <div className="container">
      <Header score={0} />
      <LevelList
        levelNames={levelNames}
        currentLevel={currentLevel}
      />
      <RandomBird
        currentBirds={currentBirds}
        correctBird={correctBird}
      />
      <AnswersAndBirdInfo
        currentBirds={currentBirds}
        currentBirdCard={currentBirdCard}
        handleClickAnswer={(i) => handleClickAnswer(i)}
      />
      <NextButton
        nextLevel={() => nextLevel()}
        isCorrectAnswer={isCorrectAnswer}
      />
    </div>
  );
}

export default SongBird;
