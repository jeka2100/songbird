import React from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from 'react-h5-audio-player';
import hiddenBird from '../../img/hiddenBird.jpg';
import 'react-h5-audio-player/lib/styles.css';

function RandomBird(props) {
  const { currentBirds, correctBird, isCorrectAnswer, randomBirdPlayer } = props;
  let birdImage = hiddenBird;
  let birdName = '***';
  if (isCorrectAnswer) {
    birdImage = currentBirds[correctBird].image;
    birdName = currentBirds[correctBird].name;
  }
  return (
    <div className="randomBird jumbotron rounded">
      <img src={birdImage} alt="" className="randomBird__image" />
      <div className="list-group">
        <div className="list-group-item randomBird__name">{birdName}</div>
        <div className="list-group-item">
          <AudioPlayer
            ref={randomBirdPlayer}
            src={currentBirds[correctBird].audio}
            autoPlayAfterSrcChange={false}
          />
        </div>
      </div>
    </div>
  );
}

RandomBird.propTypes = {

};

export default RandomBird;
