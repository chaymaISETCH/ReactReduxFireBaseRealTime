import {
  ADD_PROJECT,
  REMOVE_PROJECT,
  GET_PROJECTS,
  EDIT_PROJECT
} from "../actions/types";
const rootReducer = (state = [], action) => {
  switch (action.type) {
    /****************************/
    case GET_PROJECTS: {
      console.log("get projects");
      return action.projects;
    }
    //***************************/
    //useless
    case ADD_PROJECT: {
      console.log("add reducer");
      console.log(action);

      let newState = state.concat(action.project);
      console.log(newState);
      return newState;
    }
    /****************************/
    case REMOVE_PROJECT: {
      console.log("remove reducer");
      return state.filter(projet => projet.id !== action.id);
    }
    /***************************/
    //useless
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
