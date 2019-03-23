import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Content from "./ProjectContent";
import TaskContent from "./TaskContent";
import CreateProject from "./CreateProject";
import EditTask from "./EditProject";
import Header from "./Header";

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

          <Route path="/signIn" exact component={Header} />
          <Route path="/header" exact component={Header} />
          <Route path="/edit/:id" component={Header} />
          <Route path="/createTask" component={Header} />
          <Route path="/projets" component={Content} />
          <Route path="/mod/:id" component={EditTask} />
          <Route path="/taches/:id" component={TaskContent} />
          <Route path="/createProject" component={CreateProject} />
        </div>
      </Router>
    );
  }
}
