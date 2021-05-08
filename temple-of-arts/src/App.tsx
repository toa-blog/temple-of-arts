import React from "react";
import { useState } from "react";
import FighterNavi from "./web/ArtsNavi";
import PostContainer from "./web/PostContainer";
import MobileNavi from "./mobil/MobileNavi";
import MobileArtsNavi from "./mobil/MobilArtsNavi";
import SideNavi from "./mobil/sideNavi";

const appStyle = {
  width: "100%",
  height: "100vh",
  backgroundColor: "rgb(64, 64, 64)",
  display: "flex",
  flexDirection: "column",
  position: "static",
  margin: "0px 0px 300px 0px",
  color: "rgb(255, 255, 255, .87)",
  overflowX: "hidden",
} as React.CSSProperties;

const App = () => {
  const [openClose, setOpenClose] = useState(false);
  const openCloseNavi = (): void => {
    setOpenClose(!openClose);
  };

  return (
    <div style={appStyle}>
      <SideNavi openClose={openClose} />
      <MobileNavi openClose={openClose} openCloseNavi={openCloseNavi} />
      <MobileArtsNavi />
      <PostContainer />
    </div>
  );
};
export default App;
