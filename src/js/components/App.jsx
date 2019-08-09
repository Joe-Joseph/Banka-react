import React, { Component } from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Login from './Signin.jsx';
import Signup from './Signup.jsx';
import NavBar from './navBar.jsx';

class App extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <NavBar />
                <div className = "content">
                    <Route path="/signin" component={Login}></Route>
                    <Route path="/signup" component={Signup}></Route>
                </div>
            </React.Fragment>
         );
    }
}

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, wrapper) : false;
 
export default App;