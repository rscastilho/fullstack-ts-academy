class planoQueries {
  planoById(id: number) {
    const query = `SELECT * FROM PLANO WHERE ??=?`;
    const fields = ['id', id];
    return { query, fields };
  }
}

export default new planoQueries()

