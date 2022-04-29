import {
  ADD_LIST,
  ADD_WORKSPACE,
  DELETE_LIST,
  DELETE_WORKSPACE,
  SELECT_SPACE,
} from './actions.types';

export const addWorkspace = (data, dispatch) => {
  dispatch({
    type: ADD_WORKSPACE,
    payload: data,
  });
};

export const deleteWorkspace = (data, dispatch) => {
  dispatch({
    type: DELETE_WORKSPACE,
    payload: data,
  });
};

export const selectSpace = (data, dispatch) => {
  dispatch({
    type: SELECT_SPACE,
    payload: data,
  });
};

export const addLists = (data, dispatch) => {
  dispatch({
    type: ADD_LIST,
    payload: data,
  });
};

export const deleteList = (data, dispatch) => {
  dispatch({
    type: DELETE_LIST,
    payload: data,
  });
};
