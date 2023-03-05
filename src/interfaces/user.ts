export interface user {
  id?: number;
  numeroMatricula: number;
  email: string;
  nomeCompleto: string;
  cpf: string;
  dataNascimento: Date;
  telefone: string;
  senha: string;
  cep: string;
  endereco: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
  dataInicio: Date;
  avatar: string;
  createAt: Date;
  senhaExpiraEm: Date;
  plano_id:number;
}
