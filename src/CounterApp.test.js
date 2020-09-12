import React from 'react';
import { shallow } from 'enzyme';
import CounterApp from './CounterApp';

describe('Prueba sobre counter App', () => {
  let wrapper = shallow(<CounterApp />); // para mantener la ayuda de los metodos

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test('debe mostrar <CounterAPP /> correctamente (hacer match con un snapshot) y sus valores por defecto', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('debe mostrar el valor por defecto de 100', () => {
    const wrapper = shallow(<CounterApp value={100} />);
    const valorDefault = wrapper.find('h2').text(); // se puede usar un .trim() para remover espacios si los hay
    expect(valorDefault).toBe(`${100}`);
  });
  test('debe incrementar con el boton +1', () => {
    const btn1 = wrapper.find('button').at(0).simulate('click');
    //console.log(btn1.html());
    const counterText = wrapper.find('h2').text().trim();
    expect(counterText).toBe('11');
  });
  test('debe derementar con el boton -1', () => {
    const btn1 = wrapper.find('button').at(2).simulate('click');
    //console.log(btn1.html());
    const counterText = wrapper.find('h2').text().trim();
    expect(counterText).toBe('9');
  });
  test('debe colocar valor por defecto con el btn reset', () => {
    const wrapper = shallow(<CounterApp value={105} />);
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(1).simulate('click');
    const counterText = wrapper.find('h2').text().trim();
    console.log(counterText);
    expect(counterText).toBe('105');
  });
});
