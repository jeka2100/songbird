import React from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from 'react-h5-audio-player';
import hiddenBird from '../../img/hiddenBird.jpg';
import 'react-h5-audio-player/lib/styles.css';

function RandomBird(props) {
  const { currentBirds, correctBird } = props;
  return (
    <div className="randomBird jumbotron rounded">
      <img src={hiddenBird} alt="" className="randomBird__image" />
      <div className="list-group">
        <div className="list-group-item">***</div>
        <div className="list-group-item">
          <AudioPlayer
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