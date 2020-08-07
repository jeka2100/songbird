import React from 'react';
import PropTypes from 'prop-types';

import certificateImage from '../../img/certificate.png';

function EndGame(props) {
  const {
    totalPoints, restartGame,
  } = props;

  return (
    <div className="gameOver jumbotron">
      <h2 className="gameOver__congratulations">Поздравляем!</h2>
      <p className="gameOver__points">
        Вы прошли викторину и набрали
        {' '}
        {totalPoints}
        {' '}
        из 30 возможных баллов.
      </p>
      {totalPoints === 30 ? <img className="gameOver__certificate" alt="Сертификат" src={certificateImage} /> : null}
      <hr className="gameOver__line" />
      <button onClick={() => restartGame()} className="btn btn-primary gameOver__button" type="button">Попробовать ещё раз!</button>
    </div>
  );
}

EndGame.propTypes = {
  totalPoints: PropTypes.number.isRequired,
  restartGame: PropTypes.func.isRequired,
};

export default EndGame;
