class perfilQueries {
  addPerfil(userId: number, funcaoId: number) {
    const query = `INSERT INTO perfil (??,??) VALUES (?,?)`;
    const fields = ['User_id', 'funcao_id', userId, funcaoId];
    return { query, fields };
  }

  updatePerfil(userId: number, funcaoId: number) {
    const query = `UPDATE perfil SET ??=? WHERE ??= ?`;
    const fields = ['funcao_id', funcaoId, 'User_id', userId];
    return { query, fields };
  }

  pegarPerfil(userId: number){
    const query = `select perfil.user_id, user.nomeCompleto as Nome, user.email , funcao.descricao perfil  from funcao
    inner join perfil on perfil.funcao_id = funcao.id
    inner join user on user.id = perfil.User_id
    where ??= ?`
    const fields = ['User_id', userId]
    return {query, fields}

  }
}

export default new perfilQueries();
