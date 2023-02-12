import { user } from '../../interfaces/user';

class userQueries {
  async userById(id: number) {
    const query = `SELECT * FROM mydbonline.user WHERE ?? = ?`;
    const fields: [string, number] = ['id', id];
    return { query, fields };
  }

  async userByEmail(email: string) {
    const query = `SELECT id, email, blocked, deleted, senhaExpirar, senha FROM mydbonline.user where ?? = ?`;
    const fields: string[] = ['email', email];
    return { query, fields };
  }

  async userByCpf(cpf: string) {
    const query = `SELECT cpf FROM mydbonline.user where ?? = ?`;
    const fields: string[] = ['cpf', cpf];
    return { query, fields };
  }

  async userByNumeroMatricula(numeroMatricula: number) {
    const query = `SELECT numeroMatricula FROM mydbonline.user where ?? = ?`;
    const fields: [string, number] = ['numeoMatricula', numeroMatricula];
    return { query, fields };
  }

  async isUserExists(numeroMatricula: number, email: string, cpf: string) {
    const query = `SELECT id, email, cpf, numeroMatricula FROM mydbonline.user where ?? = ? or ??=? or ??=?`;
    //tipar array com numeros e letras
    const fields: (string | number)[] = ['numeroMatricula', numeroMatricula, 'email', email, 'cpf', cpf];
    return { query, fields };
  }

  async addErrors(quantidadeErros: number, id: number) {
    const query = `update mydbonline.user set ??= ? WHERE ?? = ?`;
    const fields: (string | number)[] = ['senhaErros', quantidadeErros, 'id', id];
    return { query, fields };
  }

  async blockUser(blocked: boolean, blockedAt: Date, id: number) {
    const query = `UPDATE mydbonline.user  SET ??=?, ??=? WHERE ??=?`;
    const fields: (string | boolean | Date | number)[] = ['blocked', blocked, 'blockedAt', blockedAt, 'id', id];
    return { query, fields };
  }

  async unblockUser(blocked: boolean, blockedAt: Date, id: number) {
    const query = `UPDATE mydbonline.user  SET ??=?, ??=? WHERE ??=?`;
    const fields: (string | boolean | Date | number)[] = ['blocked', blocked, 'blockedAt', blockedAt, 'id', id];
    return { query, fields };
  }

  async addAvatar(id: number, avatar: string) {
    const query = `UPDATE mydbonline.user  SET ??=? WHERE ??=?`;
    const fields: (number | string)[] = ['avatar', avatar, 'id', id];
    return { query, fields };
  }

  async pickAvatar(id: number) {
    const query = `SELECT avatar FROM mydbonline.user WHERE ?? = ?`;
    const fields = ['id', id];
    return { query, fields };
  }

  async deleteUser(deleted: boolean, deletedAt: Date, id: number) {
    const query = `UPDATE mydbonline.user  SET ??=?, ??=? WHERE ??=?`;
    const fields: (string | boolean | Date | number)[] = ['deleted', deleted, 'deletedAt', deletedAt, 'id', id];
    return { query, fields };
  }
  async restoreUser(deleted: boolean, deletedAt: Date, id: number) {
    const query = `UPDATE mydbonline.user  SET ??=?, ??=? WHERE ??=?`;
    const fields: (string | boolean | Date | number)[] = ['deleted', deleted, 'deletedAt', deletedAt, 'id', id];
    return { query, fields };
  }

  async updateUser(
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
    updateAt?: Date,
    id?: number
  ) {
    const query = `UPDATE mydbonline.user 
    set ??=?, ??=?, ??=?,??=?, ??=?, ??=?, ??=?, ??=?, ??=?, ??=?, ??=? where ??=?`;
    const fields: (string | number | Date | undefined)[] = [
      'nomeCompleto',
      nomeCompleto,
      'email',
      email,
      'dataNascimento',
      dataNascimento,
      'telefone',
      telefone,
      'cep',
      cep,
      'endereco',
      endereco,
      'complemento',
      complemento,
      'bairro',
      bairro,
      'cidade',
      cidade,
      'uf',
      uf,
      'updateAt',
      updateAt,
      'id',
      id,
    ];
    return { query, fields };
  }
}

export default new userQueries();
