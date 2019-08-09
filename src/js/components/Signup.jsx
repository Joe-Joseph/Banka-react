import React, { Component } from "react";
import axios from 'axios';
import Input from './Input.jsx';

class Signup extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password:''
      },
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit (e) {
    e.preventDefault();
    const user = this.state.user
      axios.post('https://banka-c-3-db.herokuapp.com/api/v2/auth/signup', user)
      .then(result => {
        const jwt = result.data.data.token;
      localStorage.setItem('token', jwt)
      this.props.history.push('/')
    })
      .catch (err => {
        const errors = err.response.data.error;
        this.setState({errors})
      });
  }
  handleChange(e) {
    const user = {...this.state.user};
    user[e.target.name] = e.target.value
    this.setState({user})
  }
  render() {
    return(
      <React.Fragment>
        <div className="row mt-5">
          <div className="col-md-4 offset-md-1">
            {Object.entries(this.state.errors).length > 0 && <div className="alert alert-danger">{this.state.errors}</div>}
            <form onSubmit = {this.handleSubmit}>
            <Input 
                type = "text" 
                name="firstName"
                text="First Name"
                className="form-control" 
                id="firstName"
                label="firstName"
                value = {this.state.user.firstName} 
                onChange={this.handleChange}/>

              <Input 
                type = "text" 
                name="lastName"
                text="Last Name"
                className="form-control" 
                id="lastName"
                label="lastName"
                value = {this.state.user.lastName} 
                onChange={this.handleChange}/>

              <Input 
                type = "email" 
                name="email"
                text="Email"
                className="form-control" 
                id="email"
                label="email"
                value = {this.state.user.email} 
                onChange={this.handleChange}/>

              <Input 
                type = "password" 
                name="password"
                text="Password"
                className="form-control" 
                id="password"
                label="password"
                value = {this.state.user.password} 
                onChange={this.handleChange}/>

              <button className = "btn btn-primary">Signup</button>
            </form>
          </div>
        </div>
      </React.Fragment>

    );
  }
}

export default Signup;