import { BrowserRouter } from "react-router-dom";
import Main from "./Routes/Main";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Main />
    </BrowserRouter>
  );
};

export default App;
