import React, { Component } from "react";
//import ReactDOM from "react-dom";
import "./Counter.css";
//import { render } from "@testing-library/react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actualTime: 0,
      startTime: 0,
      btnPlayPause: "Play",
    };

    this.counter = null;
    this.initTimer = this.initTimer.bind(this);
    this.clearTimer = this.clearTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
  }

  initTimer() {
    if (this.counter) {
      this.pauseTimer();
      this.setState({ btnPlayPause: "Play" });
      this.setState({ startTime: Date.now() });
    } else {
      this.counter = setInterval(() => {
        this.setState({ actualTime: this.state.actualTime + 0.1 });
      }, 100);
      this.setState({ btnPlayPause: "Pause" });
    }
  }

  pauseTimer() {
    clearInterval(this.counter);
    this.counter = null;
  }

  clearTimer() {
    this.props.onStop({
      end_time: Date.now(),
      start_time: this.state.startTime,
      time_spent: this.state.actualTime,
    });
    this.setState({ actualTime: 0 });
    clearInterval(this.counter);
    this.counter = null;
    this.setState({ btnPlayPause: "Play" });
  }

  render() {
    return (
      <div className="Counter">
        {/*  <div className="CounterName">
          <h1> Tarea </h1>
        </div> */}
        <div className="CounterTime">
          <input
            className="btnCount"
            type="button"
            value={this.state.btnPlayPause}
            onClick={this.initTimer}
          />
          <input
            className="btnCount"
            type="button"
            value="Clear"
            onClick={this.clearTimer}
          />
          <h2> {this.state.actualTime.toFixed(2)}</h2>
        </div>
      </div>
    );
  }
}

export default Counter;
