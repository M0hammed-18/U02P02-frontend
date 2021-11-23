import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
    };


    this.changeUserName = this.changeUserName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.submitSignUp = this.submitSignUp.bind(this);
  }
  changeUserName(e) {
    this.setState({
      username: e.target.value,
    });
  }
  changeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  changePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  submitSignUp(event) {
    event.preventDefault();
    const riges = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };
    if (
      this.state.username.length > 0 &&
      this.state.email.length > 0 &&
      this.state.password.length > 0
    ) {
      axios
        .post("http://localhost:4000/users/create", riges)
        .then((res) => console.log(res));
      window.location = "/home";
      this.setState({
        username: "",
        email: "",
        password: "",
      });
    } else window.alert("fill all fields");
  }
  render() {
    return (
      <div>
        <div className="contener">
          <div className="formDiv">
            <form onSubmit={this.submitSignUp}>
              <input
                type="text"
                placeholder="User Name"
                onChange={this.changeUserName}
                value={this.state.username}
                className="form-control form-group"
              />
              <input
                type="email"
                placeholder="Email"
                onChange={this.changeEmail}
                value={this.state.email}
                className="form-control form-group"
              />
              <input
                type="password"
                placeholder="Password"
                onChange={this.changePassword}
                value={this.state.password}
                className="form-control form-group"
              />
              <input
                type="submit"
                className="btn btn-danger btn-block"
                value="submit"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

