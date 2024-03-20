import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
import { getStoredAnimals } from "../services/localStorage";
import { ShowDetails } from "../components/ShowDetails";

export function AnimalDetails() {
  const [animal, setAnimal] = useState<IAnimal>();

  const { animalId } = useParams();

  useEffect(() => {
    const getAnimalsFromLS = getStoredAnimals();
    const clickedAnimal = getAnimalsFromLS.find(
      (animal) => animal.id.toString() === animalId
    );
    setAnimal(clickedAnimal);
  }, [animalId]);

  return <>{animal && <ShowDetails animal={animal} />}</>;
}
