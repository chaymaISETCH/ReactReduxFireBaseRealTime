import React from "react";
import Item from "./TaskItem";

export default class TaskContent extends React.Component {
  constructor() {
    super();
    this.state = {
      taches: []
    };
  }

  componentWillMount() {
    this.getTaches();
  }
  getTaches() {
    //get all projects
    //promise
    fetch("http://localhost:8085/taskbyprojectid/" + this.props.match.params.id)
      //parsing to json
      .then(response => {
        if (response.ok) {
          for (let id in response) {
            console.log(id + ":  " + response[id]);
          }
          let c = response.json();
          return c;
        }
      })
      .then(data => {
        console.log(" length : " + data.length);
        let d = data[0];
        for (let id in d) {
          console.log("tache" + d[id]);
        }
        this.setState({ taches: data[0].taches });
      })
      .catch(error => {
        console.log(error);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div className="container">
          <span
            style={{
              fontSize: "28px",
              fontFamily:
                'medium-content-serif-font,Georgia,Cambria,"Times New Roman",Times,serif'
            }}
          >
            Liste des Taches
          </span>
        </div>
        <div className="container">
          <table className="table" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Tache</th>
                <th>Description</th>
                <th>Date début</th>
                <th>Duree</th>
                <th>Responsable</th>
                <th>Cout</th>
                <th>Prioprité</th>
              </tr>
            </thead>
            <tbody>
              {this.state.taches.map(tache => (
                <Item tache={tache} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
