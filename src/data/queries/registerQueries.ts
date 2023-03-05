class registerQueries {
   register(
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
    senhaExpiraEm: Date, 
    plano_id: number

  ) {
    const query = `INSERT INTO user (??,??,??,??,??,??,??,??,??,??,??,??,??,??,??,??,??,??) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) `;
    const fields: any[] = [
      'numeroMatricula',
      'email',
      'nomeCompleto',
      'cpf',
      'dataNascimento',
      'telefone',
      'senha',
      'cep',
      'endereco',
      'complemento',
      'bairro',
      'cidade',
      'uf',
      'dataInicio',
      'avatar',
      'createAt',
      'senhaExpiraEm',
      'plano_id',
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
      senhaExpiraEm,
      plano_id
    ];
    return { query, fields };
  }

  }

export default new registerQueries();
