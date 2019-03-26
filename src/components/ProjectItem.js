import React, { Component } from "react";
import { Link } from "react-router-dom";
import pen from "../image/pen.png";
import del from "../image/delete.png";
import zoom from "../image/zoom.png";
import { connect } from "react-redux";
import firebase from "../firebase/firebaseConfig";

class ProjectItem extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
    this.get = this.get.bind();
  }

  get() {
    console.log("supp");
    let currentComponent = this;
    let db = firebase.firestore();
    var docRef = db.collection("projets");
    docRef
      .doc(this.props.projet.id)
      .delete()
      .then(function() {
        currentComponent.props.removeProject(this.props.projet.id);
        console.log("Document successfully deleted!");
      })
      .catch(function(error) {
        console.error("Error removing document: ", error);
      });
  }

  render() {
    const { projet } = this.props;
    console.log(projet);
    return (
      <tr key={this.props.projet.id}>
        <td>{this.props.projet.nom_projet}</td>
        <td>{this.props.projet.description}</td>
        <td>{this.props.projet.date_debut}</td>
        <td>{this.props.projet.duree}</td>
        <td>{this.props.projet.chef_projet}</td>

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
                .doc(this.props.projet.id)
                .delete()
                .then(function() {
                  currentComponent.props.removeProject(this.props.projet.id);
                  console.log("Document successfully deleted!");
                })
                .catch(function(error) {
                  console.error("Error removing document: ", error);
                });
            }}
          />
        </td>
        <td>
          <Link to={"/mod/" + this.props.projet.id}>
            <img
              alt="edit"
              src={pen}
              width="30"
              onClick={console.log("modifier")}
            />
          </Link>
        </td>
      </tr>
    );
  }
}

export default connect()(ProjectItem);
