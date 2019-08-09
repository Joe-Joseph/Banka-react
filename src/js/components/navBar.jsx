import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Home</Link>
        <Link className="navbar-brand" to="/signin">Signin</Link>
        <Link className="navbar-brand" to="/signup">Signup</Link>
      </nav>
    );
}
 
export default NavBar;