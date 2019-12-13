import React from 'react';
import Task from "./components/Task";
import TasksList from "./components/TasksList";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App(props) {
  return (
    // JSX - javascript and XML
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Tasks list</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/tasks/:id">
          <Task />
        </Route>
        <Route path="/">
          <TasksList />
        </Route>
      </Switch>
    </Router>
  )
}