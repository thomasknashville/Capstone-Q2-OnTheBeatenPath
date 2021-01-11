<<<<<<< HEAD
// import Home from "./components/home/Home.js";
import Parks from "./components/parks/Parks";
import Navigation from "./components/navigation/Navigation";
import "./App.css";
=======
import React from "react";
import { connect } from "react-redux";
import "./App.css";
import Navigation from "./components/navigation/Navigation";
>>>>>>> reviews

function App() {
  return (
    <div className="App">
      <Parks />
      <Navigation />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    reviews: state.reviews,
    currentReview: state.currentReview,
    photo: state.photo,
  };
};

export default connect(mapStateToProps)(App);
