import {
  ADD_PROJECT,
  REMOVE_PROJECT,
  GET_PROJECTS,
  EDIT_PROJECT
} from "./types";
export const addProject = project => ({ type: ADD_PROJECT, project });
export const removeProject = project => ({ type: REMOVE_PROJECT, project });
export const editProject = (id, project) => ({
  type: EDIT_PROJECT,
  id,
  project
});
export const getProjectsAction = projects => ({ type: GET_PROJECTS, projects });
