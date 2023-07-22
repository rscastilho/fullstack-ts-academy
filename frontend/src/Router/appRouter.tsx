import { Routes, Route, Navigate } from "react-router-dom";
import Notfound from "../pages/NotFound/Notfound";
import Principal from "../pages/Principal/Principal";
import Login from "../pages/Login-register/Login";
import Register from "../pages/Login-register/Register";
import Administracao from "../pages/Administracao/Administracao";
import Usuarios from "../pages/Usuarios/Usuarios";
import { useContext } from "react";
import { Authcontext } from "../Context/Context";
import UsuarioNaoLogado from "../components/UsuarioNaoLogado/UsuarioNaoLogado";

const AppRouter = () => {
  const { state } = useContext(Authcontext);

  return (
    <>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/administracao"
          element={state ? <Administracao /> : <Navigate to={"/"} />}
        />
        <Route
          path="/usuarios"
          element={state ? <Usuarios /> : <UsuarioNaoLogado />}
        />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
};

export default AppRouter;
