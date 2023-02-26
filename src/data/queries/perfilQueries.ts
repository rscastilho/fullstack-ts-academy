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

  pegarPerfil(userId: number){
    const query = `select mydbonline.perfil.user_id, mydbonline.user.nomeCompleto as Nome, mydbonline.user.email , mydbonline.funcao.descricao perfil  from mydbonline.funcao
    inner join mydbonline.perfil on mydbonline.perfil.funcao_id = mydbonline.funcao.id
    inner join mydbonline.user on mydbonline.user.id = mydbonline.perfil.User_id
    where ??= ?`
    const fields = ['User_id', userId]
    return {query, fields}

  }
}

export default new perfilQueries();
