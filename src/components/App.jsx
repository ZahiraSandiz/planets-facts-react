import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Mercury from "../pages/Mercury";
import Venus from "../pages/Venus";
import Earth from "../pages/Earth";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="mercury" element={<Mercury />} />
          {/* <Route index element={<Home />} /> */}

          <Route path="venus" element={<Venus />} />

          <Route path="earth" element={<Earth />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
