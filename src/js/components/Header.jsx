import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  const { score } = props;
  return (
    <header className="header d-flex">
      <div className="logo" />
      <h2>
        Баллы:&nbsp;
        <span className="text-success">{score}</span>
      </h2>
    </header>
  );
}

Header.propTypes = {
  score: PropTypes.number.isRequired,
};

export default Header;
