import Parks from "./components/parks/Parks";
import "./App.css";
import React from "react";
import { connect } from "react-redux";
// import Links from "./components/Links";
import useAuth from "./hooks/useAuth";
// import Home from "./components/home/Home.js";
import Navigation from "./components/Navigation";
//import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "./components/pictures/pics";

function App() {
  const auth = useAuth();

  function loginNow() {
    const email = prompt("Please enter your email");
    auth.login(email);
  }
  if (auth.loading || auth.loggingIn || auth.loggingOut) {
    return "Loading....";
  }
  return (
    <div className="App">
      <Parks />
      {auth.loggedIn ? (
        <div>
          You are logged-in.
          <br />
          <button className="fx-margin" onClick={() => auth.logout()}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <button className="fx-margin" onClick={loginNow}>
            Login Now
          </button>
        </div>
      )}
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
