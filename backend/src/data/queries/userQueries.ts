import { user } from '../../interfaces/user';

class userQueries {
  userById(id: number) {
    const query = `SELECT * FROM user WHERE ?? = ?`;
    const fields: [string, number] = ['id', id];
    return { query, fields };
  }

  async userByNomeCompleto(nomeCompleto: string) {
    const query = `SELECT numeroMatricula, nomeCompleto, email, cpf, dataNascimento, telefone, avatar, cep, endereco, complemento, bairro, cidade, uf FROM user where ?? like ?`;
    const fields: string[] = ['nomeCompleto', nomeCompleto];
    return { query, fields };
  }

  userByEmail(email: string) {
    const query = `SELECT id, email, blocked, deleted, senhaExpirar, senha FROM user where ?? = ?`;
    const fields: string[] = ['email', email];
    return { query, fields };
  }

  userByCpf(cpf: string) {
    const query = `SELECT cpf FROM user where ?? = ?`;
    const fields: string[] = ['cpf', cpf];
    return { query, fields };
  }

  userByNumeroMatricula(numeroMatricula: number) {
    const query = `SELECT id, numeroMatricula FROM user where ?? = ?`;
    const fields: [string, number] = ['numeroMatricula', numeroMatricula];
    return { query, fields };
  }

  async isUserExists(numeroMatricula: number, email: string, cpf: string) {
    const query = `SELECT id, email, cpf, numeroMatricula FROM user where ?? = ? or ??=? or ??=?`;
    //tipar array com numeros e letras
    const fields: (string | number)[] = ['numeroMatricula', numeroMatricula, 'email', email, 'cpf', cpf];
    return { query, fields };
  }

  async addErrors(quantidadeErros: number, id: number) {
    const query = `update user set ??= ? WHERE ?? = ?`;
    const fields: (string | number)[] = ['senhaErros', quantidadeErros, 'id', id];
    return { query, fields };
  }

  async blockUser(blocked: boolean, blockedAt: Date, id: number) {
    const query = `UPDATE user  SET ??=?, ??=? WHERE ??=?`;
    const fields: (string | boolean | Date | number)[] = ['blocked', blocked, 'blockedAt', blockedAt, 'id', id];
    return { query, fields };
  }

  async unblockUser(blocked: boolean, blockedAt: Date, id: number) {
    const query = `UPDATE user  SET ??=?, ??=? WHERE ??=?`;
    const fields: (string | boolean | Date | number)[] = ['blocked', blocked, 'blockedAt', blockedAt, 'id', id];
    return { query, fields };
  }

  async addAvatar(id: number, avatar: string) {
    const query = `UPDATE user  SET ??=? WHERE ??=?`;
    const fields: (number | string)[] = ['avatar', avatar, 'id', id];
    return { query, fields };
  }

  async pickAvatar(id: number) {
    const query = `SELECT avatar FROM user WHERE ?? = ?`;
    const fields = ['id', id];
    return { query, fields };
  }

  async deleteUser(deleted: boolean, deletedAt: Date, id: number) {
    const query = `UPDATE user  SET ??=?, ??=? WHERE ??=?`;
    const fields: (string | boolean | Date | number)[] = ['deleted', deleted, 'deletedAt', deletedAt, 'id', id];
    return { query, fields };
  }
  async restoreUser(deleted: boolean, deletedAt: Date, id: number) {
    const query = `UPDATE user  SET ??=?, ??=? WHERE ??=?`;
    const fields: (string | boolean | Date | number)[] = ['deleted', deleted, 'deletedAt', deletedAt, 'id', id];
    return { query, fields };
  }

  updateUser(
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
    const query = `UPDATE user 
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
  getAllUser() {
    const query = `SELECT id, numeroMatricula, nomeCompleto, email, cpf, dataNascimento, telefone, avatar, cep, endereco, complemento, bairro, cidade, uf, blocked, deleted FROM user`;
    return { query };
  }
}

export default new userQueries();
