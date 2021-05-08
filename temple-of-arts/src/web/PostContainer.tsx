import React from "react";
import Post from '../posts/Post'

const mobiStyle = {
  width: "99%",
  height: "100vh",
  margin: "0px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflowY: "scroll",
  justifyContent: "space-between",
} as React.CSSProperties;


function PostContainer() {
  return <div style={mobiStyle}>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
  </div>;
}

export default PostContainer;
