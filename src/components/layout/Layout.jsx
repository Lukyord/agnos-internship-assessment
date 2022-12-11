import MainNavigation from "./MainNavigation";

import { useState, useEffect } from "react";
import Overlay from "./Overlay";

import { isNavBarOpenContext } from "../../Helper/Context";

export default function Layout(props) {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  useEffect(() => {
    console.log("from layout", props.symtompCount);
  }, []);

  return (
    <isNavBarOpenContext.Provider
      value={{
        isNavBarOpen,
        setIsNavBarOpen,
      }}
    >
      <div className="flex">
        <MainNavigation
          isNavBarOpen={isNavBarOpen}
          setIsNavBarOpen={setIsNavBarOpen}
          symtompCount={props.symtompCount}
          setSymtompCount={props.setSymtompCount}
        />
        <Overlay isNavBarOpen={isNavBarOpen} />
        <div className={`grow`}>{props.children}</div>
      </div>
    </isNavBarOpenContext.Provider>
  );
}
