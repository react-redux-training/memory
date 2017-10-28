import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';

import './Board.css';

const Board = ({ rows }) => {
  const renderBoard = rows.map((row, idx) => <Row cells={row} index={idx} key={`id-${idx}`} />);
  return (
    <div className="Board">
      {renderBoard}
    </div>
  );
};

Board.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.array).isRequired
};

export default Board;
