import { useEffect, useState } from "react";
import { IAnimal } from "../models/IAnimal";
import { getAnimals } from "../services/animalService";
import { ShowAnimals } from "../components/ShowAnimals";
import { getStoredAnimals, saveToLocalstorage } from "../services/localStorage";
import { ShowDetails } from "../components/ShowDetails";

export function Animals() {
  const [animals, setAnimals] = useState<IAnimal[]>();

  useEffect(() => {
    if (animals) return;

    const getData = async () => {
      const storedAnimals = getStoredAnimals();

      if (shouldUpdate && storedAnimals) {
        setAnimals(storedAnimals);
        console.error("Bilden kunde inte laddas. Använder fallback-bild.");
      } else {
        const animalsData: IAnimal[] = await getAnimals();
        if (shouldUpdate) {
          setAnimals(animalsData);
          saveToLocalstorage(animalsData);
          console.log(animalsData);
          console.error("Bilden kunde inte laddas. Använder fallback-bild.");
        }
      }
    };

    let shouldUpdate = true;

    getData();

    return () => {
      shouldUpdate = false;
    };
  }, [animals]);

  return (
    <>
      <section className="container--AllAnimals">
        {animals?.map((animal) => {
          return <ShowAnimals key={animal.id} animal={animal} />;
        })}
      </section>
    </>
  );
}
