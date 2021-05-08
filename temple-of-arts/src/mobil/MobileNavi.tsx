import * as React from "react";
import open from "./mobilAssets/open.png";
import close from "./mobilAssets/closed.png";

const naviStyle = {
  width: "100%",
  height: "50px",
  backgroundColor: "rgb(38, 38, 38)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "fixed",
  left: "0px",
  top: "0px",
  zIndex: 3,
  margin: "0",

} as React.CSSProperties;


const imgConStyle = {
  width: "50px",
  height: "100%",
  margin: "0px 7px 0px 0px", 
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
} as React.CSSProperties;

const imgStyle = {
  width: "40px",
  height: "40px",
} as React.CSSProperties;

interface IProbs {
  openClose: boolean;
  openCloseNavi: () => void,
}

const MobileNavi = ({openClose, openCloseNavi}: IProbs) => {

  return (
    <div style={naviStyle}>
      <div>Logo</div>
      <div onClick={openCloseNavi} style={imgConStyle}>
        <img style={imgStyle}  src={openClose ? open : close}></img>
      </div>
    </div>
  );
};

export default MobileNavi;
