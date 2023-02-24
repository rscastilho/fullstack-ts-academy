import _userQuery from '../../data/queries/userQueries';

class userRepository {
  async userById(id: number) {
    return await _userQuery.userById(id);
  }

  async userByNomeCompleto(nomeCompleto: string) {
    return await _userQuery.userByNomeCompleto(nomeCompleto);
  }

  async userByEmail(email: string) {
    return await _userQuery.userByEmail(email);
  }

  async userByNumeroMatricula(userByNumeroMatricula: number) {
    return await _userQuery.userByNumeroMatricula(userByNumeroMatricula);
  }

  async addErrors(quantidadeErros: number, id: number) {
    return await _userQuery.addErrors(quantidadeErros, id);
  }

  async blockUser(blocked: boolean, blockedAt: Date, id: number) {
    return await _userQuery.blockUser(blocked, blockedAt, id);
  }

  async unblockUser(blocked: boolean, blockedAt: Date, id: number) {
    return await _userQuery.unblockUser(blocked, blockedAt, id);
  }

  async isUserExists(numeroMatricula: number, email: string, cpf: string) {
    return await _userQuery.isUserExists(numeroMatricula, email, cpf);
  }

  async addAvatar(id: number, avatar: string) {
    return await _userQuery.addAvatar(id, avatar);
  }

  async pickAvatar(id: number) {
    return await _userQuery.pickAvatar(id);
  }

  async deleteUser(deleted: boolean, deletedAt: Date, id: number) {
    return await _userQuery.deleteUser(deleted, deletedAt, id);
  }
  async restoreUser(deleted: boolean, deletedAt: Date, id: number) {
    return await _userQuery.restoreUser(deleted, deletedAt, id);
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
    return await _userQuery.updateUser(nomeCompleto, email, dataNascimento, telefone, cep, endereco, complemento, bairro, cidade, uf, updateAt, id);
  }

  async getAllUser() {
    return await _userQuery.getAllUser();
  }
}

export default new userRepository();
