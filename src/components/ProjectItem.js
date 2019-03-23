import React, { Component } from "react";
import { Link } from "react-router-dom";
import pen from "../image/pen.png";
import del from "../image/delete.png";
import zoom from "../image/zoom.png";
import { connect } from "react-redux";

class ProjectItem extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }
  render() {
    const { projet } = this.props;
    return (
      <tr>
        <td>{projet.nom_projet}</td>
        <td>{projet.description}</td>
        <td>{projet.date_debut}</td>
        <td>{projet.duree} Jours</td>
        <td>{projet.chef_projet}</td>
        <td>
          {/*passing id */}
          <Link to={"/taches/" + projet._id}>
            <img
              alt="details"
              src={zoom}
              width="30"
              onClick={this.onClickDET}
            />
          </Link>
        </td>
        <td>
          <img
            alt="delete"
            src={del}
            width="30"
            onClick={e => {
              console.log("delete");
              this.props.dispatch({
                type: "REMOVE_PROJECT",
                projet: this.props.projet
              });
            }}
          />
        </td>
        <td>
          <Link to={"/mod/" + projet.nom_projet}>
            <img alt="edit" src={pen} width="30" onClick={this.onClickMOD} />
          </Link>
        </td>
      </tr>
    );
  }
}

export default connect()(ProjectItem);
