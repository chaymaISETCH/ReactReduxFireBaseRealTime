import firebase from "../firebase/firebaseConfig";
import { getProjectsAction, removeProject } from "../actions";
import React from "react";
import pen from "../image/pen.png";
import del from "../image/delete.png";
import zoom from "../image/zoom.png";
import Item from "./ProjectItem";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
class ProjectContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,

      projets: []
    };
    this.getProjets = this.getProjets.bind(this);
  }
  //************************************************* */
  componentWillUnmount() {
    let db = firebase.firestore();
    var unsubscribe = db.collection("projets").onSnapshot(function() {
      console.log("Stop listening to changes");
    });
    // ...
    // Stop listening to changes
    unsubscribe();
  }
  //*********************************** */
  componentDidMount() {
    console.log("did mount");
    this.getProjets();
  }
  getProjets() {
    console.log("getting projects");
    let currentComponent = this;
    let db = firebase.firestore();
    var docRef = db.collection("projets");
    let projects = [];
    //************************EVENT */
    docRef.onSnapshot(function(snapshot) {
      snapshot.docChanges().forEach(function(change) {
        if (change.type === "added") {
          console.log("add event");
          console.log("New city: ", change.doc.data());
        }
        if (change.type === "modified") {
          console.log("edit event");
          console.log("Modified city: ", change.doc.data());
        }
        if (change.type === "removed") {
          console.log("remove event");
          let p = { ...change.doc.data(), id: change.doc.id };
          console.log("Removed city: ", p);
          currentComponent.props.removeProject(change.doc.id);
        }
      });
    });
    //******************************* */
    docRef
      .get()
      .then(function(doc) {
        console.log("Document data:", doc);
        doc.forEach(d => {
          console.log(d.data());
          projects.push({ ...d.data(), id: d.id });
        });
        console.log(projects);

        currentComponent.props.getProjectsAction(projects);
        currentComponent.setState({ loading: false });
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
  }

  //****************************************** */

  render() {
    var doc = [];
    if (this.state.loading) {
      return (
        <h1
          className="container"
          style={{
            fontSize: "28px",
            marginTop: "30%",
            textAlign: "center",
            verticalAlign: "middle",

            fontFamily:
              'medium-content-serif-font,Georgia,Cambria,"Times New Roman",Times,serif'
          }}
        >
          Chargement...
        </h1>
      );
    }

    return (
      <div>
        {console.log(this.props.projects)}
        {doc.map(projet => console.log(projet))}
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

        {this.props.projects.length === 0 ? (
          <h6
            className="container"
            style={{
              fontSize: "18px",
              marginTop: "30%",
              textAlign: "center",
              color: "gray",
              verticalAlign: "middle",

              fontFamily:
                'medium-content-serif-font,Georgia,Cambria,"Times New Roman",Times,serif'
            }}
          >
            Votre liste de projets est vide
          </h6>
        ) : (
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
                {this.props.projects.map(item => (
                  <tr key={item.id}>
                    <td>{item.nom_projet}</td>
                    <td>{item.description}</td>
                    <td>{item.date_debut}</td>
                    <td>{item.duree}</td>
                    <td>{item.chef_projet}</td>

                    <td>
                      {/*passing id */}

                      <img
                        alt="details"
                        src={zoom}
                        width="30"
                        onClick={console.log("taches")}
                      />
                    </td>
                    <td>
                      <img
                        alt="delete"
                        src={del}
                        width="30"
                        onClick={() => {
                          console.log("supp");
                          let currentComponent = this;
                          let db = firebase.firestore();
                          var docRef = db.collection("projets");
                          docRef
                            .doc(item.id)
                            .delete()
                            .then(function() {
                              currentComponent.props.removeProject(item.id);
                              console.log("Document successfully deleted!");
                            })
                            .catch(function(error) {
                              console.error("Error removing document: ", error);
                            });
                        }}
                      />
                    </td>
                    <td>
                      <Link to={"/mod/" + item.id}>
                        <img
                          alt="edit"
                          src={pen}
                          width="30"
                          onClick={console.log("modifier")}
                        />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}
const mapDispatchToState = {
  getProjectsAction,
  removeProject
};

const mapStateToProps = state => {
  return {
    projects: state
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToState
)(ProjectContent);
