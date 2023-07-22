import React, { createContext, useState } from "react";

interface logado {
  logado: boolean;
}

interface islogged {
  state: logado;
  setState: React.Dispatch<React.SetStateAction<logado>>;
}

const defaultValues = {
  state: { logado: false },
  setState: () => {},
};

export const Authcontext = createContext<islogged>(defaultValues);

const AuthProvider = ({ children }: any) => {
  const [state, setState] = useState(defaultValues.state);


  return (
    <Authcontext.Provider value={{ state, setState }}>
      {children}
    </Authcontext.Provider>
  );
};
export default AuthProvider;
