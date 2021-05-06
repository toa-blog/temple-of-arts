import React from "react";
import { useState } from "react";
import FighterNavi from "./web/ArtsNavi";
import PostContainer from "./web/PostContainer";
import MobileNavi from "./mobil/MobileNavi";
import MobileArtsNavi from "./mobil/MobilArtsNavi";

const appStyle = {
  width: "100%",
  backgroundColor: "rgb(64, 64, 64)",
  display: "flex",
  flexDirection: "column",
  position: "static",
  margin: "0px 0px 300px 0px",
  color: "rgb(255, 255, 255, .87)"
} as React.CSSProperties;

const App = () => {
  const [openClose, setOpenClose] = useState(false);
  const openCloseNavi = ():void => {
    setOpenClose(!openClose);
  }

  return (
    <div style={appStyle}>
      <MobileNavi openClose={openClose} openCloseNavi={openCloseNavi} />
      <MobileArtsNavi />
      <PostContainer />
    </div>
  );
};
export default App;
