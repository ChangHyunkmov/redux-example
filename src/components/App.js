import React, { Component } from "react";
import Counter from "./Counter";
import Random from "./Random";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Counter></Counter>
        <Random></Random>
      </div>
    );
  }
}
