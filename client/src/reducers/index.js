//Bring in all reducers
import { combineReducers } from "redux";
import itemReducer from "./itemReducer.js";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";

//item is how we identify the reducer.. aka how it will be referred to in components
export default combineReducers({
  item: itemReducer,
  error: errorReducer,
  auth: authReducer,
});
