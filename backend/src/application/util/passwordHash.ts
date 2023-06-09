import bcrypt from 'bcrypt';

class passWordHash {
constructor(){}

  async hashPassword(senha: string): Promise<string> {
    try {
      const salt = bcrypt.genSaltSync();
      const senhaHash = bcrypt.hashSync(senha, salt);
      return senhaHash;
    } catch (error) {
      console.log('erro no hashPassword', error);
      return JSON.stringify(error);
    }
  }
}

export default new passWordHash();
