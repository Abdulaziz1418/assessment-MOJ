import React from 'react'
import './header.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function Header() {
        return(
            <Navbar fixed= "top" sticky="top" expand="sm" style={{backgroundColor: 'white'}} >
            <Nav >
             <div id='firstDiv'/>
             <div id='SecoundDiv'/>
            </Nav>
           
          </Navbar>
        );
    
}

export default Header;