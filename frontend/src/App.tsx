import "./App.css";
import Bodypage from "./components/Layout/BodyPage";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "../src/Context/Context";

function App() {
  return (
    <div className={"principal"}>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Bodypage />
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
