import React from 'react';

import SongBirdComponent from '../components/SongBirdComponent';
import { getRandomBirdNumber } from '../utils/utils';

class SongBird extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLevel: 0,
      correctBird: getRandomBirdNumber(),
      isCorrectAnswer: false,
      totalPoints: 0,
      currentPonts: 5,
      currentBirdCard: null,
    };
    this.settings = {
      levelNames: ['Птицы России', 'Птицы США', 'Птицы Африки', 'Птицы Антарктики', 'Птицы Китая', 'Птицы Южной Америки'],
    };
  }

  setBirdCard(birdNum) {
    this.setState(() => ({
      currentBirdCard: birdNum,
    }));
  }

  correctAnswer() {
    console.log('correct');
    this.setState((state) => ({
      isCorrectAnswer: true,
      totalPoints: state.totalPoints + state.currentPonts,
      currentPonts: 5,
    }));
  }

  checkAnswer() {
    const { currentBirdCard, correctBird } = this.state;
    if (currentBirdCard === correctBird) {
      this.correctAnswer();
    }
  }

  async handleClickAnswer(birdNum) {
    await this.setBirdCard(birdNum);
    await this.checkAnswer();
  }

  nextLevel() {
    const { isCorrectAnswer } = this.state;
    if (isCorrectAnswer) {
      this.setState((state) => ({
        currentLevel: state.currentLevel + 1,
        correctBird: getRandomBirdNumber(),
        currentBirdCard: null,
        isCorrectAnswer: false,
      }));
    }
  }

  render() {
    const {
      currentLevel, correctBird, currentBirdCard, isCorrectAnswer,
    } = this.state;
    const { levelNames } = this.settings;
    return (
      <SongBirdComponent
        currentLevel={currentLevel}
        correctBird={correctBird}
        currentBirdCard={currentBirdCard}
        levelNames={levelNames}
        nextLevel={() => this.nextLevel()}
        handleClickAnswer={(i) => this.handleClickAnswer(i)}
        isCorrectAnswer={isCorrectAnswer}
      />
    );
  }
}

export default SongBird;
