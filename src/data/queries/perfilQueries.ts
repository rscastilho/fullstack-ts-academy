class perfilQueries {
  addPerfil(userId: number, funcaoId: number) {
    const query = `INSERT INTO mydbonline.perfil (??,??) VALUES (?,?)`;
    const fields = ['User_id', 'funcao_id', userId, funcaoId];
    return { query, fields };
  }

  updatePerfil(userId: number, funcaoId: number) {
    const query = `UPDATE mydbonline.perfil SET ??=? WHERE ??= ?`;
    const fields = ['funcao_id', funcaoId, 'User_id', userId];
    return { query, fields };
  }
}

export default new perfilQueries();
