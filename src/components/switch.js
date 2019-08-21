import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./switch.scss";

class ShowAlert extends Component {
  showAlert() {
    alert("Im an alert");
  }

  render() {
    return <button onClick={this.showAlert}>show alert</button>;
  }
}

export default ShowAlert;

const rootElement = document.getElementById("root");
ReactDOM.render(<ShowAlert />, rootElement);
