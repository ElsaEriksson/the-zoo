import axios from "axios";
import { IAnimalResponse } from "../models/IAnimalsResponse";

export const getAnimals = async () => {
  const response = await axios.get<IAnimalResponse>(
    "https://animals.azurewebsites.net/api/animals"
  );

  return response.data;
};
