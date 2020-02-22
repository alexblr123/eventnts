import React from "react";
import LoginView from "./LoginView";

class LoginContainer extends React.Component {
  state = {
    username: "",
    password: ""
  };
  componentDidUpdate = () => {
    console.log(this.state.password);
  };
  handleUsernameChange = value => {
    this.setState({ username: value });
  };
  handlePasswordChange = value => {
    this.setState({ password: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    fetch("http://localhost:3001/login", {
      method: "POST",
      body: { username: this.state.username, password: this.state.password }
    })
      .then(response => response.json())
      .then(result => console.log(result));
  };

  render() {
    const props = {
      handlePasswordChange: this.handlePasswordChange,
      handleUsernameChange: this.handleUsernameChange,
      handleSubmit: this.handleSubmit
    };
    return <LoginView {...props} />;
  }
}

export default LoginContainer;
