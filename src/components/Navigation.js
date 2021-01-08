import React from "react";
import { Switch } from "react-router-dom";
import ConnectedRoute from "./ConnectedRoute";
import Home from "../screens/Home";
import NotFound from "../screens/NotFound";
import Dashboard from "../screens/Dashboard";

export default function Navigation() {
  return (
    <Switch>
      <ConnectedRoute exact path="/" redirectIfAuthenticated component={Home} />
      <ConnectedRoute exact isProtected path="/dashbaord" component={Dashboard} />
      <ConnectedRoute path="*" component={NotFound} />
    </Switch>
  );
}
