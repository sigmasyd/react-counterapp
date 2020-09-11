import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas de funciones de heroes', () => {
  test('debe de retornar un heroe por ID', () => {
    const id = 1;
    const heroe = getHeroeById(id);
    const heroeData = heroes.find((h) => h.id == id);

    expect(heroe).toEqual(heroeData);
  });
  test('debe de retornar undefined si heroe no existe', () => {
    const id = 10;
    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });
  test('debe de retornar un arreglo con los heroes de DC', () => {
    const owner = 'DC';
    const heroes_dc = getHeroesByOwner(owner);
    const dc_heroes = heroes.filter((heroe) => heroe.owner === owner);
    /*[
      { id: 1, name: 'Batman', owner: 'DC' },
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' },
    ];*/

    expect(heroes_dc).toEqual(dc_heroes);
  });
  test('debe de retornar un arreglo con los heroes de Marvel', () => {
    const owner = 'Marvel';
    const heroes_marvel = getHeroesByOwner(owner);
    const marvel_heroes = heroes.filter((heroe) => heroe.owner === owner);

    expect(heroes_marvel).toEqual(marvel_heroes);
    expect(heroes_marvel.length).toBe(2);
  });
});
