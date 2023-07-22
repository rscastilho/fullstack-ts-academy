export interface iLogin {
  email: string;
  senha: string;
  message: string;
  token?: string;
  status: 200;
}

export interface iLogar {
  email: string | undefined;
  senha: string;
}
