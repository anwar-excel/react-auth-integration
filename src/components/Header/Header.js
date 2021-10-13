import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Link to="/home">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/about-us">About Us</Link>
            <button>Sign out</button>
        </div>
    );
};

export default Header;