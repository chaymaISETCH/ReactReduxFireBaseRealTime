import React, { Component } from "react";

export default class TaskItem extends Component {
  render() {
    const { tache } = this.props;
    return (
      <tr>
        <td>{tache.nom_tache}</td>
        <td>{tache.description}</td>
        <td>{tache.date_debut}</td>
        <td>{tache.duree} Jours</td>
        <td>{tache.responsable}</td>
        <td>{tache.cout} DT</td>
        <td>{tache.priorite}</td>
      </tr>
    );
  }
}
