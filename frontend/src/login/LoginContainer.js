import React from "react";
import LoginView from "./LoginView";
import { withRouter } from "react-router-dom";

class LoginContainer extends React.Component {
  state = {
    isAuth: false,
    username: "",
    password: ""
  };
  componentDidUpdate = () => {
    if (this.state.isAuth) {
      this.props.history.push("/admin");
    }
  };
  handleUsernameChange = value => {
    this.setState({ username: value });
  };
  handlePasswordChange = value => {
    this.setState({ password: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    fetch("http://localhost:3001/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(result => {
        if (result.status >= 400) {
          console.log("unauthorised");
          return this.setState({ isAuth: false });
        }

        return this.setState({ isAuth: true });
      });
  };

  render() {
    const props = {
      isAuth: this.state.isAuth,
      handlePasswordChange: this.handlePasswordChange,
      handleUsernameChange: this.handleUsernameChange,
      handleSubmit: this.handleSubmit
    };
    return <LoginView {...props} />;
  }
}

export default withRouter(LoginContainer);
