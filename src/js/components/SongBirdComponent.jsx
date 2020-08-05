import React from 'react';

import birdsData from '../birdsData';

import Header from './HeaderComponent';
import LevelList from './LevelListComponent';
import RandomBird from './RandomBirdComponent';
import AnswersAndBirdInfo from './AnswersAndBirdInfoComponent';
import NextButton from './NextButtonComponent';

function SongBird(props) {
  const {
    currentLevel, currentBird, levelNames, nextLevel,
    handleClickAnswer, correctBird, isCorrectAnswer,
    answersStatus, totalPoints
  } = props;
  const currentBirds = birdsData[currentLevel];
  return (
    <div className="container">
      <Header score={totalPoints} />
      <LevelList
        levelNames={levelNames}
        currentLevel={currentLevel}
      />
      <RandomBird
        currentBirds={currentBirds}
        correctBird={correctBird}
        isCorrectAnswer={isCorrectAnswer}
      />
      <AnswersAndBirdInfo
        currentBirds={currentBirds}
        currentBird={currentBird}
        handleClickAnswer={(i) => handleClickAnswer(i)}
        correctBird={correctBird}
        answersStatus={answersStatus}
      />
      <NextButton
        nextLevel={() => nextLevel()}
        isCorrectAnswer={isCorrectAnswer}
      />
    </div>
  );
}

export default SongBird;
