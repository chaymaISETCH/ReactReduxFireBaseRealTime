import {
  ADD_PROJECT,
  REMOVE_PROJECT,
  GET_PROJECTS,
  EDIT_PROJECT
} from "../actions/types";
const rootReducer = (state = [], action) => {
  switch (action.type) {
    /****************************/
    case GET_PROJECTS:
      return action.projects;
    //***************************/
    case ADD_PROJECT: {
      console.log("add reducer");
      return state.concat(action.projet);
    }
    /****************************/
    case REMOVE_PROJECT: {
      return state.filter(
        projet => projet.nom_projet !== action.projet.nom_projet
      );
    }
    /***************************/
    case EDIT_PROJECT: {
      return state.map(p => {
        console.log("reducer");
        console.log(action);
        console.log(action.id);
        console.log(action.projet);
        if (p.nom_projet === action.id) {
          return {
            ...p,
            nom_projet: action.project.nom_projet,
            description: action.project.description,
            date_debut: action.project.date_debut,
            duree: action.project.duree,
            chef_projet: action.project.chef_projet
          };
        } else return p;
      });
    }
    default:
      return state;
  }
};
export default rootReducer;
