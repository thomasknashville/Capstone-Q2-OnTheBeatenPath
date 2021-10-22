import React from "react";
import { NavLink, Switch } from "react-router-dom";
import { Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import ConnectedRoute from "./ConnectedRoute";
import Home from "./home/Home";
import Parks from "./parks/Parks";
import Reviews from "./reviews/Reviews";
import About from "./about/About";
import "./navigation/Navigation.css";
import useAuth from "../hooks/useAuth";
//import "./Navigation.css";

export default function Navigation() {
  const auth = useAuth();

  function loginNow() {
    const email = prompt("Please enter your email");
    auth.login(email);
  }

  return (
    <>
    <Navbar expand='lg' bg='dark'fixed='top' variant='dark' className='bg'>
        <Navbar.Brand className='brand mr-3'> On the Beaten Path </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          
          <NavLink activeClassName="selected" exact={true} className="mr-3 nav-link"to='/'> {""}Home{""} </NavLink>
          <NavLink activeClassName="selected" className="mr-3 nav-link"to='/parks'> {""}Parks{""} </NavLink>
          <NavLink activeClassName="selected" className="mr-3 nav-link"to='reviews'> {""}Reviews{""} </NavLink>
          <NavDropdown title='About' id='basic-nav-dropdown'>
            <NavDropdown.Item href="MeetUs">Meet the Team</NavDropdown.Item>
            <NavDropdown.Item href="Future">Future of the App</NavDropdown.Item>
            <NavDropdown.Item href="Contact">Contact Us</NavDropdown.Item>
          </NavDropdown>
          </Nav>
          {auth.loggedIn ? (
            <Button className="ml-auto" variant="dark" onClick={() => auth.logout()}>
              Logout
            </Button>
          ) : (
            <Button className="ml-auto" variant="dark" onClick={loginNow}>
              Login Now
            </Button>
          )}
        </Navbar.Collapse>
      </Navbar>
        {auth.loggedIn ? (
      <Switch>
        <ConnectedRoute exact path="/" RedirectIfAuthenticated component={Home} />
        <ConnectedRoute exact path="/parks" component={Parks} />
        <ConnectedRoute exact isProtected path="/about" component={About} />
        <ConnectedRoute exact isProtected path="/reviews" component={Reviews} />
        <ConnectedRoute exact isProtected path="/MeetUs" component={About} />
        <ConnectedRoute exact isProtected path="/Future" component={About} />
        <ConnectedRoute exact isProtected path="/Contact" component={About} />
        <ConnectedRoute path="*" component={404} />

      </Switch> 
        ) : (
          <div className="fx-margin Login"> Please Login</div>
        )}
    </>
  );
}
