import { BUY_CAR, SELL_CAR } from "./types";

const initialBuyCarNum = {
  carNumberOfBuyCar: "ED-1231",
};

const initialSellCarNum = {
  carNumberOfSellCar: "",
};

export const reducerForBuyCar = (state = initialBuyCarNum, actions) => {
  switch (actions.type) {
    case BUY_CAR:
      return {
        ...state,
        carNumberOfBuyCar: (state.carNumberOfBuyCar = "------"),
      };
    default:
      return state;
  }
};

export const reducerForSellCar = (state = initialSellCarNum, actions) => {
  switch (actions.type) {
    case SELL_CAR:
      return {
        ...state,
        carNumberOfSellCar: (state.carNumberOfSellCar = "ABC-123"),
      };
    default:
      return state;
  }
};
