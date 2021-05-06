import React from "react";
import karate from "./mobilAssets/karate.png";
import muayThai from "./mobilAssets/muayThai.png";
import boxen from "./mobilAssets/boxing.png";

const naviStyle = {
  width: "100%",
  height: "200px",
  display: "flex",
  marginTop: "55px",
  overflowX: "scroll",
  overflowY: "hidden",
  alignItems: "center",
  borderTop: "1px solid black",
  borderBottom: "1px solid black",
} as React.CSSProperties;

const artCartStyle = {
  width: "auto",
  height: "75px",
  margin: "0px 60px 0px 20px",
  padding: "10px 10px 10px 10px",
  backgroundColor: "rgb(38, 38, 38)",
  display: "flex",
  alignItems: "center",
  transform: "skewX(-35deg)",
} as React.CSSProperties;

const imgConStyle = {
  width: "75px",
  height: "75px",
  margin: "2px 150px 2px 10px",
  transform: "skewX(35deg)",
} as React.CSSProperties;

const imgStyle = {
  width: "75px",
  height: "75px",
  backgroundSize: "cover",
} as React.CSSProperties;

const hStyle = {
  transform: "skewX(35deg)",
} as React.CSSProperties;

const MobileArtsNavi = () => {
  return (
    <div style={naviStyle}>
      <div style={artCartStyle}>
        <div style={imgConStyle}>
          <img src={karate} alt="Karate" style={imgStyle}></img>
        </div>
        <h3 style={hStyle}>Karate</h3>
      </div>
      <div style={artCartStyle}>
        <div style={imgConStyle}>
          <img src={boxen} alt="Boxen" style={imgStyle}></img>
        </div>
        <h3 style={hStyle}> Boxen</h3>
      </div>
      <div style={artCartStyle}>
        <div style={imgConStyle}>
          <img src={muayThai} alt="Muay Thai" style={imgStyle}></img>
        </div>
        <h3 style={hStyle}>Muay Thai</h3>
      </div>
      <div style={artCartStyle}>
        <div style={imgConStyle}>
          <img src={karate} alt="BJJ" style={imgStyle}></img>
        </div>
        <h3 style={hStyle}>BJJ</h3>
      </div>
    </div>
  );
};

export default MobileArtsNavi;
