const redux = require("redux");
const createStore = redux.createStore;

const BUY_CAKE = "BUY_CAKE";

// action creater
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First action dispatch",
  };
}

// (previousState,action)=>newState

const initial_State = {
  num_of_cakes: 10,
};

const reducer = (state = initial_State, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state, // jab aik sy zyda states hon, ya object k andr aik sy zyda chzn hon
        num_of_cakes: state.num_of_cakes - 1,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("Initial state", store.getState());
const unsubscibe = store.subscribe(() =>
  console.log("Updated State", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

unsubscibe();
