import _userQuery from '../../data/queries/userQueries';

class userRepository {
  async userById(id: number) {
    return await _userQuery.userById(id);
  }

  async userByEmail(email: string) {
    return await _userQuery.userByEmail(email);
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
}

export default new userRepository();
