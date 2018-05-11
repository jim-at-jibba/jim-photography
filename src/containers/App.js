import React, { Component } from "react";
import baseStyles from "../config/base-styles";

import Header from "../components/header.js";
import Main from "./main.js";

class App extends Component {
  render() {
    // including reset
    baseStyles();

    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
