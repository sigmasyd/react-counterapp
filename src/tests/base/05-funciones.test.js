import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Prueba en 05-funciones', () => {
  test('getUser debe retornar un objeto', () => {
    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502',
    };
    const user = getUser();
    //console.log(user);
    expect(user).toEqual(userTest);
  });
  test('getUsuarioActivo debe retornar un objeto con el nombre que se envia', () => {
    const nombre = 'Sigma';
    const user = getUsuarioActivo(nombre);

    const userTest = {
      uid: 'ABC567',
      username: nombre,
    };

    //console.log(user);
    expect(user).toEqual(userTest);
  });
});
