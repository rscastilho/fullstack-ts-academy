import { user } from '../../interfaces/user';

class userQueries {
  async userById(id: number) {
    const query = `SELECT id, numeroMatricula, nomeCompleto, email, cpf FROM mydbonline.user WHERE ?? = ?`;
    const fields: [string, number] = ['id', id];
    return { query, fields };
  }

  async userByEmail(email: string) {
    const query = `SELECT id, email, senha FROM mydbonline.user where ?? = ?`;
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
}

export default new userQueries();
