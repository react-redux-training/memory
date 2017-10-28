import React from 'react';
import PropTypes from 'prop-types';

import './Cell.css';

const Cell = ({ value }) => {
  console.log('cell value ', value);
  return (
    <div className="Cell">
      {value}
    </div>
  );
};

Cell.propTypes = {
  value: PropTypes.string.isRequired
};

export default Cell;
