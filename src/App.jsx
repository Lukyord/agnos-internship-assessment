import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Hand from "./pages/Hand";

import Home from "./pages/Home";
import Abdomen from "./pages/Abdomen";
import Result from "./pages/Result";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/abdomen" element={<Abdomen />} />
          <Route path="/hand" element={<Hand />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
