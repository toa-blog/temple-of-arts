import React from "react";
import stance from "./assets/stance.png";
import kungFu from "./assets/kung-fu.jpg";

const postStyle = {
  width: "100%",
  height: "auto",
  margin: "50px 0px 5px 0px",
  padding: "0px 0px 20px 0px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  border: "1px solid black",
} as React.CSSProperties;

const imgStyle = {
  width: "99%",
  height: "250px",
  objectFit: "cover",
  margin: "0px 0px 10px 0px",
  border: "2px solid rgb(38, 38, 38)",
  padding: "1px",
} as React.CSSProperties;

const textStyle = {
  padding: "5px 15px 2px 15px",
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
  transform: "skewX(30deg)",
  fontWeight: "bolder",
  textAlign: "center",
  margin: "5px"
} as React.CSSProperties;

const tagTxtStyle = {
  transform: "skewX(-30deg)",
} as React.CSSProperties;

const buttonStyle = {
  width: "150px",
  height: "30px",
  transform: "skewX(-40deg)",
  border: "1px solid rgb(255, 0, 0)",
  backgroundColor: "rgb(38, 38, 38)",
  color: "rgb(230, 242, 255)"
};

const buttonTxtStyle = {
  transform: "skewX(40deg)",
};

const Post = () => {
  return (
    <div style={postStyle}>
      <img src={kungFu} alt="stance" style={imgStyle}></img>
      <h3 style={textStyle}>Was ist die Richtige Kampfstellung im Boxen</h3>
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

export default Post;
