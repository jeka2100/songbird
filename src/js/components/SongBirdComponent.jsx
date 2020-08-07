import React from 'react';
import PropTypes from 'prop-types';

import birdsData from '../birdsData';

import Header from './HeaderComponent';
import LevelList from './LevelListComponent';
import RandomBird from './RandomBirdComponent';
import AnswersAndBirdInfo from './AnswersAndBirdInfoComponent';
import NextButton from './NextButtonComponent';
import EndGameComponent from './EndGameComponent';

function SongBird(props) {
  const {
    currentLevel, currentBird, levelNames, nextLevel,
    handleClickAnswer, correctBird, isCorrectAnswer,
    answersStatus, totalPoints, restartGame, randomBirdPlayer,
  } = props;
  const currentBirds = birdsData[currentLevel];
  if (currentLevel === 6) {
    return (
      <div className="container">
        <Header score={totalPoints} />
        <LevelList
          levelNames={levelNames}
          currentLevel={currentLevel}
        />
        <EndGameComponent
          totalPoints={totalPoints}
          levelNames={levelNames}
          currentLevel={currentLevel}
          restartGame={() => restartGame()}
        />
      </div>
    );
  }

  console.log(`Correct answer: ${currentBirds[correctBird].name}`);
  return (
    <div className="container">
      <Header totalPoints={totalPoints} />
      <LevelList
        levelNames={levelNames}
        currentLevel={currentLevel}
      />
      <RandomBird
        currentBirds={currentBirds}
        correctBird={correctBird}
        isCorrectAnswer={isCorrectAnswer}
        randomBirdPlayer={randomBirdPlayer}
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

SongBird.propTypes = {
  currentLevel: PropTypes.number.isRequired,
  currentBird: PropTypes.number,
  levelNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  nextLevel: PropTypes.func.isRequired,
  handleClickAnswer: PropTypes.func.isRequired,
  correctBird: PropTypes.number.isRequired,
  isCorrectAnswer: PropTypes.bool.isRequired,
  answersStatus: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalPoints: PropTypes.number.isRequired,
  restartGame: PropTypes.func.isRequired,
  randomBirdPlayer: PropTypes.objectOf(PropTypes.string).isRequired,
};

SongBird.defaultProps = {
  currentBird: null,
};

export default SongBird;
