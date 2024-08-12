import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TaskOverview from "./components/TaskOverview";

function TaskOverviewApp() {
  return (
    <Router>
      <Switch>
        <Route path='/overview' component={TaskOverview} />
      </Switch>
    </Router>
  );
}

export default TaskOverviewApp;
