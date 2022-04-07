/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import jwt_decode from "jwt-decode";
import Modal from 'react-bootstrap/Modal'
import { useHistory } from 'react-router-dom';
import  Component  from 'react'
import { Link } from 'react-router-dom';
import { Nav, Navbar,NavDropdown,Container} from 'react-bootstrap';
import healthyweblogo from '../HealthyWeb.png';
import prof from '../prof.png';
  import { NavbarBrand, NavbarToggler, Collapse, NavItem,
    Button, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label} from 'reactstrap';
     
    import '../App.css';
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
const Dashboard = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [users, setUsers] = useState([]);
    const history = useHistory();
    
  let dupname=name;
    const Logout = async () => {
        try {
            await axios.delete('http://localhost:5000/logout');
            history.push("/");
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        refreshToken();
        getUsers();
    }, []);

    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:5000/token');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        } catch (error) {
            if (error.response) {
                history.push("/");
            }
        }
    }

    const axiosJWT = axios.create();

    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get('http://localhost:5000/token');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

    const getUsers = async () => {
        const response = await axiosJWT.get('http://localhost:5000/users', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setUsers(response.data);
    }

    return (
        
        <div>
      
        <Navbar className=" border border-success rounded-bottom " bg="dark" variant="light" expand="lg">
        <img src = {healthyweblogo} className="logoo"  width = "125px"/>
      <Container>
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/dashboard"><h7 className="linkText">Home</h7></Nav.Link>
          <Nav.Link href="/Discover"><h7 className="linkText">Discover</h7></Nav.Link>
          <Nav.Link href="/ViewMap" ><h7 className="linkText">View Map</h7></Nav.Link>
      
          
          </Nav>
      
               
        </Navbar.Collapse>
        
      </Container>
    
      <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                            <Button variant="primary" onClick={handleShow}>
        Profile
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img src = {prof} className="logoo"  width = "125px"/></Modal.Body>
      <Modal.Body> <Modal.Title>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome Back </Modal.Title></Modal.Body>
      <Modal.Body><Modal.Title className='modal-text'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{name}!</Modal.Title></Modal.Body>
        <Modal.Footer>
          <Button className="button 1" variant="secondary" onClick={handleClose}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>
      &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                                <Button onClick={Logout}>
                                    Log Out
                                </Button>
                            </div>
                            
                        </div>
                    </div>
                        
    </Navbar>
    <Router>
          <Switch>
            {/* This route is for home component 
            with exact path "/", in component props 
            we passes the imported component*/}
            <Route exact path="/" />
  
            <Route exact path="/dashboard" component={HomeBody}/>
  
            <Route exact path="/Discover" component={Discover}/>
    
            <Route exact path="/ViewMap" component={ViewMap}/>
  
          </Switch>
    </Router>
    </div>
    )
}

export default Dashboard
