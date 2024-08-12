import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const TaskManagement = React.lazy(() =>
  import("taskManagementApp/TaskManagement")
);
const TaskOverview = React.lazy(() => import("taskOverviewApp/TaskOverview"));
const UserProfile = React.lazy(() => import("userProfileApp/UserProfile"));

function App() {
  return (
    <Router>
      <React.Suspense fallback='Loading...'>
        <Switch>
          <Route path='/tasks' component={TaskManagement} />
          <Route path='/overview' component={TaskOverview} />
          <Route path='/profile' component={UserProfile} />
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default App;
