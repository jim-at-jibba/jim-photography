import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./home";
import About from "./about";
import Blog from "./blog";
import Images from "./images";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
      <Route path="/images" component={Images} />
    </Switch>
  </main>
);

export default Main;
