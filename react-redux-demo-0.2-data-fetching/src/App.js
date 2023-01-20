import "./App.css";
import { Provider } from "react-redux";
import UserContainer from "./components/UserContainer";
// import { Store } from "redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
