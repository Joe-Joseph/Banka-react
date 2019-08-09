import React from 'react';
import {Link} from 'react-router-dom';
import '../../assets/css/home.scss'

const NavBar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand nav-style" to="/">Banka</Link>
        <Link className="navbar-brand nav-style-signin" to="/signin">Signin</Link>
        <Link className="navbar-brand nav-style-signup" to="/signup">Signup</Link>
        <Link className="navbar-brand nav-style-account" to="/create-account">Create account</Link>
      </nav>
    );
}
 
export default NavBar;