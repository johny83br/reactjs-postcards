import React from 'react';
import P from 'prop-types';

import './styles.css';

export const TextInput = ({ handleChange, searchValue }) => {
  return (
    <input
      className="text-input"
      onChange={handleChange}
      type="search"
      placeholder="Type your search"
      value={searchValue}
    />
  );
};

TextInput.propTypes = {
  searchValue: P.string.isRequired,
  handleChange: P.func.isRequired,
};
