import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function TaskManagement() {
  return (
    <Router>
      <Switch>
        <Route path='/tasks/new' component={TaskForm} />
        <Route path='/tasks' component={TaskList} />
      </Switch>
    </Router>
  );
}

export default TaskManagement;
