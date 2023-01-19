const redux = require("redux");
const createStore = redux.createStore;

const BUY_CAR = "BUY_CAR";

const buy_car_fn = () => {
  return {
    type: BUY_CAR,
    description: "This is for cars",
  };
};

const initialState = {
  num_of_cars: 0,
  brandName: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAR:
      return {
        ...state,
        num_of_cars: state.num_of_cars + 1,
        brandName: (state.brandName = "Audi"),
      };

    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("Initial state ", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("updated state", store.getState());
});

store.dispatch(buy_car_fn());
store.dispatch(buy_car_fn());
store.dispatch(buy_car_fn());
store.dispatch(buy_car_fn());

unsubscribe();
