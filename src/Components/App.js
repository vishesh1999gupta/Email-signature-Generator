import Form from "./Form";
import "./App.css";
import { Provider } from "react-redux";
import store from "../redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Form />
      </div>
    </Provider>
  );
}

export default App;
