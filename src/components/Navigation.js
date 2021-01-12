import React from "react";
import { NavLink, Switch } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import ConnectedRoute from "./ConnectedRoute";
import Home from "./home/Home";
import Parks from "./parks/Parks";
import Reviews from "./reviews/Reviews";
import About from "./about/About";
import "./navigation/Navigation.css";

//import "./Navigation.css";

export default function Navigation() {
  return (
    <>
    <Navbar bg='dark'fixed='top' variant='dark' className='bg'>
        <Navbar.Brand className='brand'> On the Beaten Path </Navbar.Brand>
        <Nav className="ml-auto">
          <NavLink activeClassName="selected" exact={true} className="nav-link"to='/'> Home </NavLink>
          <NavLink activeClassName="selected" className="nav-link"to='/parks'> Parks </NavLink>
          <NavLink activeClassName="selected" className="nav-link"to='reviews'> Reviews </NavLink>
          <NavDropdown title='About' id='basic-nav-dropdown'>
            <NavDropdown.Item href="MeetUs">Meet the Team</NavDropdown.Item>
            <NavDropdown.Item href="Future">Future of the App</NavDropdown.Item>                         
            <NavDropdown.Item href="Contact">Contact Us</NavDropdown.Item>
          </NavDropdown>
          
        </Nav>
      </Navbar>
      <Switch>
        <ConnectedRoute exact path="/" redirectIfAuthenticated component={Home} />
        <ConnectedRoute exact isProtected path="/parks" component={Parks} />
        <ConnectedRoute exact isProtected path="/about" component={About} />
        <ConnectedRoute exact isProtected path="/reviews" component={Reviews} />
        {/*Routes for drop down menu (will set up compponent for each item on the About page later on ) */}
        <ConnectedRoute exact isProtected path="/MeetUs" component={About} />
        <ConnectedRoute exact isProtected path="/Future" component={About} />
        <ConnectedRoute exact isProtected path="/Contact" component={About} />
        {/* ----------------------------------------------------------------- */}
        <ConnectedRoute path="*" component={404} />
      </Switch>
    </>
  );
}
