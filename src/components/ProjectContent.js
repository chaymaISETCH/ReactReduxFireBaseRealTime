import React from "react";
import Item from "./ProjectItem";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
class ProjectContent extends React.Component {
  constructor() {
    super();
    this.state = {
      projets: []
    };
  }

  componentWillMount() {}
  render() {
    return (
      <div>
        {console.log(this.props.projects)}
        <div className="container">
          <span
            style={{
              fontSize: "28px",
              fontFamily:
                'medium-content-serif-font,Georgia,Cambria,"Times New Roman",Times,serif'
            }}
          >
            Liste des Projets
          </span>
          <button
            className="navbar-brand btn btn-outline-success"
            style={{ float: "right" }}
          >
            <Link to="/createProject">Ajouter</Link>
          </button>
        </div>
        <div className="container">
          <table className="table" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Projet</th>
                <th>Description</th>
                <th>Date début</th>
                <th>Duree</th>
                <th>Chef de projet</th>
                <th>détails</th>
                <th>Supprimer</th>
                <th>Modifier</th>
              </tr>
            </thead>

            <tbody>
              {console.log(this.props.projects)}
              {this.props.projects.map(projet => (
                <Item projet={projet} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state
  };
};
export default connect(mapStateToProps)(ProjectContent);
