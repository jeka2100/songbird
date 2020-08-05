import React from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from 'react-h5-audio-player';

function getCardInfo(currentBirdCard, currentBirds) {
  let cardInfo;
  if (currentBirdCard === null) {
    cardInfo = <p className="birdInfo__instruction">Послушайте плеер и выберите птицу из списка.</p>;
  } else {
    const {
      name, image, latin, audio, description,
    } = currentBirds[currentBirdCard];
    cardInfo = (
      <>
        <div className="card-body birdInfo__card">
          <img className="birdInfo__birdImage" src={image} alt="Ворон" />
          <ul className="list-group list-group-flush birdInfo__list">
            <li className="list-group-item birdInfo__name">{name}</li>
            <li className="list-group-item birdInfo__latin">{latin}</li>
            <li className="list-group-item">
              <AudioPlayer
                src={audio}
                autoPlayAfterSrcChange={false}
              />
            </li>
          </ul>
        </div>
        <p className="birdInfo__description">{description}</p>
      </>
    );
  }
  return cardInfo;
}

function BirdInfo(props) {
  const { currentBirdCard, currentBirds } = props;
  const cardInfo = getCardInfo(currentBirdCard, currentBirds);

  return (
    <div className="birdInfo card">
      {cardInfo}
    </div>
  );
}

export default BirdInfo;
