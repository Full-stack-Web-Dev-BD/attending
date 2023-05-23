import { NavLink } from "react-router-dom";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
const UserNavbar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (  <>
        
          <nav className="navbar navbar-expand-lg navbar-dark container nav-menu">
            <NavLink className="navbar-brand" to="/"><img src="assets/img/logo.png" alt="logo" className="logo"/></NavLink>
            <button className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#main-menu" onClick={handleShow}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_112_512)">
                <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_112_512">
                <rect width="24" height="24" fill="white"/>
                </clipPath>
                </defs>
                </svg>            
            </button>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                  <NavLink className="nav-link" to="/users">Users</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/user-groups">User Groups</NavLink>
                </li>
                
                <li className="nav-item">
                    <NavLink className="nav-link" to="/withdrawals">Withdrawals</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/send-message">Messages</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/adding-quests">Adding Quests</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/quest-list">Quest List</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/add-reward">Rewards</NavLink>
                </li>
              </ul>
            </div>
          </nav>
          <Offcanvas show={show} onHide={handleClose}  id="main-menu" placement="end" >
        <Offcanvas.Header>
        <h5 id="main-menu-label">Menu</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={handleClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_139_836)">
              <path d="M12.0007 10.5867L16.9507 5.63672L18.3647 7.05072L13.4147 12.0007L18.3647 16.9507L16.9507 18.3647L12.0007 13.4147L7.05072 18.3647L5.63672 16.9507L10.5867 12.0007L5.63672 7.05072L7.05072 5.63672L12.0007 10.5867Z" fill="white"/>
              </g>
              <defs>
              <clipPath id="clip0_139_836">
              <rect width="24" height="24" fill="white"/>
              </clipPath>
              </defs>
              </svg>              
          </button>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className="border-line m-0"></div>
          <br/>
          <ul className="navbar-nav ms-auto">
          <li className="nav-item">
                  <NavLink className="nav-link" to="/users">Users</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/user-groups">User Groups</NavLink>
                </li>
                
                <li className="nav-item">
                    <NavLink className="nav-link" to="/withdrawals">Withdrawals</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/message">Messages</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/adding-quests">Adding Quests</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/quest-list">Quest List</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/add-reward">Rewards</NavLink>
                </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
      </>);
}
 
export default UserNavbar;