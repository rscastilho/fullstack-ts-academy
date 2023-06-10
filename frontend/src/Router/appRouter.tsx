import { Routes, Route } from "react-router-dom";
import Notfound from "../pages/NotFound/Notfound";
import Principal from "../pages/Principal/Principal";
import Login from "../pages/Login-register/Login";
import Register from "../pages/Login-register/Register";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
};

export default AppRouter;
