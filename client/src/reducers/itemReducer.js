// reducers is where state goes.. check actions---actions dispatch to reducers-- payloads etc. and reducers pass to react//
import { v1 as uuid } from "uuid";
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from "../actions/types";
import { get } from "mongoose";
const initialState = {
  items: [
    { id: uuid(), name: "eggs" },
    { id: uuid(), name: "milk" },
    { id: uuid(), name: "cheese" },
    { id: uuid(), name: "more eggs" },
  ],
};

//create switch when action comes in run check on type
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items],
      };
    default:
      return state;
  }
}
