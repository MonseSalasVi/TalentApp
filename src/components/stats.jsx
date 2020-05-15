import React from "react";
import Counter from "./Counter/Counter.jsx";

const Stats = () => {
  return (
    <>
      <h1
        style={{
          color: "grey",
          fontFamily: "Roboto, sains",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {" "}
        Este es el area de estadísticas{" "}
      </h1>

      <Counter />
    </>
  );
};

export default Stats;
