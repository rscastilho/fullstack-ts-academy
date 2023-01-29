import _registerQueries from '../../data/queries/registerQueries';

class registerUser {
  async addUser(
    numeroMatricula: number,
    email: string,
    nomeCompleto: string,
    cpf: string,
    dataNascimento: Date,
    telefone: string,
    senha: string,
    cep: string,
    endereco: string,
    complemento: string,
    bairro: string,
    cidade: string,
    uf: string,
    dataInicio: Date,
    avatar: string,
    createAt: Date,
    senhaExpiraEm: Date
  ) {
    return await _registerQueries.register(
      numeroMatricula,
      email,
      nomeCompleto,
      cpf,
      dataNascimento,
      telefone,
      senha,
      cep,
      endereco,
      complemento,
      bairro,
      cidade,
      uf,
      dataInicio,
      avatar,
      createAt,
      senhaExpiraEm
    );
  }
}

export default new registerUser();
