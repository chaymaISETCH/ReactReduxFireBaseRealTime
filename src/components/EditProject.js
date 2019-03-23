import React, { Component } from "react";
import { connect } from "react-redux";
import { editProject } from "../actions";
class EditProject extends Component {
  constructor(props) {
    super(props);
    const p = this.props.project[0];
    this.state = {
      nom_projet: p.nom_projet,
      description: p.description,
      date_debut: p.date_debut,
      duree: p.duree,
      chef_projet: p.chef_projet
    };
  }

  render() {
    const cssbutton = { marginTop: 20 };
    const cssbutton2 = { width: 500 };
    const p = this.props.project[0];
    console.log(p);

    return (
      <div className="text-center cssbutton" style={cssbutton2}>
        <form className="form-signin">
          <h1 className="h3 mb-3 font-weight-normal">Modifier projet</h1>
          <input
            type="text"
            value={this.state.nom_projet}
            className="form-control"
            required
            onChange={e =>
              this.setState({
                nom_projet: e.target.value
              })
            }
          />
          <input
            type="text"
            value={this.state.description}
            className="form-control"
            placeholder="Description"
            onChange={e => this.setState({ description: e.target.value })}
          />
          <label>Date</label>
          <input
            type="date"
            value={this.state.date_debut}
            className="form-control"
            placeholder="Date"
            onChange={e => this.setState({ date_debut: e.target.value })}
          />
          <input
            type="number"
            value={this.state.duree}
            className="form-control"
            placeholder="durée"
            onChange={e => this.setState({ duree: e.target.value })}
          />
          <input
            type="text"
            value={this.state.chef_projet}
            className="form-control"
            placeholder="Chef de projet"
            onChange={e => this.setState({ chef_projet: e.target.value })}
          />
          <button
            className="btn btn-lg btn-primary btn-block"
            onClick={e => {
              e.preventDefault();
              this.props.editProject(
                this.props.project[0].nom_projet,
                this.state
              );

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

const mapStateToProps = (state, ownProps) => {
  return {
    project: state.filter(i => i.nom_projet === ownProps.match.params.id)
  };
};
const mapDispatchToState = {
  editProject
};

export default connect(
  mapStateToProps,
  mapDispatchToState
)(EditProject);
