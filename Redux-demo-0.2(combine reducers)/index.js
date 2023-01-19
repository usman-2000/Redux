const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// const initialState = {
//   num_of_icecreams: 20,
// };

const initialCakeState = {
  num_of_cakes: 10,
};

const initialIceCreamState = {
  num_of_icecreams: 20,
};

const buyCake = () => {
  return {
    type: BUY_CAKE,
  };
};

const buyIceCream = () => {
  return {
    type: BUY_ICECREAM,
  };
};

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         num_of_cakes: state.num_of_cakes - 1,
//       };
//     case BUY_ICECREAM:
//       return {
//         ...state,
//         num_of_icecreams: state.num_of_icecreams - 1,
//       };
//     default:
//       return state;
//   }
// };

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        num_of_cakes: state.num_of_cakes - 1,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        num_of_icecreams: state.num_of_icecreams - 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: iceCreamReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("INITIAL STATE : ", store.getState());

const unsubscribe = store.subscribe(() => {});

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();
