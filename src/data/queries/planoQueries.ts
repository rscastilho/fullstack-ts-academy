class planoQueries {
  planoById(id: number) {
    const query = `SELECT * FROM PLANO WHERE ??=?`;
    const fields = ['id', id];
    return { query, fields };
  }

  allPlano(){
    const query = `SELECT * FROM plano`
    return {query}
  }

  addPlano(valor: number, descricao: string) {
    const query = `INSERT INTO plano (??,??) VALUES (?,?)`;
    const fields = ['valor', 'descricao', valor, descricao];
    return { query, fields };
  }
  planoByDescricao(descricao: string) {
    const query = `select * from plano where ??=?`;
    const fields = ['descricao', descricao];
    return { query, fields };
  }
}

export default new planoQueries();
