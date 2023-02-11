class loginQueries {
  listarTodos() {
    return `SELECT * FROM user`;
  }

  errorPasswordByUserEmail(email: string) {
    const query = `SELECT id, senhaErros, blocked, senhaExpiraem, deleted FROM mydbonline.user WHERE ?? = ?`;
    const fields: string[] = ['email', email];
    return { query, fields };
  }
}

export default new loginQueries();
