import React from "react";
import "./css.css";

const LoginView = props => {
  const {
    isAuth,
    handlePasswordChange,
    handleUsernameChange,
    handleSubmit
  } = props;
  return (
    <form className="form" onSubmit={event => handleSubmit(event)}>
      <div
        className="check"
        style={
          isAuth ? { backgroundColor: "blue" } : { backgroundColor: "red" }
        }
      ></div>

      <fieldset>
        <legend> lol</legend>
        <input
          type="text"
          name="username"
          placeholder="Введите имя "
          className="inputs"
          onChange={event => handleUsernameChange(event.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Введите пароль"
          className="inputs"
          onChange={event => handlePasswordChange(event.target.value)}
        />
        <button type="submit" name="submitButton" value="Enter">
          Submit
        </button>
      </fieldset>
    </form>
  );
};

export default LoginView;
