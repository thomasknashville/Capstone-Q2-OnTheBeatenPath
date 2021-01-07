import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Reviews from "./Reviews/Reviews";
import Nav from "./Nav/Nav";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Switch>
        <Route exact path="/" />
        <Route path="/parks" />
        <Route path="/reviews" component={Reviews} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
