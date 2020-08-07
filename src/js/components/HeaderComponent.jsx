import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  const { totalPoints } = props;
  return (
    <header className="header d-flex">
      <div className="logo" />
      <h2>
        Баллы:&nbsp;
        <span className="text-success">{totalPoints}</span>
      </h2>
    </header>
  );
}

Header.propTypes = {
  totalPoints: PropTypes.number.isRequired,
};

export default Header;
