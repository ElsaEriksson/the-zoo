import { IAnimal } from "../models/IAnimal";

export const getStoredAnimals = (): IAnimal[] => {
  const storedAnimals = localStorage.getItem("animals");
  return storedAnimals ? JSON.parse(storedAnimals) : null;
};

export const saveToLocalstorage = (animals: IAnimal[]) => {
  localStorage.setItem("animals", JSON.stringify(animals));
};
