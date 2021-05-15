import React from "react";

import Login from "../login/Login";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <div className="content-wrapper">
            <div className="sidebar-container">
              <Sidebar />
            </div>
          </div>
        </Route>

        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
