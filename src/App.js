import React from "react";
import { connect } from "react-redux";
import "./App.css";
import Navigation from "./components/navigation/Navigation";

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
