import React, { Component } from "react";
import { connect } from "react-redux";
import { createUser } from "../actions/postAction";
import Input from "./Input.jsx";
import signupImage from '../../images/signupImage.jpg';

class Signup extends Component {
  state = {
    user: {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    }
  };

  handleChange = e => {
    const user = { ...this.state.user };
    user[e.target.name] = e.target.value;
    this.setState({ user });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const user = this.state.user;
    await this.props.createUser(user);
    console.log("success", this.props.newErrors.newErrors);
    if (this.props.newErrors.newErrors) {
    } else {
      this.props.history.push("/");
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="row mt-5">
          <div className="col-md-4 offset-md-1">
            <div className="imgClass">
              <img
                src={signupImage}
                style={{
                  width: 450,
                  height: 350,
                  position: "absolute",
                  top: 10,
                  left: 520,
                }}
              />
            </div>
            {this.props.newErrors.newErrors && (
              <div className="alert alert-danger">
                {this.props.newErrors.newErrors}
              </div>
            )}
            <form onSubmit={this.handleSubmit}>
              <Input
                type="text"
                name="firstName"
                text="First Name"
                className="form-control"
                id="firstName"
                label="firstName"
                value={this.state.user.firstName}
                onChange={this.handleChange}
              />

              <Input
                type="text"
                name="lastName"
                text="Last Name"
                className="form-control"
                id="lastName"
                label="lastName"
                value={this.state.user.lastName}
                onChange={this.handleChange}
              />

              <Input
                type="email"
                name="email"
                text="Email"
                className="form-control"
                id="email"
                label="email"
                value={this.state.user.email}
                onChange={this.handleChange}
              />

              <Input
                type="password"
                name="password"
                text="Password"
                className="form-control"
                id="password"
                label="password"
                value={this.state.user.password}
                onChange={this.handleChange}
              />

              <button className="btn btn-primary">Signup</button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  newUser: state.newUser.user,
  newErrors: state.newErrors
});

export default connect(
  mapStateToProps,
  { createUser }
)(Signup);