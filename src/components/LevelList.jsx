import React from 'react';
import PropTypes from 'prop-types';

function LevelList(props) {
  const { currentLevel } = props;
  return (
    <ul className="pagination">
      <li className="page-item">
      
      </li>
    </ul>
  );
}

LevelList.propTypes = {
  currentLevel: PropTypes.number.isRequired,
};

export default LevelList;
