import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { CalendarioScreen } from "../components/calendario/CalendarioScreen";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/" component={CalendarioScreen} />

          <Redirect to="/login" />
        </Switch>
      </div>
    </Router>
  );
};
