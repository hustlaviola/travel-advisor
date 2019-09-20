import React from 'react';
import PropTypes from 'prop-types';
import countries from '../countries.json';

const Form = props => {
  const { handleChange } = props;
  return (
    <select onChange={handleChange}>
      <option value="">Select Country</option>
      {countries.map(country => {
        return (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        );
      })}
    </select>
  );
};

Form.propTypes = {
  handleChange: PropTypes.func.isRequired
};

export default Form;
