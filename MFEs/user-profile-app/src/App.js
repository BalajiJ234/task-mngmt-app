import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserProfile from "./components/UserProfile";

function UserProfileApp() {
  return (
    <Router>
      <Switch>
        <Route path='/profile' component={UserProfile} />
      </Switch>
    </Router>
  );
}

export default UserProfileApp;
