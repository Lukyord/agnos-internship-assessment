import MainNavigation from "./MainNavigation";

import { useState } from "react";
import Overlay from "./Overlay";

import { isNavBarOpenContext } from "../../Helper/Context";

export default function Layout(props) {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

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
          handSymtomp={props.handSymtomp}
          abdomenSymtomp={props.abdomenSymtomp}
        />
        <Overlay
          isNavBarOpen={isNavBarOpen}
          setIsNavBarOpen={setIsNavBarOpen}
        />
        <div className={`grow`}>{props.children}</div>
      </div>
    </isNavBarOpenContext.Provider>
  );
}
