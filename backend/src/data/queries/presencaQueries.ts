class presenca {
  async registraPresenca(data: Date, user_id: number, modalidade_id: number) {
    const query = `INSERT INTO presenca (??, ??, ??) VALUES (?,?,?) `;
    const fields = ['data', 'user_id', 'modalidade_id', data, user_id, modalidade_id];
    return { query, fields };
  }
}

export default new presenca();
