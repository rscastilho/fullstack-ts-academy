class funcaoQueries {
  getAllFuncoes() {
    const query = `SELECT * FROM mydbonline.funcao`;
    return { query };
  }

  getFuncaoById(id: number) {
    const query = `SELECT * FROM mydbonline.funcao WHERE ?? = ?`;
    const fields = ['id', id];
    return { query, fields };
  }

  async getByDescricao(descricao: string) {
    const query = `SELECT * FROM mydbonline.funcao WHERE ?? LIKE ?`;
    const fields = ['descricao', descricao];
    return { query, fields };
  }

  addDescricao(descricao: string, createAt: Date) {
    const query = `INSERT INTO mydbonline.funcao (??, ??) VALUES (?,?)`;
    const fields = ['descricao', 'createAt', descricao, createAt];
    return { query, fields };
  }
}

export default new funcaoQueries();
