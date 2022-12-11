import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import Layout from "./components/layout/Layout";
import Hand from "./pages/Hand";
import Home from "./pages/Home";
import Abdomen from "./pages/Abdomen";
import Result from "./pages/Result";

import { symtompContext } from "./Helper/Context";

function App() {
  const [abdomenSymptomp, setAbdomenSymtomp] = useState("ไม่มีอาการปวดท้อง");
  const [handSymtomp, setHandSymtomp] = useState("ไม่มีอาการปวดข้อนิ้ว");
  const [clickedZoneAbdomen, setClickedZoneAbdomen] = useState(
    Array(7).fill(false)
  );
  const [isAllActive, setIsAllActive] = useState(false);
  const [clickedZoneHand, setClickedZoneHand] = useState(Array(3).fill(false));
  const [isOthers, setIsOthers] = useState(false);

  return (
    <BrowserRouter>
      <Layout>
        <symtompContext.Provider
          value={{
            abdomenSymptomp,
            setAbdomenSymtomp,
            handSymtomp,
            setHandSymtomp,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/abdomen"
              element={
                <Abdomen
                  abdomenSymptomp={abdomenSymptomp}
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
                  handSymtomp={handSymtomp}
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
                  abdomenSymptomp={abdomenSymptomp}
                  handSymtomp={handSymtomp}
                />
              }
            />
          </Routes>
        </symtompContext.Provider>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
