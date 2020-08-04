import React from 'react';

import data from './data';

import Header from './Header';
import LevelList from './LevelList';
import RandomBird from './RandomBird';
import AnswersAndDescription from './AnswersAndDescription';
import NextButton from './NextButton';

import { getRandomBirdNumber } from '../utils/utils';

class SongBird extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLevel: 0,
      correctBird: getRandomBirdNumber(),
      isCorrectAnswer: true,
    };
    this.settings = {
      LevelNames: ['Птицы России', 'Птицы США', 'Птицы Африки', 'Птицы Антарктики', 'Птицы Китая', 'Птицы Южной Америки'],
    };
  }

  nextLevel() {
    const { isCorrectAnswer } = this.state;
    if (isCorrectAnswer) {
      this.setState((state) => ({
        currentLevel: state.currentLevel + 1,
        correctBird: getRandomBirdNumber(),
      }));
    }
  }

  render() {
    const { currentLevel, correctBird } = this.state;
    const { LevelNames } = this.settings;
    return (
      <div className="container">
        <Header score={0} />
        <LevelList LevelNames={LevelNames} currentLevel={currentLevel} />
        <RandomBird
          currentBirds={data[currentLevel]}
          correctBird={correctBird}
        />
        <AnswersAndDescription
          currentBirds={data[currentLevel]}
          correctBird={correctBird}
        />
        <NextButton nextLevel={() => this.nextLevel()} />
      </div>
    );
  }
}

export default SongBird;
