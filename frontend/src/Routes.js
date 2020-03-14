import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./login/LoginContainer";
import AdminPage from "./pages/AdminPage";

const Routes = () => {
  return (
    <Switch>
      <Route path="/admin">
        <AdminPage />
      </Route>
      <Route exact path="/">
        <h1> Home page </h1>
      </Route>

      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  );
};

export default Routes;
