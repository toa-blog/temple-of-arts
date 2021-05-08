import * as React from "react";

interface IProps {
  openClose: boolean;
}

const sideConStyle = {
  width: "100%",
  height: "100vh",
  backdropFilter: " blur(9px)",
  background: "rgba(255, 255, 255, 0.35)",
  top: "0px",
  position: "fixed",
  zIndex: 3,
} as React.CSSProperties;

const hidden = {
  right: "-100%",
  display: "none",
} as React.CSSProperties;

const itemCon = {
  width: "60%",
  height: "100vh",
  right: "0px",
  top: "0px",
  display: "block",
  position: "absolute",
  zIndex: 2,
} as React.CSSProperties;

const SideNavi = ({ openClose }: IProps) => {
  return (
    <div style={openClose ? sideConStyle : hidden}>
      <div style={itemCon}>
        <h3>Posts</h3>
        <h3>Posts</h3>
        <h3>Posts</h3>
        <h3>Posts</h3>
      </div>
    </div>
  );
};

export default SideNavi;
