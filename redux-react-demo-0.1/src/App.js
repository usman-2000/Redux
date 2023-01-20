import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CarContainer from "./components/CarContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CarContainer />
      </div>
    </Provider>
  );
}

export default App;
