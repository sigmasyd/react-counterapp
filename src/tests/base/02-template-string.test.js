import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en 02-template-string.js', () => {
  test('getSaludo debe retornar Hola nombre', () => {
    const nombre = 'Sigma';
    const saludo = getSaludo(nombre);
    //console.log(saludo);
    expect(saludo).toBe('Hola ' + nombre);
  });
  test('getSaludo debe retornar Hola Carlos si no hay argumento nombre', () => {
    const saludo = getSaludo();
    expect(saludo).toBe('Hola Carlos');
  });
});
