import _loginQueries from '../../data/queries/loginQueries';

class login {
  allUsers() {
    return _loginQueries.listarTodos();
  }

  async qtdErrorPasswordByUserEmail(email: string) {
    return _loginQueries.errorPasswordByUserEmail(email);
  }
}

export default new login();
