import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Top from './components/Top';
import Login from './components/Login';
import Register from './components/register';
import SideNav from './components/SideNav';
import Application from './components/Application';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <Top/> */}
      <BrowserRouter>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/sidenav" component={SideNav}></Route>
        <Route exact path="/dashboard" component={SideNav}></Route>
        <Route exact path="/profile" component={SideNav}></Route>
        <Route exact path="/jobs" component={SideNav}></Route>
        <Route exact path="/application" component={SideNav}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
