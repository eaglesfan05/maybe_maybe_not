//Bring in all reducers
import { combineReducers } from "redux";
import itemReducer from "./itemReducer.js";

//item is how we identify the reducer.. aka how it will be referred to in components
export default combineReducers({
  item: itemReducer,
});
