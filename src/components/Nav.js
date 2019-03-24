import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Content from "./ProjectContent";
import TaskContent from "./TaskContent";
import CreateProject from "./CreateProject";
import EditTask from "./EditProject";

export default class Nav extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul className="nav nav-tabs text-center">
            <li className="nav-item">
              <Link to="/projets" className="nav-link active">
                Projets
              </Link>
            </li>
          </ul>

          <Route path="/projets" component={Content} />
          <Route path="/mod/:id" component={EditTask} />
          <Route path="/taches/:id" component={TaskContent} />
          <Route path="/createProject" component={CreateProject} />
        </div>
      </Router>
    );
  }
}
