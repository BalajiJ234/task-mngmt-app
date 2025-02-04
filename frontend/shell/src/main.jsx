import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Dashboard = React.lazy(() => import("dashboard/Dashboard"));
const Tasks = React.lazy(() => import("tasks/Tasks"));
const Auth = React.lazy(() => import("auth/Auth"));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<h1>Shell App</h1>} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/tasks' element={<Tasks />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
    </Suspense>
  </Router>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
