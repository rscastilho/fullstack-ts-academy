import { Routes, Route } from "react-router-dom";
import Notfound from "../pages/NotFound/Notfound";
import Principal from "../pages/Principal/Principal";
import Login from "../pages/Login-register/Login";
import Register from "../pages/Login-register/Register";
import Administracao from "../pages/Administracao/Administracao";
import Usuarios from "../pages/Administracao/Usuarios/Usuarios";
import { useContext } from "react";
import { Authcontext } from "../Context/Context";
import UsuarioNaoLogado from "../components/UsuarioNaoLogado/UsuarioNaoLogado";
import Planos from "./../pages/Administracao/Planos/Planos";

const AppRouter = () => {
  const { state, perfil } = useContext(Authcontext);

  return (
    <>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/administracao"
          element={
            state.logado && perfil === "Administrador" ? (
              <Administracao />
            ) : (
              <UsuarioNaoLogado />
            )
          }
        />
        <Route
          path="/usuarios"
          element={
            state.logado && perfil === "Administrador" ? (
              <Usuarios />
            ) : (
              <UsuarioNaoLogado />
            )
          }
        />
        <Route
          path="/planos"
          element={
            state.logado && perfil === "Administrador" ? (
              <Planos />
            ) : (
              <UsuarioNaoLogado />
            )
          }
        />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
};

export default AppRouter;
