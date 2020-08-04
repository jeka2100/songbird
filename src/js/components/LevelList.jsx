import React from 'react';
import PropTypes from 'prop-types';

function LevelList(props) {
  const { LevelNames, currentLevel } = props;

  const levels = LevelNames.map((name, index) => {
    const nameClass = index === currentLevel ? 'page-item active' : 'page-item';
    return (
      <li key={name} className={nameClass}>
        <a className="page-link" href="/#">{name}</a>
      </li>
    );
  });

  return (
    <ul className="pagination">
      {levels}
    </ul>
  );
}

LevelList.propTypes = {
  currentLevel: PropTypes.number.isRequired,
  LevelNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default LevelList;
