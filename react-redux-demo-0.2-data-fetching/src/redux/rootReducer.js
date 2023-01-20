import { combineReducers } from "redux";
import { userReducer } from "./UserRedux/userReducers";

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
