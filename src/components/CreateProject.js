import React, { Component } from "react";
import { connect } from "react-redux";
class CreateProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom_projet: "",
      description: "",
      date_debut: Date.now,
      duree: 0,
      chef_projet: ""
    };
  }

  render() {
    const cssbutton = { marginTop: 20 };
    const cssbutton2 = { width: 500 };
    return (
      <div className="text-center cssbutton" style={cssbutton2}>
        <form className="form-signin">
          <h1 className="h3 mb-3 font-weight-normal">Ajouter un projet</h1>
          <input
            type="text"
            className="form-control"
            placeholder="Nom"
            required
            onChange={e =>
              this.setState({
                nom_projet: e.target.value
              })
            }
          />
          <input
            type="text"
            className="form-control"
            placeholder="Description"
            onChange={e => this.setState({ description: e.target.value })}
          />
          <label>Date</label>
          <input
            type="date"
            className="form-control"
            placeholder="Date"
            onChange={e => this.setState({ date_debut: e.target.value })}
          />
          <input
            type="number"
            className="form-control"
            placeholder="durée"
            onChange={e => this.setState({ duree: e.target.value })}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Chef de projet"
            onChange={e => this.setState({ chef_projet: e.target.value })}
          />
          <button
            className="btn btn-lg btn-primary btn-block"
            onClick={e => {
              e.preventDefault();
              let projet = {
                nom_projet: this.state.nom_projet,
                description: this.state.description,
                date_debut: this.state.date_debut,
                duree: this.state.duree,
                chef_projet: this.state.chef_projet
              };
              this.props.dispatch({
                type: "ADD_PROJECT",
                projet
              });
              console.log(this.state);

              this.props.history.push("/projets");
            }}
            style={cssbutton}
            type="submit"
          >
            Valider
          </button>
          <p className="mt-5 mb-3 text-muted">© 2019 Chayma Trabelsi</p>
        </form>
      </div>
    );
  }
}

export default connect()(CreateProject);
