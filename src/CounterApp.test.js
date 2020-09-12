import React from 'react';
import { shallow } from 'enzyme';
import CounterApp from './CounterApp';

describe('Prueba sobre counter App', () => {
  test('debe mostrar <CounterAPP /> correctamente (hacer match con un snapshot) y sus valores por defecto', () => {
    const wrapper = shallow(<CounterApp />);
    expect(wrapper).toMatchSnapshot();
  });
  test('debe mostrar el valor por defecto de 100', () => {
    //const valor = 100;
    const wrapper = shallow(<CounterApp value={100} />);
    const valorDefault = wrapper.find('h2').text(); // se puede usar un .trim() para remover espacios si los hay
    expect(valorDefault).toBe(`${100}`);
  });
});
