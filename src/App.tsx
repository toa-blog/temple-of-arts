import React from "react";
import { useState } from "react";
import FighterNavi from "./web/ArtsNavi";
import MobileArtsNavi from "./mobil/MobilArtsNavi";
import MobileNavi from "./mobil/MobileNavi";
import SideNavi from "./mobil/sideNavi";
import Post from "./posts/Post";

const appStyle = {
  width: "100%",
  height: "auto",
  backgroundColor: "rgb(64, 64, 64)",
  display: "flex",
  flexDirection: "column",
  position: "static",
  margin: "0px 0px 200px 0px",
  color: "rgb(230, 242, 255)",
  alignItems: "center",
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
      <div>
        <Post />
        <Post />
        <Post />
      </div>
      <MobileArtsNavi />
      <div>
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};
export default App;
