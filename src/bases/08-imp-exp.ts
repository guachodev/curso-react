import { heroes, Owner, type Hero } from "../data/heroes.data";

const getHeroById = (id: number): Hero | undefined => {
  return heroes.find((hero) => hero.id === id);
};

//console.log(getHeroById(2));

// Tarea:

/**
 * getHeroesByOwner => Hero[] o []
 * Filtrar héroes por su propietario
 * @param Owner - El propietario por el cual filtrar (DC o Marvel), usar la enumeración Owner
 * @returns Array de héroes pertenecientes al propietario especificado
 */

export const getHeroesByOwner = (owner: Owner) =>
  heroes.filter((hero) => hero.owner === owner);
