import React, { Component } from "react";
import Input from './Input.jsx';
import { connect } from 'react-redux';
import { loginUser } from '../actions/postAction';
import signupImage from '../../images/signupImage.jpg';

class Login extends Component {
  state = {
      user: {
        email: '',
        password:''
      }
  }

  handleChange = (e) => {
    const user = {...this.state.user};
    user[e.target.name] = e.target.value
    this.setState({user})
  }

  handleSubmit = async(e) => {
    e.preventDefault();
    const user = this.state.user
    await this.props.loginUser(user)
    if(this.props.newErrors.newErrors) {
    }else {
      console.log('User Data', this.props.newUser.token)
      localStorage.setItem('token', this.props.newUser.token);
      this.props.history.push('/create-account')}
 }

  render() {
    return(
      <React.Fragment>
        <div className="row mt-5">
          <div className="col-md-4 offset-md-1">
          <div className = "imgClass">
              <img src = {signupImage}
              style = {{width: 350, height: 200, position: 'absolute', top: 0, left: 600}} />
            </div>
            {this.props.newErrors.newErrors && <div className="alert alert-danger">{this.props.newErrors.newErrors}</div>}
            <form onSubmit={this.handleSubmit}>
              <Input 
                type = "text" 
                name="email"
                text="Email"
                className="form-control" 
                id="email"
                label="Email"
                value = {this.state.user.email} 
                onChange={this.handleChange}/>

              <Input 
                type = "password" 
                name="password"
                text="Password"
                className="form-control" 
                id="password"
                label="Password"
                value = {this.state.user.password} 
                onChange={this.handleChange}/>

              <button className = "btn btn-primary">Login</button>
            </form>
          </div>
        </div>
      </React.Fragment>

    );
  }
}

const mapStateToProps = state => ({
  newUser: state.newUser.newUser,
  newErrors: state.newErrors
})

export default connect(mapStateToProps, {loginUser})(Login);
