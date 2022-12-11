import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import Layout from "./components/layout/Layout";
import Hand from "./pages/Hand";
import Home from "./pages/Home";
import Abdomen from "./pages/Abdomen";
import Result from "./pages/Result";

import { symtompContext } from "./Helper/Context";

function App() {
  const [abdomenSymtomp, setAbdomenSymtomp] = useState("ไม่มีอาการปวดท้อง");
  const [handSymtomp, setHandSymtomp] = useState("ไม่มีอาการปวดข้อนิ้ว");
  const [clickedZoneAbdomen, setClickedZoneAbdomen] = useState(
    Array(7).fill(false)
  );
  const [isAllActive, setIsAllActive] = useState(false);
  const [clickedZoneHand, setClickedZoneHand] = useState(Array(3).fill(false));
  const [isOthers, setIsOthers] = useState(false);
  const [symtompCount, setSymtompCount] = useState(0);
  useEffect(() => {
    console.log(symtompCount);
  }, []);

  return (
    <BrowserRouter>
      <symtompContext.Provider
        value={{
          abdomenSymtomp,
          setAbdomenSymtomp,
          handSymtomp,
          setHandSymtomp,
        }}
      >
        <Layout symtompCount={symtompCount} setSymtompCount={setSymtompCount}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/abdomen"
              element={
                <Abdomen
                  setAbdomenSymtomp={setAbdomenSymtomp}
                  clickedZone={clickedZoneAbdomen}
                  setClickedZone={setClickedZoneAbdomen}
                  isAllActive={isAllActive}
                  setIsAllActive={setIsAllActive}
                />
              }
            />
            <Route
              path="/hand"
              element={
                <Hand
                  setHandSymtomp={setHandSymtomp}
                  clickedZone={clickedZoneHand}
                  setClickedZone={setClickedZoneHand}
                  isOthers={isOthers}
                  setIsOthers={setIsOthers}
                />
              }
            />
            <Route
              path="/result"
              element={
                <Result
                  abdomenSymtomp={abdomenSymtomp}
                  handSymtomp={handSymtomp}
                />
              }
            />
          </Routes>
        </Layout>
      </symtompContext.Provider>
    </BrowserRouter>
  );
}

export default App;
