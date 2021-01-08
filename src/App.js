import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Reviews from "./components/reviews/Reviews";
import Home from "./components/home/Home.js";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
    </div>
  );
}

export default App;
