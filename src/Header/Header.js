import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="d-flex header">
            <NavLink className="nav" activeStyle={{ color: "red" }} to="/home">Home</NavLink>
            <NavLink className="nav" activeStyle={{ color: "red" }} to="/hotel">Hotel</NavLink>
            <NavLink className="nav" activeStyle={{ color: "red" }} to="/booking">Booking</NavLink>
            <NavLink className="nav" activeStyle={{ color: "red" }} to="/createaccount">Create-Account</NavLink>
            <NavLink className="nav" activeStyle={{ color: "red" }} to="/login">Log-in</NavLink>
        </div>
    );
};

export default Header;