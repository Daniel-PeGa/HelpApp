import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Header = () => {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };
    
    return (
        <header>
        <h1>
            <Link to="/">Help App</Link>
        </h1>
        <nav>
            {Auth.loggedIn() ? (
            <>
                <Link to="/profile">Profile</Link>
                <a href="/" onClick={logout}>
                Logout
                </a>
            </>
            ) : (
            <>
                <Link to="/signup">Signup</Link>
                <Link to="/login">Login</Link>
            </>
            )}
        </nav>
        </header>
    );
    };

    export default Header;