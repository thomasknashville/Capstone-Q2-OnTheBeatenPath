import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Home from "../home/Home";
import Parks from "../parks/Parks";
import Reviews from "../reviews/Reviews";
import About from "../about/About";
import Login from "../login/Login";
import "./Navigation.css";

const Navigation = () => {
  return (
    <>
      <Navbar fixed="top" variant="dark" className="bg">
        <Navbar.Brand className="brand"> On the Beaten Path </Navbar.Brand>
        <Nav className="ml-auto">
<<<<<<< HEAD
          <NavLink to="/" activeClassName="selected" exact={true} className="mr-3 nav-link">
            Home
          </NavLink>
          <NavLink to="/parks" activeClassName="selected" exact={true} className="mr-3 nav-link">
            Parks
          </NavLink>
          <NavLink to="/about" activeClassName="selected" exact={true} className="mr-3 nav-link">
            About
          </NavLink>
          <NavLink to="/reviews" activeClassName="selected" exact={true} className="mr-3 nav-link">
            Reviews
          </NavLink>
          <NavLink to="/login" activeClassName="selected" exact={true} className="mr-3 nav-link">
=======
          <NavLink
            to="/"
            activeClassName="selected"
            exact={true}
            className="mr-3 nav-link"
          >
            Home
          </NavLink>
          <NavLink
            to="/parks"
            activeClassName="selected"
            exact={true}
            className="mr-3 nav-link"
          >
            Parks
          </NavLink>
          <NavLink
            to="about"
            activeClassName="selected"
            exact={true}
            className="mr-3 nav-link"
          >
            About
          </NavLink>
          <NavLink
            to="reviews"
            activeClassName="selected"
            exact={true}
            className="mr-3 nav-link"
          >
            Reviews
          </NavLink>
          <NavLink
            to="login"
            activeClassName="selected"
            exact={true}
            className="mr-3 nav-link"
          >
>>>>>>> reviews
            Login-in/Sign-Up
          </NavLink>
        </Nav>
      </Navbar>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/parks">
          <Parks />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/reviews">
          <Reviews />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </>
  );
};

export default Navigation;
