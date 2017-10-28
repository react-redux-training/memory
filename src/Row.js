import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

import './Row.css';

const Row = ({ cells }) => {
  const renderCells = cells.map((cell, index) => <Cell value={cell} index={index} key={index} />);
  return (
    <div className="Row">
      {renderCells}
    </div>
  );
};

Row.propTypes = {
  cells: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Row;
