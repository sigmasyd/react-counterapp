//import React, { Fragment } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({ saludo }) => {
  /*if (!saludo) {
    throw new Error('El saludo es necesario');
  }*/ // no es conveniente por memoria, como se hace ? proptypes
  return (
    <>
      <h1>{saludo}</h1>

      <p>My first application</p>
    </>
  );
};

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
};

export default PrimeraApp;
