import React from 'react';

import SongBirdComponent from '../components/SongBirdComponent';
import getRandomBirdNumber from '../utils/utils';

class SongBird extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      levelNames: ['Птицы России', 'Птицы США', 'Птицы Африки', 'Птицы Антарктики', 'Птицы Китая', 'Птицы Южной Америки'],
      currentLevel: 0,
      correctBird: getRandomBirdNumber(),
      isCorrectAnswer: false,
      totalPoints: 0,
      currentPoints: 5,
      currentBird: null,
      answersStatus: Array(6).fill(null),
    };
    this.settings = {
    };
  }

  getAnswerStatus(answerType) {
    const { currentBird, answersStatus, isCorrectAnswer } = this.state;
    const newAnswersStatus = answersStatus.slice();
    if (!isCorrectAnswer) {
      newAnswersStatus[currentBird] = answerType;
    }
    return newAnswersStatus;
  }

  setBirdCard(birdNum) {
    this.setState(() => ({
      currentBird: birdNum,
    }));
  }

  correctAnswer() {
    console.log('correct');
    const newAnswersStatus = this.getAnswerStatus('correct');
    this.setState((state) => ({
      isCorrectAnswer: true,
      totalPoints: state.totalPoints + state.currentPoints,
      answersStatus: newAnswersStatus,
    }));
  }

  wrongAnswer() {
    console.log('wrong');
    const newAnswersStatus = this.getAnswerStatus('wrong');
    this.setState((state) => ({
      currentPoints: state.currentPoints - 1,
      answersStatus: newAnswersStatus,
    }));
  }

  checkAnswer() {
    const { currentBird, correctBird } = this.state;
    if (currentBird === correctBird) {
      this.correctAnswer();
    } else {
      this.wrongAnswer();
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
        currentBird: null,
        isCorrectAnswer: false,
        answersStatus: Array(6).fill(null),
        currentPoints: 5,
      }));
    }
  }

  render() {
    const {
      currentLevel, correctBird, currentBird, isCorrectAnswer,
      answersStatus, levelNames, totalPoints,
    } = this.state;
    return (
      <SongBirdComponent
        currentLevel={currentLevel}
        totalPoints={totalPoints}
        correctBird={correctBird}
        currentBird={currentBird}
        levelNames={levelNames}
        nextLevel={() => this.nextLevel()}
        handleClickAnswer={(i) => this.handleClickAnswer(i)}
        isCorrectAnswer={isCorrectAnswer}
        answersStatus={answersStatus}
      />
    );
  }
}

export default SongBird;
