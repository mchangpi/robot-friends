import React from "react";

const Scroll = (props) => {
  console.log(props);
  //return <h1>hi</h1>;
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "5px solid black",
        height: "600px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
