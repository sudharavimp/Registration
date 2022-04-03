
import React ,{ useEffect, useState, Component } from 'react'
import { Link } from 'react-router-dom';
import { Nav, Navbar,NavDropdown,Container} from 'react-bootstrap';

import { NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron,
  Button, Modal, ModalHeader, ModalBody,Toggle,
    Form, FormGroup, Input, Label } from 'reactstrap';
    import {
        BrowserRouter as Router,
        Switch,
        Route,
        Redirect,
      } from "react-router-dom";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Navbard = () => {
    const history = useHistory();

    const Logout = async () => {
        try {
            await axios.delete('http://localhost:5000/logout');
            history.push("/");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
            <a href="/" className="navbar-item">
                Home
            </a>
        </div>

        <div className="navbar-end">
            <div className="navbar-item">
                <div className="buttons">
                    <button onClick={Logout} className="button is-light">
                        Log Out
                    </button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Navbard
