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
}

export default new userRepository();
