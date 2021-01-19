// import Home from "./components/home/Home.js";
import Parks from "./components/parks/Parks";
import "./App.css";
import React from "react";
import { connect } from "react-redux";
// import Links from "./components/Links";
import useAuth from "./hooks/useAuth";
// import Home from "./components/home/Home.js";
import Navigation from "./components/Navigation";
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
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
