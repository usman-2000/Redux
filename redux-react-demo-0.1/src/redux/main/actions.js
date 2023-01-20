import { BUY_CAR, SELL_CAR } from "./types";

export const buyCar = () => {
  return {
    type: BUY_CAR,
  };
};

export const sellCar = () => {
  return {
    type: SELL_CAR,
  };
};
