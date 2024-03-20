import { getStoredAnimals, saveToLocalstorage } from "../services/localStorage";
import fallbackImage from "../assets/fallbackImage.png";

export function HandleImageError() {
  const getAnimalsFromLS = getStoredAnimals();

  getAnimalsFromLS.forEach((animal) => {
    if (!isImageValid(animal.imageUrl)) {
      animal.imageUrl = fallbackImage;
    }
  });

  saveToLocalstorage(getAnimalsFromLS);

  function isImageValid(url: string) {
    const img = new Image();
    img.src = url;
    return img.complete && img.naturalWidth !== 0;
  }

  HandleImageError();
  return <></>;
}
