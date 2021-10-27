import Form from "./Form";
import "./App.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Form />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
