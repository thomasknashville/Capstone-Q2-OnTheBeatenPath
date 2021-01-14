import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Home from "../home/Home";
import Parks from "../parks/Parks";
import Reviews from "../reviews/Reviews";
import About from "../about/About";
import Login from "../login/Login";
import "../../App.css";
import "./Navigation.css";

const Navigation = () => {
  return (
    <>
      <Navbar bg='dark'fixed='top' variant='dark' className='bg'>
        <Navbar.Brand className='brand'> On the Beaten Path </Navbar.Brand>
        <Nav className="ml-auto">
          <NavLink activeClassName="selected" exact={true} className="nav-link"to='/'> Home </NavLink>
          <NavLink activeClassName="selected" className="nav-link"to='/parks'> Parks </NavLink>
          <NavLink activeClassName="selected" className="nav-link"to='reviews'> Reviews </NavLink>
          <NavDropdown title='About' id='basic-nav-dropdown'>
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>                         
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
          <NavLink  activeClassName="selected" className="nav-link"to='login'> Login-in/Sign-Up </NavLink>
        </Nav>
      </Navbar>

      <Switch>
        <Route exact path="/"> <Home /></Route>
        <Route path='/Parks'> <Parks /></Route>
        <Route path='/Reviews'><Reviews /></Route>
        <Route path='/Login'> <Login /></Route>
      </Switch>
      </>
  );
};

export default Navigation;
