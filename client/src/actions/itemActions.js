//Where we make requests to backend//
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from "./types";

// here is where you send back type/ payload etc.
export const getItems = () => {
  return {
    type: GET_ITEMS,
  };
};
export const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    payload: id,
  };
};

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};
