import React ,{ useEffect, useState, Component } from 'react'
import { Link } from 'react-router-dom';
import { Nav, Navbar,NavDropdown,Container} from 'react-bootstrap';

  import { NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
     

import Planning from './Planning';
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import HomeBody from './HomeBody';
import Discover from './Discover';
import ViewMap from './ViewMap';
import Planner from './Planning';

class Example extends Component {


 
  render() {
    return (
    <div>
      
      <Navbar className="nav-color" variant="light" expand="lg">
    <Container>
     
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link href="/Home"><h7 className="linkText">Home</h7></Nav.Link>
        <Nav.Link href="/Discover"><h7 className="linkText">Discover</h7></Nav.Link>
        <Nav.Link href="/ViewMap" ><h7 className="linkText">View Map</h7></Nav.Link>
        <Nav.Link href="/Planner"><h7 className="linkText">Planner</h7></Nav.Link>
        
        </Nav>
    
             
      </Navbar.Collapse>
      
    </Container>
  
 
                      
  </Navbar>
  <Router>
        <Switch>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route exact path="/" component={HomeBody} />

          <Route exact path="/Home" component={HomeBody} />

          <Route exact path="/Discover" component={Discover} />
  
          <Route exact path="/ViewMap" component={ViewMap} />

          <Route exact path="/Planner" component={Planning} />
        </Switch>
  </Router>
  </div>
  
    )
  }
  
}

export default Example;