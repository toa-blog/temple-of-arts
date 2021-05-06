import React from "react";
import stance from "./assets/stance.png";

const postStyle = {
  width: "90%",
  height: "auto",
  marginTop: "50px",
  padding: "100px 5px 100px 5px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  backgroundColor: "rgb(38, 38, 38)",
  transform: "skewY(-15deg)",
} as React.CSSProperties;

const imgStyle = {
  width: "90%",
  height: "250px",
  objectFit: "contain",
  borderRadius: "15px",
  margin: "10px",
  transform: "skewY(15deg)",
  
} as React.CSSProperties;

const textStyle = {
  transform: "skewY(15deg)",
}

const buttonStyle = {
  width: "80px",
  transform: "skew(15deg, 15deg)",
}

const Post = () => {
  return (
    <div style={postStyle}>
      <img src={stance} alt="stance" style={imgStyle}></img>
      <h3 style={textStyle}>Was ist die Richtige Kampfstellung im Boxen</h3>
      <div><h6 style={textStyle} >Karate</h6></div>
      <p style={textStyle}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </p>
      <button style={buttonStyle}>OSU!</button>
    </div>
  );
};

export default Post;
