//Where we make requests to backend//
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEM } from "./types";

// here is where you send back type/ payload etc.
export const getItems = () => {
  return {
    type: GET_ITEMS,
  };
};
