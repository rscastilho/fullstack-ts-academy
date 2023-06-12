import "./App.css";
import Bodypage from "./components/Layout/BodyPage";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className={'principal'}>
      <BrowserRouter>
      <Header />
        <Bodypage />
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
