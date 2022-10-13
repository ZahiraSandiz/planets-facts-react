import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Mercury from "../pages/Mercury";
import Venus from "../pages/Venus";
import Earth from "../pages/Earth";
import Planet from "./Planet";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path=":planet" element={<Planet />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
{
  /* :planet -> al ponerle 2 puntos, lo convierto en un parámetro a la url y lo hace mostrar SIEMPRE el componente PLANET */
}

{
  /* useParams(de react router) -> Nos sirve pare acceder al valor que el usuario ingresó -> queremos saber qué ingresó el usuario para saber qué contenido mostrar*/
}
