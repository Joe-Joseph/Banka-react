import '@babel/polyfill'
import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import { toast } from 'react-toastify';
import store from './store';
import Login from './Signin.jsx';
import Signup from './Signup.jsx';
import Home from './Home.jsx';
import NavBar from './navBar.jsx';
import CreateAccount from './createAccount.jsx';

class App extends Component {
    render() { 
        return ( 
            <Provider store = {store}>
                <NavBar />
                <div className = "content">
                    <Route path="/signin" component={Login}></Route>
                    <Route path="/signup" component={Signup}></Route>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/create-account" component={CreateAccount}></Route>
                </div>
            </Provider>
         );
    }
}

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, wrapper) : false;
 
export default App;
