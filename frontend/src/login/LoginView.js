import React from "react";
import "./css.css";

const LoginView = props => {
  const { handlePasswordChange, handleUsernameChange, handleSubmit } = props;
  return (
    <form className="form" onSubmit={event => handleSubmit(event)}>
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
          asdfasd
        </button>
      </fieldset>
    </form>
  );
};

export default LoginView;
