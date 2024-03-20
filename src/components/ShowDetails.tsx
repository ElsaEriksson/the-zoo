import { useState } from "react";
import { IAnimal } from "../models/IAnimal";
import { getStoredAnimals, saveToLocalstorage } from "../services/localStorage";

export interface IShowDetailsProps {
  animal: IAnimal;
}

export function ShowDetails(props: IShowDetailsProps) {
  const [animal, setAnimal] = useState<IAnimal>(props.animal);

  const feedAnimal = () => {
    const storedAnimals = getStoredAnimals();

    const updateAnimal = {
      ...animal,
      lastFed: new Date().toLocaleString(),
    };

    setAnimal(updateAnimal);

    const saveUpdatedAnimalToLS = storedAnimals.map((a) => {
      if (a.id === props.animal.id) {
        return updateAnimal;
      } else {
        return a;
      }
    });
    saveToLocalstorage(saveUpdatedAnimalToLS);
  };

  const animalHungry = 1000 * 60 * 60 * 4;

  let statusAnimal = "";

  const current = new Date().getTime();
  const lastFedd = Date.parse(animal.lastFed);
  const dateDifference = current - lastFedd;

  if (dateDifference > animalHungry) {
    statusAnimal = "container--animalHungry";
  } else {
    statusAnimal = "container--animalFed";
  }

  const hungryAnimal = () => {
    const dateDifference = current - lastFedd;

    if (dateDifference > animalHungry) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <section
        className={
          "container--animal " +
          (hungryAnimal() ? "container--animalHungry" : "container--animalFed")
        }
      >
        <h3 className="animalName">{props.animal.name}</h3>
        <h4 className="animalLatinName">{props.animal.latinName}</h4>
        <section className="container--image">
          <img src={props.animal.imageUrl} alt="" />
        </section>
        <section className="container--text__fat">
          <label htmlFor="text__yearOfBirth" className="text__fat">
            Födelseår:{" "}
          </label>
          <span id="text__yearOfBirth" className="text__fat">
            {props.animal.yearOfBirth}
          </span>
        </section>
        <section className="container--text__fat">
          <label htmlFor="text__medicine" className="text__fat">
            Medicin:{" "}
          </label>
          <span id="text__medicine" className="text__fat">
            {props.animal.medicine}
          </span>
        </section>
        <section className="container--text__fat">
          <label htmlFor="text__lastFed" className="text__fat">
            Senast matad:{" "}
          </label>
          <span id="text__lastFed" className="text__fat">
            {animal.lastFed}
          </span>
        </section>
        <button
          onClick={feedAnimal}
          disabled={hungryAnimal() === false}
          className="feedButton"
        >
          Mata
        </button>
        <p className="text__long">{props.animal.longDescription}</p>
      </section>
    </>
  );
}
