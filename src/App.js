import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Axios from 'axios';
import HomeCarousel from './components/HomeCarousel';
import NavigationBar from './components/NavigationBar';
import Menu from './components/Menu';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import AdminPage from './components/AdminPage';
import Info from './components/Info';

function App() {  
  return (
    <div className='App'>
      <header><NavigationBar/></header>
      <div className="App">
        <div className='container' style={{paddingTop: '135px'}}>
          <Router>
            <Switch>
              <Route component={AdminPage} path="/admin" />
              <Route component={AboutUs} path="/about" />
              <Route component={Info} path="/info" />
              <Route component={Menu} path="/menu" />
              <Route component={HomeCarousel} path="/" />
            </Switch>
          </Router>
          <div className='row'>
            <div className='col-sm-12 text-center'>
              <br/>
              <ContactUs/>
            </div>
          </div>
        </div>
      </div>
      <br/>
    </div>
  );
}

export default App;
