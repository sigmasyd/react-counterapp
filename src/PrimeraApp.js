//import React, { Fragment } from 'react';
import React from 'react';

const PrimeraApp = ({ saludo = 'Hola mundo' }) => {
  /*const saludo = {
    nombre: 'Carlos',
    edad: 38,
  };*/ //[1, 2, 3]; //'Hola mundo const';
  //console.log(props);
  //const saludo = 'Hola mundo';

  return (
    <>
      <h1>{saludo}</h1>

      <p>My first application</p>
    </>
  );
};
//<pre>{JSON.stringify(saludo, null, 3)}</pre>
export default PrimeraApp;
