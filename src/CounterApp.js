import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(0);

  //handleAdd
  const handleAdd = () => {
    //console.log(e);
    setCounter(counter + 1);
    //setCounter(  (c) => c + 1 );  // forma alterna en caso de no poder accesar a counter
  };
  return (
    <>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>+1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;

// se puede hacer con shortcode: rafcp
