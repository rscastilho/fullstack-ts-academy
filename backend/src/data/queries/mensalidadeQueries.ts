class mensalidadeQueries {
  addMensalidade(user_id: number, dataPagamento: Date, plano_id: number, mes_id: number, status: boolean) {
    const query = `INSERT INTO mensalidade (??,??,??,??,??) values(?,?,?,?,?)`;
    const fields = ['user_id', 'dataPagamento', 'plano_id', 'mes_id', 'status', user_id, dataPagamento, plano_id, mes_id, status];
    return { query, fields };
  }

  listarMensalidades() {
    const query = `select user.id userId, user.numeroMatricula matricula, user.nomeCompleto, user.dataInicio, plano.descricao, plano.valor, mensalidade.dataPagamento, mes.id mesId, mes.mes, mensalidade.status 
	from user
	inner join plano on plano.id = user.plano_id
	left join mensalidade on mensalidade.User_id = user.id
	left join mes on mes.id = mensalidade.mes_id 
	order by mes.id`;
    return { query };
  }

  valorQueSeraPago() {
    const query = `select count(user.id) as "qtdeAlunos", sum(plano.valor) as "valorReceber" from user
	  inner join plano on plano.id = user.plano_id
    inner join perfil on perfil.User_id = user.id
    where user.deleted is null or user.deleted < 1 and perfil.funcao_id  <> 1 and perfil.funcao_id  <> 2 `;
    return { query };
  }

  listarUsuariosAtivosPorPagamento() {
    const query = `select user.id, user.nomeCompleto, plano.descricao plano, plano.valor 
    from user
		inner join plano on plano.id = user.plano_id
		inner join perfil on perfil.User_id = user.id
    where 
		user.deleted = 0 or  
		user.deleted is null and 
		perfil.funcao_id  <> 1 and 
		perfil.funcao_id  <> 2 and 
		plano.valor <> 0`;
    return { query };
  }
}

export default new mensalidadeQueries();
