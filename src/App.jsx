import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Hand from "./pages/Hand";

import Home from "./pages/Home";
import Abdomen from "./pages/Abdomen";
import Result from "./pages/Result";
import Voronoi from "./pages/Voronoi";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/abdomen" element={<Abdomen />} />
          <Route path="/hand" element={<Hand />} />
          <Route path="/result" element={<Result />} />
          <Route path="/voronoi" element={<Voronoi />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
