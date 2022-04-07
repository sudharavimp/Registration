import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import HomeBody from "./components/HomeBody";
import ViewMap from "./components/ViewMap";
import Example from "./components/NavbarMain";  ///original navbar
import Discover from "./components/Discover";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/dashboard">
        <Dashboard/>
        
       
        </Route>
        <Route path="/Discover">
        <Dashboard/>
       
    
        </Route>
        <Dashboard/>
        <Route path="/ViewMap">
      
   <ViewMap />
     
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
