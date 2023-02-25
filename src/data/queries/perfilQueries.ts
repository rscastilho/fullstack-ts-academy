class perfilQueries {
  addPerfil(userId: number, funcaoId: number) {
    const query = `INSERT INTO mydbonline.perfil (??,??) VALUES (?,?)`;
    const fields = ['User_id', 'funcao_id', userId, funcaoId];
    return { query, fields };
  }
}

export default new perfilQueries();
