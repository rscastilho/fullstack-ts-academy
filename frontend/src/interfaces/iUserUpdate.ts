export interface iUserUpdate {
    id: number
    nomeCompleto?: string,
    email?: string,
    dataNascimento?: Date,
    telefone?: string,
    cep?: string,
    endereco?: string,
    complemento?: string,
    bairro?: string,
    cidade?: string,
    uf?: string,
    updateAt: Date,
  }
  