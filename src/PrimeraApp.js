//import React, { Fragment } from 'react';
import React from 'react';

const PrimeraApp = ({ saludo }) => {
  if (!saludo) {
    throw new Error('El saludo es necesario');
  }
  return (
    <>
      <h1>{saludo}</h1>

      <p>My first application</p>
    </>
  );
};
export default PrimeraApp;
