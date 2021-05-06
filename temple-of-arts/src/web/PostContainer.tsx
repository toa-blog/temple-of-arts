import React from "react";
import Post from '../posts/Post'

const mobiStyle = {
  width: "100%",
  height: "auto",
  margin: "0px 0px 50px 0px",
  
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
