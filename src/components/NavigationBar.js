import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import icon from '../images/icon.png';

const mystyle = {
    color: "Green",
    fontFamily: "Arial Black",
};

function NavigationBar () {
    return (
        <div>
            <Navbar bg="white" expand="sm" style={{marginTop: '10px', opacity: "0.75"}} className='fixed-top'>
                <Navbar.Brand href="/" style={mystyle} className='clickable-image'>
                    <strong><h2>
                        <img src={icon} width="45" height="52.5" alt="icon"/>
                        PhD Baker
                    </h2></strong>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto text-center">
                    <Nav.Link href="/" className='navi' style={{color: 'green', fontFamily: "Arial Black"}} data-toggle="tooltip" title='Home'><h5>Home</h5></Nav.Link>
                    <Nav.Link href="/menu" className='navi' style={{color: 'green', fontFamily: "Arial Black"}} data-toggle="tooltip" title='Menu'><h5>Menu</h5></Nav.Link>
                    <Nav.Link href="/about" className='navi' style={{color: 'green', fontFamily: "Arial Black"}} data-toggle="tooltip" title='About'><h5>About</h5></Nav.Link>
                    <Nav.Link href="/info" className='navi' style={{color: 'green', fontFamily: "Arial Black"}} data-toggle="tooltip" title='Info'><h5>Info</h5></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            <br/>
        </div>
    )
}

export default NavigationBar;