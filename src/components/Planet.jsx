import { useParams } from "react-router-dom";
import planets from "../mocks/planets.json";

const Planet = ({}) => {
  const { planet } = useParams();

  const currentPlanet = planets.find(
    (p) => p.name.toLocaleLowerCase() === planet.toLocaleLowerCase()
  );

  console.dir(currentPlanet);

  return (
    <div>
      <h1>Soy el planeta {planet} y soy el Outlet tambien</h1>
      <p>
        El outlet es variable. Acá se va a mostrar lo que coincida con la url
        que se agregó.
      </p>
    </div>
  );
};

export default Planet;
