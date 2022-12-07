import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";

import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
