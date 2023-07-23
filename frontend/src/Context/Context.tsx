import React, { createContext, useEffect, useState } from "react";
import appApi from "../api/appApi";
import jwtdecote from "jwt-decode";

interface logado {
  logado: boolean;
}

interface iToken {
  id: number;
  email: string;
  perfil: string;
}

interface islogged {
  state: logado;
  setState: React.Dispatch<React.SetStateAction<logado>>;
  perfil: string;
}

const defaultValues = {
  state: { logado: false },
  setState: () => {},
};

export const Authcontext = createContext<islogged>({} as islogged);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState(defaultValues.state);
  const [perfil, setPerfil] = useState("");

  const validarPerfil = (token: string) => {
    const result: iToken = jwtdecote(token);
    setPerfil(result.perfil);
  };

  useEffect(() => {
    const pegaToken = localStorage.getItem("@token");
    if (pegaToken) {
      validarPerfil(JSON.stringify(pegaToken));
      pegaToken && setState({ logado: true });
      appApi.defaults.headers.authorization = `bearer ${pegaToken}`;
    }
  }, [state.logado]);

  return (
    <Authcontext.Provider value={{ state, setState, perfil }}>
      {children}
    </Authcontext.Provider>
  );
};
export default AuthProvider;
