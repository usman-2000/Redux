const redux = require("redux");
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");

const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const initialState = {
  loading: true,
  users: [],
  error: "",
};

const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

const fetch_user_request = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

const fetch_user_success = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};

const fetch_user_failure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        loading: false,
        users: actions.payload,
        error: "",
      };

    case FETCH_USER_FAILURE:
      return {
        loading: false,
        users: [],
        error: actions.payload,
      };
  }
};

// aysnc action creater

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetch_user_request());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // response.data is the array of users
        const users = response.data.map((user) => user.id);
        dispatch(fetch_user_success(users));
      })
      .catch((error) => {
        // error.message is the error description
        dispatch(fetch_user_failure(error.message));
      });
  };
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => console.log(store.getState()));
store.dispatch(fetchUsers());
