import { useNavigate } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
import fallbackImage from "../assets/fallbackImage.png";

export interface IShowAnimalsProps {
  animal: IAnimal;
}

export function ShowAnimals(props: IShowAnimalsProps) {
  const navigate = useNavigate();

  const animalHungry = 1000 * 60 * 60 * 4;

  let statusAnimal = "";

  const current = new Date().getTime();
  const lastFedd = Date.parse(props.animal.lastFed);
  const dateDifference = current - lastFedd;

  if (dateDifference > animalHungry) {
    statusAnimal = "container--animalHungryFirstPage";
  } else {
    statusAnimal = "container--animalFedFirstPage";
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
          "container--oneAnimal " +
          (hungryAnimal()
            ? "container--animalHungryFirstPage"
            : "container--animalFedFirstPage")
        }
        onClick={() => {
          navigate("/animal/" + props.animal.id);
        }}
      >
        <h3 className="animalName">{props.animal.name}</h3>
        <section className="container--image">
          <img
            src={props.animal.imageUrl}
            alt=""
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
              const target = e.target as HTMLImageElement;
              target.src = fallbackImage;
            }}
          />
        </section>
        <p className="text__short">{props.animal.shortDescription}</p>
      </section>
    </>
  );
}
