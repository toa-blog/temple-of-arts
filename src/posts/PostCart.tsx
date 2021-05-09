import React from "react";
import stance from "./assets/stance.png";
import kungFu from "./assets/kung-fu.jpg";
import mma from "./assets/mma.jpg";

const postStyle = {
  width: "100%",
  height: "auto",
  margin: "50px 0px 5px 0px",
  padding: "0px 0px 20px 0px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  boxShadow: "1px 8px 6px -6px black",
  border: "1px solid rgb(255, 0, 0)",
} as React.CSSProperties;

const titleCon = {
  width: "80%",
  height: "100px",
  margin: "-12% 0px 0px 0px",
  display: "flex",
  textAlign: "start",
} as React.CSSProperties;

const titleWrapper = {
  width: "250px",
  height: "100px",
  textAlign: "center",
  position: "absolute",
  margin: "-90px 0px 0px 40%",
  transform: "translateX(-50%)",
} as React.CSSProperties;

const titleStyle = {
  zIndex: 2,
  margin: "0px 0px 0px 0px",
  color: "rgb(191, 191, 191)",
} as React.CSSProperties;

const leftWing = {
  width: "50%",
  height: "70px",
  transform: "skewY(-25deg)",
  backgroundColor: "rgb(64, 64, 64)",
  marginLeft: "10px",
  borderTop: "2px solid rgb(255, 0, 0)",
} as React.CSSProperties;

const rightWing = {
  width: "50%",
  height: "70px",
  transform: "skewY(25deg)",
  backgroundColor: "rgb(64, 64, 64)",
  marginRight: "10px",
  borderTop: " 2px solid rgb(255, 0, 0)",
} as React.CSSProperties;

const imgStyle = {
  width: "100%",
  height: "200px",
  objectFit: "cover",
  opacity: ".5",
} as React.CSSProperties;

const imgCon = {
  width: "100%",
  height: "200px",
  margin: "0px 0px 10px 0px",
  padding: "1px",
  background: "rgb(64, 64, 64)",
  borderBottom: "2px solid rgb(255, 0, 0)",
};

const textStyle = {
  padding: "5px 15px 2px 15px",
  margin: "-10px 0px 60px 0px",
  zIndex: 2,
} as React.CSSProperties;

const tagCon = {
  width: "250px",
  height: "80px",
  margin: "0 70px 0px 0px",
} as React.CSSProperties;

const tagStyle = {
  width: "60px",
  padding: "1px 5px 2px 5px",
  background: "rgb(255, 102, 102)",
  fontSize: "9px",
  float: "left",
  transform: "skewX(35deg)",
  fontWeight: "bolder",
  textAlign: "center",
  margin: "5px",
} as React.CSSProperties;

const tagTxtStyle = {
  transform: "skewX(-35deg)",
} as React.CSSProperties;

const buttonStyle = {
  width: "150px",
  height: "30px",
  transform: "skewX(-40deg)",
  border: "1px solid rgb(255, 0, 0)",
  backgroundColor: "rgb(38, 38, 38)",
  color: "rgb(230, 242, 255)",
};

const buttonTxtStyle = {
  transform: "skewX(40deg)",
};

const PostCart = () => {
  return (
    <div style={postStyle}>
      <div style={imgCon}>
        <img src={mma} alt="stance" style={imgStyle}></img>
      </div>
      <div style={titleCon}>
        <div style={titleWrapper}>
          <h3 style={titleStyle}>
            Was ist die Richtige Kampfstellung im Boxen
          </h3>
        </div>
        <div style={leftWing}></div>
        <div style={rightWing}></div>
      </div>
      <p style={textStyle}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </p>
      <div style={tagCon}>
        <div style={tagStyle}>
          <div style={tagTxtStyle}>Karate</div>
        </div>
        <div style={tagStyle}>
          <div style={tagTxtStyle}>Boxen</div>
        </div>
        <div style={tagStyle}>
          <div style={tagTxtStyle}>BJJ</div>
        </div>
        <div style={tagStyle}>
          <div style={tagTxtStyle}>Mauy Thai</div>
        </div>
      </div>
      <button style={buttonStyle}>
        <div style={buttonTxtStyle}>OSU!</div>
      </button>
    </div>
  );
};

export default PostCart;
