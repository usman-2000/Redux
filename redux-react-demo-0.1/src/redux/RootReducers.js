import { combineReducers } from "redux";
import { reducerForBuyCar, reducerForSellCar } from "./main/reducers";

const rootReducer = combineReducers({
  buycar: reducerForBuyCar,
  sellcar: reducerForSellCar,
});

export default rootReducer;
