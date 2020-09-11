import { getHeroeByIdAsync } from '../../base/09-promesas';

describe('Pruebas con promesas', () => {
  test('getHeroeByIdAsync debe retornar un heroe async', () => {
    const id = 1;
    getHeroeByIdAsync(id).then((heroe) => {
      expect(true).toBe(false);
    });
  });
});
