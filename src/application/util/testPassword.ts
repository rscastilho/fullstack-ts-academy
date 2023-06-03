import bcrypt from 'bcrypt';
import { connection } from './../../data/dbConnect';
import { RowDataPacket } from 'mysql2';
import _loginRepository from '../../repository/loginRepository/loginRepository';
import _userRepository from '../../repository/userRepository/userRepository';
import { retorno } from '../../interfaces/retornoValidaSenha';

class testPassword {
  async comparePassword(senhaInformada: string, senhaValidar: string, email: string, id: number): Promise<retorno> {
    try {
      const result = bcrypt.compareSync(senhaInformada, senhaValidar);
      //se a senha estiver incorreta entra no if
      if (!result) {
        //pega quantidade de erros
        const pegarUser = await _loginRepository.qtdErrorPasswordByUserEmail(email);
        const pegarQuantidadeErros: RowDataPacket[] = await connection().promise().query(pegarUser.query, pegarUser.fields);
        let quantidadeErros = pegarQuantidadeErros.map((x) => x[0].senhaErros)[0];
        const isBlocked = pegarQuantidadeErros.map((x) => x[0].blocked)[0];
        const passwordIsExpired: Date = pegarQuantidadeErros.map((x) => x[0].senhaExpiraEm)[0];
        //se a senha estiver errada e expirada, para por aqui se nao verificar que esta bloqueado e inclui um erro
        if (passwordIsExpired < new Date()) {
          return {
            message: `Sua senha expirou em ${passwordIsExpired}`,
            statusCode: 401,
          };
        } else if (quantidadeErros === 5 || isBlocked > 0) {
          const bloqueiaUsuarioQuery = await _userRepository.blockUser(true, new Date(), id);
          const bloqueiaUsuario = await connection().promise().query(bloqueiaUsuarioQuery.query, bloqueiaUsuarioQuery.fields);
          if (bloqueiaUsuario[0].affectedRows > 0) {
            return {
              message: 'Usuário bloqueado. Contate o administrador do sistema',
              statusCode: 401,
            };
          }
        } else {
          let addQtdErro = quantidadeErros + 1;
          const addErroQuery = await _userRepository.addErrors(addQtdErro, id);
          await connection().promise().query(addErroQuery.query, addErroQuery.fields);
          //será bloqueado se passar de 5 erros, com o acerto este erros serão zerados
          return {
            message: `Senha incorreta. Você errou sua senha ${addQtdErro} vez(es). ${
              5 - addQtdErro >= 1 ? 'Você tem mais ' + (5 - addQtdErro) + ' tentativas.' : 'Se errar mais uma vez será bloqueado'
            }`,
            statusCode: 401,
          };
        }
      }
      //verifica se a senha esta expirada
      const pegarUser = await _loginRepository.qtdErrorPasswordByUserEmail(email);
      const pegarQuantidadeErros: RowDataPacket[] = await connection().promise().query(pegarUser.query, pegarUser.fields);
      const passwordIsExpired: Date = pegarQuantidadeErros.map((x) => x[0].senhaExpiraEm)[0];
      if (passwordIsExpired < new Date()) {
        return {
          message: `Sua senha expirou em ${passwordIsExpired}`,
          statusCode: 401,
        };
      }

      //tudo certo retorna ok para seguir com o login
      const addErroQuery = await _userRepository.addErrors(0, id);
      await connection().promise().query(addErroQuery.query, addErroQuery.fields);
      return { message: 'Login realizado com sucesso!', statusCode: 200 };
    } catch (error: any) {
      console.log(error);
      return { message: error.message, statusCode: 404 };
    }
  }
}

export default new testPassword();
