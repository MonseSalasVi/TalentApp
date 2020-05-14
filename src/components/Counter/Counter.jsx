import React from "react";
import ReactDOM from "react-dom";
import "./Counter.css";

const Counter = () => {
  return (
    <div className="Counter">
      <div className="CounterName">
        <h1> Tarea </h1>
      </div>
      <div className="CounterTime">
        <input
          className="btnCount"
          type="button"
          value="  > ||"
          // onClick={this.initTimer}
        />
        <input type="button" value="Clean" />
      </div>
    </div>
  );
};

export default Counter;
